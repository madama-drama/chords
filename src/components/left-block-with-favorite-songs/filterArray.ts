import { IFavoriteSongs } from "../../pages/words-chords";

export const filterArray = (array: IFavoriteSongs[]) => {
  const obj: Record<
    IFavoriteSongs["nameSonger"],
    IFavoriteSongs["nameSong"][] | undefined
  > = {};

  debugger;
  for (let i = 0; i < array.length; i++) {
    let v = array[i].nameSonger;
    console.log(v)
    const songsList = obj[v];

    if (songsList) {
      let song = array[i].nameSong;
      songsList.push(song);

      obj[array[i].nameSonger] = songsList;

    }
  }
  return obj;
};
