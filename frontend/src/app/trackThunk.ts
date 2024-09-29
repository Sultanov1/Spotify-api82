import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import { Track } from '../types';


export const fetchTrack = createAsyncThunk<Track[] | undefined, string | undefined>(
  'album/fetchAll',
  async (albumId) => {
    try {
      const response = await axiosApi.get<Track[]>(`/tracks/${albumId}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchTrackByAlbumId = createAsyncThunk<Track[] | undefined, string | undefined>(
  'album/fetchTrackByAlbumId',
  async (albumId) => {
    try {
      const response = await axiosApi.get<Track[]>(`/tracks?album=${albumId}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);