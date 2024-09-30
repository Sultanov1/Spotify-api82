import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import { RegisterMutation, RegisterResponse, ValidationError } from '../types';
import axiosApi from '../axiosApi';

export const register = createAsyncThunk<RegisterResponse, RegisterMutation, { rejectValue: ValidationError }>(
  'users/register',
  async (registerMutation, { rejectWithValue }) => {
    try {
      const response = await axiosApi.post('/users', registerMutation);
      return response.data;
    } catch (e) {
      if (isAxiosError(e) && e.response) {
        if (e.response.status === 422) {
          return rejectWithValue(e.response.data);
        }
      }
      throw e;
    }
  }
);
