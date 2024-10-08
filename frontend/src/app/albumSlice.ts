import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import {fetchAlbums, fetchAllAlbums} from './albumThunk.ts';
import { Album } from '../types.ts';

interface AlbumState {
  items: Album[];
  fetchLoading: boolean;
}

const initialState: AlbumState = {
  items: [],
  fetchLoading: false,
};

export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAlbums.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchAlbums.fulfilled, (state, {payload: albums}) => {
      state.fetchLoading = false;
      state.items = albums;
    });
    builder.addCase(fetchAlbums.rejected, (state) => {
      state.fetchLoading = false;
    });
    builder.addCase(fetchAllAlbums.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchAllAlbums.fulfilled, (state, { payload: albums }) => {
      state.fetchLoading = false;
      state.items = albums;
    });
    builder.addCase(fetchAllAlbums.rejected, (state) => {
      state.fetchLoading = false;
    });
  },
});

export const albumReducer = albumSlice.reducer;
export const selectAlbums = (state: RootState) => state.album.items;
export const isLoading = (state: RootState) => state.album.fetchLoading;

