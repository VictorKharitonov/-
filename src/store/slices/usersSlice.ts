import { User } from '../../types/user.ts';
import { createSlice } from '@reduxjs/toolkit';
import { getUsersAction } from '../asycnActions/usersAction.ts';

interface UsersSlice {
  data: User[];
  page: number;
  total: number;
  total_pages: number;
  isLoading: boolean;
  error: string | undefined;
}

const initialState: UsersSlice = {
  data: [],
  page: 0,
  total: 0,
  total_pages: 0,
  isLoading: false,
  error: ''
};

export const usersSlice = createSlice<UsersSlice>({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUsersAction.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getUsersAction.fulfilled, (state, { payload: { data, page, total_pages } }) => {
      state.isLoading = false;
      state.data = page === 1 ? data : [...state.data, ...data];
      state.page = page;
      state.total_pages = total_pages;
    });
    builder.addCase(getUsersAction.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
  }
});
