import { createSlice } from '@reduxjs/toolkit';
import { fetchHistory } from './trackHistoryThunk.ts';
import { RootState } from './store.ts';
import {TracksHistory} from '../types.ts';

interface TrackHistoryState {
  items: TracksHistory[];
  fetchLoadingHistory: boolean;
}

const initialState: TrackHistoryState = {
  items: [],
  fetchLoadingHistory: false,
};

export const trackHistorySlice = createSlice({
  name: 'histories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHistory.pending, (state) => {
      state.fetchLoadingHistory = true;
    });
    builder.addCase(fetchHistory.fulfilled, (state, { payload: history }) => {
      state.fetchLoadingHistory = false;
      state.items = history;
    });
    builder.addCase(fetchHistory.rejected, (state) => {
      state.fetchLoadingHistory = false;
    });
  },
});

export const trackHistoryReducer = trackHistorySlice.reducer;
export const selectTrackHistories = (state: RootState) => state.histories.items;
export const selectTrackHistoryLoading = (state: RootState) => state.histories.fetchLoadingHistory;
