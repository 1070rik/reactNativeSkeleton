import {combineReducers} from 'redux';
import counterData from './CounterReducer';
import apiData from './ApiReducer';

const rootReducer = combineReducers({
  counterData,
  apiData,
});

export default rootReducer;
