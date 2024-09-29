import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi.ts';
import {Album} from '../types.ts';


export const fetchAlbum = createAsyncThunk<Album[] | undefined, string | undefined>(
  'album/fetchAll',
  async (artistId) => {
    try {
      const response = await axiosApi.get<Album[]>('/albums', {
        params: { artist: artistId },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchAlbumById = createAsyncThunk<Album, string | undefined>(
  'album/fetchById',
  async (albumId) => {
    const response = await axiosApi.get<Album>(`/albums/${albumId}`);
    return response.data;
  }
)