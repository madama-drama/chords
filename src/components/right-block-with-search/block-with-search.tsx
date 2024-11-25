import React, { useState } from "react";
import Style from "./block-with-search.module.css";
import { songers } from "../../mock-data";

export const BlockWithSearch = () => {
  const [searchItem, setSearchItem] = useState("");
  const [foundSonger, setFoundSonger] = useState(songers);

  const handleInput = (e: { target: { value: any } }) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = songers.filter((value) =>
      value.songer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFoundSonger(filteredItems);
  };

  return (
    <div className={Style.block}>
      <p className={Style.miniLogo}>chords.</p>
      <input
        className={Style.search}
        placeholder="введите исполнителя или песню"
        onChange={handleInput}
        value={searchItem}
        type="text"
      />
      <div>
        {/* <ul>
          {foundSonger.map((songer) => (
            <li key={songer.number} className={Style.songers}>
              {songer.songer}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};
