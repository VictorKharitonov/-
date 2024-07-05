import { createSlice } from '@reduxjs/toolkit';
import { signUpAction } from '../asycnActions/signUpAction.ts';

interface SignUpSlice {
  id: number;
  token: string;
  isLoading: boolean;
  error: string | undefined;
}

const initialState: SignUpSlice = {
  id: 0,
  token: localStorage.getItem('token') || '',
  isLoading: false,
  error: ''
};

export const signUpSlice = createSlice<SignUpSlice>({
  name: 'signUp',
  initialState,
  reducers: {
    logout: state => {
      state.id = 0;
      state.token = '';
      localStorage.removeItem('token');
    }
  },
  extraReducers: builder => {
    builder.addCase(signUpAction.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(signUpAction.fulfilled, (state, { payload: { id, token } }) => {
      state.isLoading = false;
      state.token = token;
      state.id = id;
      console.log(id, token);
    });
    builder.addCase(signUpAction.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
  }
});

export const { logout } = signUpSlice.actions;
