import { createSlice } from '@reduxjs/toolkit';
import { fetchTrack } from './trackThunk.ts';
import { RootState } from './store.ts';
import { Track } from '../types.ts';

interface TrackState {
  items: Track[] | undefined,
  fetchLoading: boolean,
}

const initialState: TrackState = {
  items: [],
  fetchLoading: false,
};

export const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrack.pending, (state) => {
      state.fetchLoading = true;
    })
      .addCase(fetchTrack.fulfilled, (state, {payload}) => {
      state.fetchLoading = false;
      state.items = payload;
    })
      .addCase(fetchTrack.rejected, (state) => {
        state.fetchLoading = false;
      })
  },
});

export const trackReducer = trackSlice.reducer;
export const selectTrack = (state: RootState) => state.track.items;