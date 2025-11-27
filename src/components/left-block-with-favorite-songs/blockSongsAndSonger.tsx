import React from "react";
import Style from "./blockSongsAndSonger.module.css";
import { NavLink } from "react-router-dom";

export const blockSongsAndSonger = (
  indexes: string[],
  obj: Record<string, string[]>
) => {
  let blockWithSongs = indexes.map((songerName) => {
    let counter = 0;
    const songs = obj[songerName].map((song) => {
      counter++;
      return (
        <NavLink to={`/chords/${songerName}/${song}`} className={Style.songString}>
          <p className={Style.song}>{counter < 10 ? "0" + counter : counter}</p>
          <p className={Style.song}>{song}</p>
        </NavLink>
      );
    });
    return (
      <div className={Style.blockWithSongs}>
        <h3 className={Style.songerName}>{songerName}</h3>
        <p>{songs}</p>
      </div>
    );
  });

  return <div>{blockWithSongs}</div>;
};
