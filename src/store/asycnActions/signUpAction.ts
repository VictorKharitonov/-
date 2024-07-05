import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUp } from '../../utils/api.ts';

type TResult = {
  id: number;
  token: string;
};

type TPayload = { email: string; password: string };

export const signUpAction = createAsyncThunk<TResult, TPayload, { rejectValue: { error: string } }>(
  'signUp',
  async ({ email, password }) => {
    try {
      const data = await signUp({ email, password });
      localStorage.setItem('token', data.token);

      return data;
    } catch (e) {
      if (e instanceof Error) {
        throw e.message;
      }

      throw new Error('Ошибка...');
    }
  }
);
