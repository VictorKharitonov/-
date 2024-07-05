import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../types/user.ts';
import { getUserById } from '../../utils/api.ts';

type TResult = {
  data: User;
};

export const getUserAction = createAsyncThunk<TResult, number, { rejectValue: { error: string } }>('user', async id => {
  try {
    return await getUserById(id);
  } catch (e) {
    if (e instanceof Error) {
      throw e.message;
    }

    throw new Error('Ошибка...');
  }
});
