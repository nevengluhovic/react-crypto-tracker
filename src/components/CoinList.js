import React from "react";
import Coin from "./Coin";

const CoinList = ({ coins }) => {
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search Currency</h1>
        <form action="">
          <input type="text" className="coin-input" placeholder="Search" />
        </form>
      </div>
      {coins.map((coin) => (
        <Coin coins={coin} />
      ))}
    </div>
  );
};

export default CoinList;
