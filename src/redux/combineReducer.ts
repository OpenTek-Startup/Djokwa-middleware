import { combineReducers } from '@reduxjs/toolkit';
import themeSlice from '../actions/themeSlice';
import userSlice from '../actions/userSlice';
export const reducer = combineReducers({
  themeSlice: themeSlice.reducer,
  user: userSlice,
});
