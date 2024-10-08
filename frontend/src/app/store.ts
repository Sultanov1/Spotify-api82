import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {artistReducer} from "./artistSlice";
import { albumReducer } from './albumSlice.ts';
import { trackReducer } from './trackSlice.ts';
import {usersReducer} from './userSlice.ts';
import {FLUSH, persistReducer, persistStore} from 'redux-persist';
import {PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from 'redux-persist/es/constants';
import storage from 'redux-persist/lib/storage';
import {trackHistoryReducer} from './trackHistorySlice.ts';

const userPersistConfig = {
  key: 'store:users',
  storage: storage,
  whitelist: ['user'],
}

const rootReducer = combineReducers({
  artist: artistReducer,
  album: albumReducer,
  tracks: trackReducer,
  histories: trackHistoryReducer,
  users: persistReducer(userPersistConfig, usersReducer),
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, REHYDRATE, PURGE, REGISTER]
      }
    });
  }
});

export const persist = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;