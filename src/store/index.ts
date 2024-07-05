import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { signUpSlice } from './slices/signUpSlice.ts';
import { usersSlice } from './slices/usersSlice.ts';
import { userSlice } from './slices/userSlice.ts';

const rootReducer = combineReducers({
  signUp: signUpSlice.reducer,
  users: usersSlice.reducer,
  user: userSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
