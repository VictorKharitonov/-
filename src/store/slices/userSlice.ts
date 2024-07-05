import { User } from '../../types/user.ts';
import { createSlice } from '@reduxjs/toolkit';
import { getUserAction } from '../asycnActions/userAction.ts';

interface UserSlice {
  data: User;
  isLoading: boolean;
  error: string | undefined;
}

const initialState: UserSlice = {
  data: {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: ''
  },
  isLoading: false,
  error: ''
};

export const userSlice = createSlice<UserSlice>({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUserAction.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getUserAction.fulfilled, (state, { payload: { data } }) => {
      state.isLoading = false;
      state.data = data;
    });
    builder.addCase(getUserAction.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
  }
});
