import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi.ts';
import {Track} from '../types.ts';


export const fetchTracks = createAsyncThunk<Track[], string>(
  'tracks/fetchTracks',
  async (id: string) => {
    const response = await axiosApi.get<Track[]>(`/tracks?album=${id}`);
    return response.data;
  },
);

