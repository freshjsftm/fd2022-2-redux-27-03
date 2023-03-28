import { combineReducers } from '@reduxjs/toolkit';
import countReducer from './countSlice';
import todoReducer from './todoSlice';

const rootReducer = combineReducers({
  counter: countReducer,
  todo: todoReducer,
})

export default rootReducer;