import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../types/user.ts';
import { getUsers } from '../../utils/api.ts';

type TResult = {
  data: User[];
  page: number;
  total: number;
  total_pages: number;
};

export const getUsersAction = createAsyncThunk<TResult, number, { rejectValue: { error: string } }>(
  'users',
  async page => {
    try {
      return await getUsers(page);
    } catch (e) {
      if (e instanceof Error) {
        throw e.message;
      }

      throw new Error('Ошибка...');
    }
  }
);
