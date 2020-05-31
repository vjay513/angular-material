import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { CrudService } from '../crud.service';
import * as personsActions from '../store/person.action';
import { Persons } from '../../model/persons.model';

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
    ofType<personsActions.LoadPersons>(
      personsActions.PersonsActionTypes.LOAD_PERSONS
    ),
    mergeMap((actions: personsActions.LoadPersons) =>
      this.crud.loadPersons().pipe(
        map(
          (persons: Persons[]) => {
            return new personsActions.FetchDetails(persons);
          }
        ),
      )
    )
  );
}
