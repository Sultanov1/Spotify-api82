import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../axiosApi.ts';
import {IArtist} from '../types.ts';

export const fetchArtist = createAsyncThunk<IArtist[]>('artist/fetch', async () => {
  const {data: artist} = await axiosApi.get<IArtist[]>('/artists');
  return artist;
});