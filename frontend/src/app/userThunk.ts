import { createAsyncThunk } from '@reduxjs/toolkit';
import {GlobalError, LoginMutation, RegisterMutation, RegisterResponse, ValidationError} from '../types.ts';
import axiosApi from '../axiosApi.ts';
import {isAxiosError} from 'axios';

export const register = createAsyncThunk<RegisterResponse, RegisterMutation, { rejectValue: ValidationError }>(
  'users/register',
  async (registerMutation, {rejectWithValue}) => {
    try {
      const response = await axiosApi.post('/users', registerMutation);
      return response.data
    } catch (e) {
      if(e) {
        if(isAxiosError(e) && e.response && e.response.status === 422) {
          return rejectWithValue(e.response.data);
        }

        throw e;
      }
    }
  }
);

export const login = createAsyncThunk<RegisterResponse, LoginMutation, {rejectValue: GlobalError}>(
  'users/login',
  async (loginMutation, {rejectWithValue}) => {
    try {
      const response = await axiosApi.post<RegisterResponse>('/users/sessions', loginMutation);
      return response.data
    } catch (e) {
      if(isAxiosError(e) && e.response && e.response.status === 422) {
        return rejectWithValue(e.response.data);
      }

      throw e;
    }
  }
);