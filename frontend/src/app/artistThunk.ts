import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../axiosApi.ts';
import {Album, Artist} from '../types.ts';

export const fetchArtist = createAsyncThunk<Artist[]>('artist/fetch', async () => {
  const {data: artist} = await axiosApi.get<Artist[]>('/artists');
  return artist;
});

export const fetchArtistName = createAsyncThunk<Album, string>(
  'artist/fetchByName',
  async (id: string) => {
    const response = await axiosApi.get<Album>(`/artists/${id}`);
    console.log(response.data)
    return response.data;
  }
);