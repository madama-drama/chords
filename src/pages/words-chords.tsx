import React, { useEffect, useState } from "react";
import cx from "classnames";

import { songers } from "../mock-data";
import arrowBlack from "../image/arrow-black.svg";

import Style from "./words-chords.module.css";
import { AppHeader } from "../components/app-header/app-header";
import { useNavigate, useParams } from "react-router-dom";
import { numbers_for_song_and_songers } from "../functions";
import { Layout } from "../components/layout/layout";
import like from "../image/like.svg";
import likeActive from "../image/red-like.svg";
import { Lyrics } from "../components/lyrics/lyrics";

export interface IFavoriteSongs {
  nameSonger: string;
  nameSong: string;
}

export const WordsChords = () => {
  const navigate = useNavigate();
  const { songer, songName } = useParams();
  const [isLiked, setIsLiked] = useState(false);

  const songerName = songers.find((value) => value.songer === songer)!;
  const song = songers
    .find((value) => value.songer === songer)
    ?.songs.find((value) => value.name === songName)!;

  const number = song.num;
  const image = songerName.image;

  useEffect(() => {

  }, []);

  const liked = () => {
    const favoriteSongsArray: IFavoriteSongs[] = JSON.parse(
      window.localStorage.getItem(`favoriteSongs`) || "[]"
    );

    if (!isLiked) {
      setIsLiked(true)
      favoriteSongsArray.push({
        nameSonger: songerName.songer,
        nameSong: song.name,
      });

      window.localStorage.setItem(
        `favoriteSongs`,
        JSON.stringify(favoriteSongsArray)
      );
    } else {
      setIsLiked(false)
      favoriteSongsArray.filter((value) => value.nameSong !== song.name);

      window.localStorage.setItem(
        `favoriteSongs`,
        JSON.stringify(favoriteSongsArray)
      );
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={Style.container}>
      <AppHeader page="chords" />
      <div className={Style.titleBlock}>
        <Layout columnsType="centerWide">
          <p className={Style.songNumber}>
            {numbers_for_song_and_songers(number)}.
          </p>

          <div className={Style.positionForCircles}>
            <div className={Style.circleBorder}>
              <div className={Style.mask}>
                <img src={image} alt="" className={Style.image} />
              </div>
            </div>
            <button className={cx(Style.littleCircleBorder)} onClick={liked}>
              <img
                className={Style.like}
                src={isLiked ? likeActive : like}
                alt="Кнопка, если песня понравилась"
              />
            </button>
          </div>

          <div className={Style.rightBlock}>
            <div className={Style.title_song_and_songer}>
              <h1 className={Style.songer}>{songerName.songer}</h1>
              <h2 className={Style.song}>{song.name}</h2>
            </div>

            <img
              onClick={goBack}
              src={arrowBlack}
              alt="Стрелка назад"
              className={Style.arrowBack}
            />
          </div>
        </Layout>

        <Layout classname={Style.layout_with_lines} columnsType="centerWide">
          <div className={cx(Style.verticalLine, Style.leftLine)} />
          <div className={cx(Style.verticalLine, Style.rightLine)} />
        </Layout>
      </div>

      <Layout columnsType="centerWide" hideOverflow={false}>
        <div className={Style.empty} />
        <Lyrics song={song} />
        <div className={Style.empty} />
      </Layout>

      <footer className={Style.footer}>
        <p className={Style.footerLogo}>chords.</p>
      </footer>
    </div>
  );
};
