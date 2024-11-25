import React from "react";
import cx from "classnames";

import Style from "./songs-list.module.css";
import {songers} from "../../../mock-data";

import closeButton from "../../../image/x-white.svg";
import { useDispatch, useSelector } from "../../../services";
import { closeList } from "./store/slice";
import { numbers_for_song_and_songers } from "../../../functions";
import { NavLink } from "react-router-dom";

export const SongsList = () => {
  const songerId = useSelector((store) => store.songsList.songerId);
  const dispath = useDispatch();

  const onClose = () => {
    dispath(closeList());
  };

  const songer = songers.find((songer) => songer.number === songerId)!;
  const list = songer.songs.map((song) => (
    <NavLink to={`/chords/${songer.songer}/${song.name}`} className={Style.songBlock}>
      <p className={Style.songItem}>{numbers_for_song_and_songers(song.num)}</p>
      <p className={cx(Style.songItem, Style.songMargins)}>{song.name}</p>
    </NavLink>
  ));

  return (
    <div className={Style.block}>
      <h1 className={Style.title}>аккорды</h1>
      <img
        src={closeButton}
        alt="крестик, закрывающий список песен"
        className={Style.closeButton}
        onClick={onClose}
      />
      <h2 className={Style.songerName}>{songer.songer}</h2>
      <div className={Style.list}>{list}</div>
    </div>
  );
};
