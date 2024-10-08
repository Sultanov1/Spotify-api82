import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi.ts';
import { Album } from '../types.ts';


export const fetchAlbums = createAsyncThunk<Album[] ,string>(
  'album/fetchAlbums', async (id: string) => {
      const response = await axiosApi.get<Album[]>(`/albums?artist=${id}`);
      return response.data;
  }
);

export const fetchAlbumById = createAsyncThunk<Album, string | undefined>(
  'album/fetchById',
  async (albumId) => {
    const response = await axiosApi.get<Album>(`/albums/${albumId}`);
    return response.data;
  }
);

export const fetchAllAlbums = createAsyncThunk<Album[]>('albums/fetchAllAlbums', async () => {
  const response = await axiosApi.get<Album[]>('albums');
  return response.data;
});