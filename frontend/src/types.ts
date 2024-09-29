export interface Artist {
  _id: string;
  name: string;
  image: string | null;
  info: string;
}

export interface Album {
  _id: string;
  name: string;
  artist: Artist;
  date: number;
  image: string | null
}

export interface Track {
  _id: string,
  name: string,
  album: string,
  duration: string,
  number: number,
}