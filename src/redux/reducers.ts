import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user-reducer';
import appStateReducer from './app-state-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  appState: appStateReducer,
});

export default rootReducer;
