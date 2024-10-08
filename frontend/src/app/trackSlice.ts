import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store.ts';
import { Track } from '../types.ts';
import {fetchTracks} from './trackThunk.ts';

interface TrackState {
  items: Track[],
  fetchLoading: boolean,
}

const initialState: TrackState = {
  items: [],
  fetchLoading: false,
};

export const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTracks.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchTracks.fulfilled, (state, { payload: tracks }) => {
      state.fetchLoading = false;
      state.items = tracks;
    });
    builder.addCase(fetchTracks.rejected, (state) => {
      state.fetchLoading = false;
    });
  },
});

export const trackReducer = tracksSlice.reducer;
export const selectTrack = (state: RootState) => state.tracks.items;
export const isLoading = (state: RootState) => state.tracks.fetchLoading;