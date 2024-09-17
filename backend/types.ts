import {Model} from 'mongoose';

export interface ArtistMutation {
    name: string;
    image: string | null;
    info: string | null;
}

export interface AlbumMutation {
  name: string,
  artist: string,
  date: string,
  image: string | null,
}

export interface TrackMutation {
  name: string,
  album: string,
  duration: string,
}

export interface UserFields {
  username: string;
  password: string;
  token: string;
}

export interface UserMethods {
  checkPassword(password: string): Promise<boolean>;
  generateToken(): void;
}

export interface TracksHistory {
  user: string;
  trackId: string;
}


export type UserModel = Model<UserFields, {}, UserMethods>;