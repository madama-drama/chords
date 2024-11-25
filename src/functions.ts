export const numbers_for_song_and_songers = (number: number) => {
    if (number < 10) {
      return "0" + number;
    }
    return number;
  };