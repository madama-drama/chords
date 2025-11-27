import React, { useState } from "react";
import Style from "./block-with-search.module.css";
import { NavLink } from "react-router-dom";
import { useSongers } from "../../requests";

export const BlockWithSearch = () => {
  const { data: songers } = useSongers();

  const [searchItem, setSearchItem] = useState("");
  const [foundSonger, setFoundSonger] = useState(songers);

  const handleInput = (e: { target: { value: any } }) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = songers.filter((value) =>
      value.songer.toLowerCase().startsWith(searchTerm.toLowerCase())
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
      {searchItem ? (
        <div>
          <ul>
            {foundSonger.map((songer) => (
              <NavLink to={`/${songer.songer}`} className={Style.songerLink}>
                <li key={songer.number} className={Style.songers}>
                  {songer.songer}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
