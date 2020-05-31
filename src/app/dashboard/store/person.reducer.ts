import * as personsActions from '../store/person.action';
import { Persons } from '../../model/persons.model';
import * as fromRoot from '../../store/app-store';

export interface PersonState {
  persons: Persons[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppStore {
  persons: PersonState;
}


export const initialState: PersonState = {
  persons: [],
  loading: false,
  loaded: false,
  error: '',
}

const initialState1 = {
  persons: [
    {
      name: 'Vijay',
      company: 'Benton, John B Jr',
      address: '6649 N Blue Gum St',
      city: 'New Orleans',
      county: 'Orleans',
      zip: 70116,
      phone: '504-621-8927',
      email: 'jbutt@gmail.com',
      id: 1590851308500,
      action: null
    },
    {
      name: 'Krishna',
      company: 'Benton, John B Jr',
      address: '6649 N Blue Gum St',
      city: 'New Orleans',
      county: 'Orleans',
      zip: 70116,
      phone: '504-621-8927',
      email: 'jbutt@gmail.com',
      id: 1590851308501,
      action: null
    },
    {
      name: 'James1',
      company: 'Benton, John B Jr',
      address: '6649 N Blue Gum St',
      city: 'New Orleans',
      county: 'Orleans',
      zip: 70116,
      phone: '504-621-8927',
      email: 'jbutt@gmail.com',
      id: 1590851308502,
      action: null
    },
    {
      name: 'Applie',
      company: 'Benton, John B Jr',
      address: '6649 N Blue Gum St',
      city: 'New Orleans',
      county: 'Orleans',
      zip: 70116,
      phone: '504-621-8927',
      email: 'jbutt@gmail.com',
      id: 1590851308503,
      action: null
    },
    {
      name: 'aghsj',
      company: 'Benton, John B Jr',
      address: '6649 N Blue Gum St',
      city: 'New Orleans',
      county: 'Orleans',
      zip: 70116,
      phone: '504-621-8927',
      email: 'jbutt@gmail.com',
      id: 1590851308504,
      action: null
    },
    {
      name: 'njnckjcc',
      company: 'Benton, John B Jr',
      address: '6649 N Blue Gum St',
      city: 'New Orleans',
      county: 'Orleans',
      zip: 70116,
      phone: '504-621-8927',
      email: 'jbutt@gmail.com',
      id: 1590851308505,
      action: null
    }
  ],
  loading: false,
  loaded: true
};

export function PersonReducer(
  state = initialState,
  action: personsActions.Actions
  ): PersonState {
  switch (action.type) {
    case personsActions.PersonsActionTypes.LOAD_PERSONS: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case personsActions.PersonsActionTypes.FETCH_DETAILS: {
      return {
        ...state, persons: [...state.persons, ...action.payload]
      };
    }
    case personsActions.PersonsActionTypes.UPDATE_PERSONS: {
      return {
        ...state,
        persons: [...state.persons.map(val => (val.id === action.payload.id) ? {...val, name: action.payload.name} : val)]
      };
    }
    case personsActions.PersonsActionTypes.DELETE_PERSONS: {
      return {
        ...state,
        persons: [...state.persons.filter(val => (val.id !== action.payload.id) )]
      };
    }
    default: {
      return state;
    }
  }
}
