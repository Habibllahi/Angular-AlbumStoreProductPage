import { Track } from "./track";

export interface Album {
  name: string;
  releaseDate: string;
  coverImage: string;
  tracks: Track[];
}

export interface Album {
  id: number;
  artist: string;
  album : Album;
  l?: string;
}
