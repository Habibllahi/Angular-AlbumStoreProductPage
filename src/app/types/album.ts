import { Track } from "./track";

export type Album = {
  "id": number;
  "artist": string;
  "album": Albumm
}

export type Albumm = {
  "name": string;
  "releaseDate": string;
  "coverImage": string;
  "tracks": Track[]
}
