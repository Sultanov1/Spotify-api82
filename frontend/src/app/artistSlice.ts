import {Artist} from '../types.ts';
import {createSlice} from '@reduxjs/toolkit';
import {fetchArtist} from './artistThunk.ts';
import {RootState} from './store.ts';

interface artistState {
  items: Artist[],
  isLoading: boolean;
}

const initialState: artistState = {
  items: [],
  isLoading: false,
}

export const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArtist.pending, (state) => {
      state.isLoading = true;
    })
      .addCase(fetchArtist.fulfilled, (state, {payload: artists}) => {
        state.isLoading = false;
        state.items = artists;
      })
  }
})

export const artistReducer = artistSlice.reducer;
export const selectArtist = (state: RootState) => state.artist.items;
export const selectArtistLoading = (state: RootState) => state.artist.isLoading;