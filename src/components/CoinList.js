import React, { useState } from "react";
import Coin from "./Coin";

const CoinList = ({ coins, setCoins }) => {
  const [search, setSearch] = useState("");

  const inputChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search Currency</h1>
        <form action="">
          <input
            onChange={inputChangeHandler}
            type="text"
            className="coin-input"
            placeholder="Search"
          />
        </form>
      </div>
      {filteredCoins.map((coin) => (
        <Coin key={coin.id} coin={coin} />
      ))}
      {/* {filteredCoins.map((filter) => {
        <Coin coins={coins} />;
      })} */}
    </div>
  );
};

export default CoinList;
