
const initialState = {
  persons: [
    {
      name: 'James',
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
      name: 'James1',
      company: 'Benton, John B Jr',
      address: '6649 N Blue Gum St',
      city: 'New Orleans',
      county: 'Orleans',
      zip: 70116,
      phone: '504-621-8927',
      email: 'jbutt@gmail.com',
      id: 1590851308501,
      action: null
    }
  ],
  loading: false,
  loaded: true
};

export function PersonReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_PERSONS': {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case 'UPDATE_USERS': {
        return {
          ...state,
          loaded: false,
          loading: false
        };
    }
    default: {
      return state;
    }
  }
}
/* import * as personActions from './person.action';
import { Persons } from 'src/app/model/persons.model';

export function personsReducer(
  state,
  action: personActions.Actions
): Persons {
  switch (action.type) {
    case personActions.PersonActionTypes.LOAD_PERSONS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }
    case personActions.PersonActionTypes.LOAD_PERSONS_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

 */
