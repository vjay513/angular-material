import { Action } from '@ngrx/store';
import { Persons } from 'src/app/model/persons.model';

export enum PersonActionTypes {
  LOAD_PERSONS = '[Person] Load Persons',
  LOAD_PERSONS_SUCCESS = '[Person] Load Persons Sucess',
  LOAD_PERSONS_FAIL = '[Person] Load Persons Fail',
}

export class LoadPersons implements Action {
  readonly type = PersonActionTypes.LOAD_PERSONS;
}

export class LoadPersonsSuccess implements Action {
  readonly type = PersonActionTypes.LOAD_PERSONS_SUCCESS;

  constructor(public payload: Persons[]) {}
}

export class LoadPersonsFail implements Action {
  readonly type = PersonActionTypes.LOAD_PERSONS_FAIL;

  constructor(public payload: string) {}
}

export type Actions =
LoadPersons |
LoadPersonsSuccess |
LoadPersonsFail ;
