import {Artist} from '../types.ts';
import {createSlice} from '@reduxjs/toolkit';
import {fetchArtist, fetchArtistById} from './artistThunk.ts';
import {RootState} from './store.ts';

interface artistState {
  items: Artist[],
  artist: Artist | undefined;
  isLoading: boolean;
}

const initialState: artistState = {
  items: [],
  artist: undefined,
  isLoading: false,
}

export const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArtist.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArtist.fulfilled, (state, {payload: artists}) => {
      state.isLoading = false;
      state.items = artists;
    });
    builder.addCase(fetchArtistById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArtistById.fulfilled, (state, { payload: artist }) => {
      state.isLoading = false;
      state.artist = artist;
    });
  },
});

export const artistReducer = artistSlice.reducer;
export const selectArtists = (state: RootState) => state.artist.items;
export const selectArtist = (state: RootState) => state.artist.artist;
