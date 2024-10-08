import {Artist} from '../types.ts';
import {createSlice} from '@reduxjs/toolkit';
import {fetchArtist, fetchArtistName} from './artistThunk.ts';
import {RootState} from './store.ts';

interface artistState {
  items: Artist[],
  artist: Artist | null;
  isLoading: boolean;
  artistName: string,
}

const initialState: artistState = {
  items: [],
  artist: null,
  isLoading: false,
  artistName: '',
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
    builder.addCase(fetchArtist.rejected, (state) => {
      state.isLoading = false;
    })
    builder.addCase(fetchArtistName.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArtistName.fulfilled, (state, { payload: info }) => {
      state.isLoading = false;
      state.artistName = info.artist.name;
    });
    builder.addCase(fetchArtistName.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const artistReducer = artistSlice.reducer;
export const selectArtists = (state: RootState) => state.artist.items;
export const selectArtistName = (state: RootState) => state.artist.artistName;
export const selectArtist = (state: RootState) => state.artist.artist;
