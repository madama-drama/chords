import React from "react";

import Style from "./home.module.css";
import { RightBlock } from "../components/right-block/right-block";
import { LeftBlock } from "../components/left-block/left-block";

export const HomePage = () => {
  return (
    <>
      <div className={Style.wrapper}>
        <LeftBlock  />
        <RightBlock  />
      </div>

    </>
  );
};
