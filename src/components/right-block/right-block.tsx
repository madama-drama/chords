import React from "react";
import cx from "classnames";

import Styles from "./right-block.module.css";
import photoLeftTop from "../../image/musican-left-top.png";
import photoLeftDown from "../../image/musican-left-down.jpg";
import photoRightCenter from "../../image/musican-right.jpg";
import { useSelector } from "../../services";
import { SongsList } from "./songs-list/songs-list";

export const RightBlock = () => {
  const openedSongsList = useSelector((store) => store.songsList.opened);

  return (
    <div className={Styles.block}>
        <p className={Styles.title}>.chords</p>

        <div className={Styles.gallery}>
          <img
            src={photoLeftTop}
            alt="Девушка-вокалистка"
            className={cx(Styles.photo, Styles.topPhoto)}
          />
          <img
            src={photoLeftDown}
            alt="Блондинка, играющая соло"
            className={cx(Styles.photo, Styles.downPhoto)}
          />
          <img
            src={photoRightCenter}
            alt="Девчонка, которой препод по гитаре сказал: 'После выпуска хоть лежа играй!'"
            className={cx(Styles.photo, Styles.centerPhoto)}
          />
      </div>

      {openedSongsList && <SongsList />}
    </div>
  );
};
