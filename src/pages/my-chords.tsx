import React from "react";
import Style from "./my-chords.module.css";
import { BlockWithSearch } from "../components/right-block-with-search/block-with-search";
import { FavoriteSongs } from "../components/left-block-with-favorite-songs/favorite-songs";

export const MyChords = () => {
  return (
    <>
      <div className={Style.wrapper}>
        <FavoriteSongs />
        <BlockWithSearch />
      </div>
    </>
  );
};
