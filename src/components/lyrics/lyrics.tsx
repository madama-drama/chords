import React, { FC, useMemo, useState } from "react";
import cx from "classnames";

import Style from "./lyrics.module.css";
import { Song } from "../../mock-data";
import { changeTone_raising } from "./functions";

interface ILyricsProps {
  song: Song;
}
export const Lyrics: FC<ILyricsProps> = ({ song }) => {
  const [font, setFont] = useState(1.4);

  const [tone, setTone] = useState(0);

  const raisingTone = () => {
    setTone(tone + 1);
  };

  const loweringTone = () => {
    setTone(tone - 1);
  };

  const fontReduction = () => {
    setFont(font - 0.14);
  };

  const fontMagnification = () => {
    setFont(font + 0.14);
  };

  const content = useMemo(
    () =>
      song.text?.map(({ type, words, notes }) => {
        let textLine;
        let chordsLine;
        let title = "";

        let transponentChords = changeTone_raising({ tone, notes });

        if (type === "Куплет") {
          title = " ";
          textLine = words.map((value) => <p>{value}</p>);
          chordsLine = transponentChords.map((value) => (
            <p>{value.join(" ")}</p>
          ));
        } else if (type === "Припев") {
          title = "Припев";
          textLine = words.map((value) => <p>{value}</p>);
          chordsLine = transponentChords.map((value) => (
            <p>{value.join(" ")}</p>
          ));
        }

        return (
          <div className={Style.content} style={{ fontSize: font + "rem" }}>
            <h3 className={Style.chorus}>{title}</h3>
            <p className={Style.chordsLine} >
              {chordsLine}
            </p>
            <p className={Style.songLine}>
              {textLine}
            </p>
          </div>
        );
      }),
    [font, song.text, tone]
  );

  return (
    <div className={Style.block}>
      <div className={cx(Style.buttonsContent, Style.tonality)}>
        <button className={Style.button} onClick={loweringTone}>
          -
        </button>
        <p className={Style.buttonTitle}>тональность</p>
        <button className={Style.button} onClick={raisingTone}>
          +
        </button>
      </div>

      <div className={cx(Style.buttonsContent, Style.font)}>
        <button className={Style.button} onClick={fontReduction}>
          -
        </button>
        <p className={Style.buttonTitle}>шрифт</p>
        <button className={Style.button} onClick={fontMagnification}>
          +
        </button>
      </div>

      <div className={Style.textBlock}>{content}</div>
    </div>
  );
};
