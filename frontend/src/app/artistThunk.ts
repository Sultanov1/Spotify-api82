import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../axiosApi.ts';
import {Artist} from '../types.ts';

export const fetchArtist = createAsyncThunk<Artist[]>('artist/fetch', async () => {
  const {data: artist} = await axiosApi.get<Artist[]>('/artists');
  return artist;
});