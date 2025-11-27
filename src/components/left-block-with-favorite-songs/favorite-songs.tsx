import React from "react";
import cx from "classnames";

import Style from "./favorite-songs.module.css";
import { ShadowLogo } from "../shodow-logo/shadow-logo";
import { AppHeader } from "../app-header/app-header";
import { Layout } from "../layout/layout";
import { blockSongsAndSonger } from "./blockSongsAndSonger";
import { useFavoriteSongs } from "../../requests";

export const FavoriteSongs = () => {
  const { data: arrayWithSongs } = useFavoriteSongs();

  let obj: Record<string, string[]> = {};
  arrayWithSongs.forEach((v) => {
    if (obj[v.nameSonger]) {
      obj[v.nameSonger].push(v.nameSong);
    } else {
      obj[v.nameSonger] = [];
      obj[v.nameSonger].push(v.nameSong);
    }
  });

  let indexArr = Object.keys(obj);
  indexArr.sort();

  let leftHalfIndexes = indexArr.slice(0, Math.ceil(indexArr.length / 2));
  let rigthHalfIndexes = indexArr.slice(
    Math.ceil(indexArr.length / 2),
    indexArr.length
  );

  const leftBlockSongs = blockSongsAndSonger(leftHalfIndexes, obj);

  const rigthBlockSongs = blockSongsAndSonger(rigthHalfIndexes, obj);

  return (
    <div className={Style.leftBlock}>
      <div className={Style.zIndex}>
        <AppHeader page="home" />
      </div>

      <ShadowLogo />

      <div className={cx(Style.block_with_content)}>
        <Layout>
          <div className={Style.leftBorder}>
            <h2 className={Style.title}>мои аккорды</h2>
          </div>

          <div className={Style.commonMargin}>{leftBlockSongs}</div>

          <div className={Style.commonMargin}>{rigthBlockSongs}</div>
        </Layout>
      </div>

      <Layout classname={Style.layout_with_lines}>
        <div className={cx(Style.verticalLine)} />
        <div className={cx(Style.verticalLine)} />
      </Layout>
    </div>
  );
};
