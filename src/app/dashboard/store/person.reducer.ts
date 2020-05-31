
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
        persons: [...state.persons.map(val => (val.id === action.target.id) ? {...val, name: action.target.name} : val)]
      };
    }
    case 'DELETE_USER': {
      console.log(action.target);
      return {
        ...state,
        persons: [...state.persons.filter(val => (val.id !== action.target.id) )]
      };
    }
    default: {
      return state;
    }
  }
}
