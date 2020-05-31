import { Action } from '@ngrx/store';
import { Persons } from '../../model/persons.model';

export enum PersonsActionTypes {
  LOAD_PERSONS = 'LOAD PERSONS',
  UPDATE_PERSONS = 'UPDATE PERSONS',
  DELETE_PERSONS = 'DELETE PERSONS',
  FETCH_DETAILS = 'FETCH DETAILS',
}

export class LoadPersons implements Action {
  readonly type = PersonsActionTypes.LOAD_PERSONS;
}

export class FetchDetails implements Action {
  readonly type = PersonsActionTypes.FETCH_DETAILS;
  constructor(public payload: Persons[]) {}
}

export class UpdatePersons implements Action {
  readonly type = PersonsActionTypes.UPDATE_PERSONS;

  constructor(public payload: Persons) {}
}

export class DeletePerons implements Action {
  readonly type = PersonsActionTypes.DELETE_PERSONS;

  constructor(public payload: Persons) {}
}

export type Actions = LoadPersons | UpdatePersons | DeletePerons | FetchDetails;
