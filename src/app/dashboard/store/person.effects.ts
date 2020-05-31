import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { CrudService } from '../crud.service';
import * as personActions from './person.action';
import { Persons } from 'src/app/model/persons.model';

import { Observable, of } from 'rxjs';

import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class PersonEffect {
  constructor(
    private actions$: Actions,
    private crud: CrudService
  ) { }

  @Effect()
  loadPersons$: Observable<Action> = this.actions$.pipe(
    ofType<personActions.LoadPersons>(
      personActions.PersonActionTypes.LOAD_PERSONS
    ),
    mergeMap((actions: personActions.LoadPersons) =>
      this.crud.loadPersons().pipe(
        map(
          (persons: Persons[]) => new personActions.LoadPersonsSuccess(persons)
        ),
        catchError(err => of(new personActions.LoadPersonsFail(err)))
      )
    )
  );
}
