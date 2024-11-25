import React from "react";
import cx from "classnames";

import Style from "./favorite-songs.module.css";
import { ShadowLogo } from "../shodow-logo/shadow-logo";
import { AppHeader } from "../app-header/app-header";
import { Layout } from "../layout/layout";
import { IFavoriteSongs } from "../../pages/words-chords";
import { filterArray } from "./filterArray";

export const FavoriteSongs = () => {
  const stringWithSongs = window.localStorage.getItem("favoriteSongs");
  const objectsList: IFavoriteSongs[] = JSON.parse(stringWithSongs!);
  console.log(objectsList);

  const obj = filterArray(objectsList)

  console.log('obj', obj)

  return (
    <div>
      <div className={Style.zIndex}>
        <AppHeader page="home" />
      </div>

      <ShadowLogo />

      <Layout>
        <div className={Style.leftBorder}>
          <h2 className={Style.title}>мои аккорды</h2>
        </div>

        {/* <div>{leftColumn}</div> */}

        {/* <div>{rightColumn}</div> */}
      </Layout>
    </div>
  );
};
