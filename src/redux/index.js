// index reducer, one reducer to rule them all

import { combineReducers } from 'redux';
import counterReducer from './CounterReducer';

// reducers import

const appReducers = combineReducers({
  counter: counterReducer
});

export default appReducers;
