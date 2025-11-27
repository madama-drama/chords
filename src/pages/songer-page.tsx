import React from "react";
import { NavLink, useParams } from "react-router-dom";
import cx from "classnames";

import Style from "./songer-page.module.css";
import { AppHeader } from "../components/app-header/app-header";
import { ShadowLogo } from "../components/shodow-logo/shadow-logo";
import { Layout } from "../components/layout/layout";
import { numbers_for_song_and_songers } from "../functions";
import { useSongers } from "../requests";

export const SongerPage = () => {
  const { songer } = useParams();
  const { data: songers } = useSongers();

  let correctSongerObj = songers.find(
    (songerObj) => songerObj.songer === songer
  );

  let leftSongsList = correctSongerObj?.songs
    .slice(0, correctSongerObj?.songs.length / 2)
    .map((song) => (
      <NavLink to={`/chords/${songer}/${song.name}`} className={Style.songLink}>
        <p className={cx(Style.songMargin, Style.songName)}>
          {numbers_for_song_and_songers(song.num)}
        </p>
        <p className={Style.songName}>{song.name}</p>
      </NavLink>
    ));

  let rightSongsList = correctSongerObj?.songs
    .slice(correctSongerObj?.songs.length / 2, correctSongerObj?.songs.length)
    .map((song) => (
      <NavLink to={`/chords/${songer}/${song.name}`} className={Style.songLink}>
        <p className={cx(Style.songMargin, Style.songName)}>
          {numbers_for_song_and_songers(song.num)}
        </p>
        <p className={Style.songName}>{song.name}</p>
      </NavLink>
    ));

  return (
    <div className={Style.page}>
      <div className={Style.zIndex}>
        <AppHeader page="chords" />
      </div>

      <ShadowLogo />

      <div className={Style.block_with_content}>
        <Layout>
          <div className={Style.leftBorder}>
            <h2 className={Style.title}>{songer}</h2>
          </div>

          <div>{leftSongsList}</div>
          <div>{rightSongsList}</div>
        </Layout>
      </div>

      <Layout classname={Style.layout_with_lines}>
        <div className={cx(Style.verticalLine)} />
        <div className={cx(Style.verticalLine)} />
      </Layout>
    </div>
  );
};
