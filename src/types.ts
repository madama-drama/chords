export interface Song {
  name: string;
  num: number;
  text?: {
    type: "Куплет" | "Припев";
    words: string[];
    notes: string[][];
  }[];
  bridge?: string[];
}

export interface Songer {
  songer: string;
  number: number;
  songs: Song[];
  image?: string;
}

export interface FavoriteSong {
  nameSonger: string;
  nameSong: string;
}
