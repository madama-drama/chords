import React from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";

import { useDispatch } from "../../services";
import { songers } from "../../mock-data";

import Style from "./left-block.module.css";
import { AppHeader } from "../app-header/app-header";
import image from "../../image/arrow-right.svg";
import { Layout } from "../layout/layout";
import { openList } from "../right-block/songs-list/store/slice";
import { numbers_for_song_and_songers } from "../../functions";
import { ShadowLogo } from "../shodow-logo/shadow-logo";

export const LeftBlock = () => {
  const dispath = useDispatch();

  const onClick = (songerId: number) => {
    dispath(openList(songerId));
  };

  const leftSongersList = songers.slice(0, songers.length / 2).map((songer) => (
    <div className={Style.songerBlock} onClick={() => onClick(songer.number)}>
      <p className={Style.songerItem}>
        {numbers_for_song_and_songers(songer.number)}
      </p>
      <p className={cx(Style.songerItem, Style.songerMargins)}>
        {songer.songer}
      </p>
    </div>
  ));

  const rightSongerList = songers
    .slice(songers.length / 2, songers.length)
    .map((songer) => (
      <div className={Style.songerBlock} onClick={() => onClick(songer.number)}>
        <p className={Style.songerItem}>{songer.number}</p>
        <p className={cx(Style.songerItem, Style.songerMargins)}>
          {songer.songer}
        </p>
      </div>
    ));

  return (
    <div className={Style.leftBlock}>
      <div className={Style.zIndex}>
        <AppHeader page="home" />
      </div>

      <ShadowLogo />

      <div
        className={cx(
          Style.block_with_content,
          songers.length > 20 && Style.scroll
        )}
      >
        <Layout>
          <div className={Style.leftBorder}>
            <h2 className={Style.title}>исполнители</h2>
          </div>

          <div className={Style.commonMargin}>{leftSongersList}</div>

          <div className={Style.commonMargin}>{rightSongerList}</div>
        </Layout>
      </div>

      <Layout classname={Style.layout_with_lines}>
        <div className={cx(Style.verticalLine)} />
        <div className={cx(Style.verticalLine)} />
      </Layout>

      <div className={Style.footerBlock}>
        <NavLink to="/myChords" className={Style.blockWithArrow}>
          <p className={Style.toMyChords}>к моим аккордам</p>
          <img src={image} alt="Стрелка вправо" className={Style.arrow} />
        </NavLink>
      </div>
    </div>
  );
};
