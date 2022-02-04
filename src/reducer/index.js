import { combineReducers } from 'redux';

const initialState = {
  number: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, number: state.number + action.payload };
    case 'DECREMENT':
      return { ...state, number: state.number - action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
