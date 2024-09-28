export interface Artist {
  _id: string;
  name: string;
  image: string | null;
  info: string;
}

export interface Album {
  _id: string;
  name: string;
  artist: string;
  date: number;
  image: string | null
}