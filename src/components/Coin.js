import React from "react";

const Coin = ({ coin }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={coin.image} alt="crypto" />
          <h1>{coin.id}</h1>
          <p className="coin-symbol">{coin.symbol}</p>
          <div className="coin-data">
            <p className="coin-price">${coin.market_cap}</p>
            <p className="coin-volume">
              ${coin.current_price.toLocaleString()}
            </p>
            <p
              className={`coin-percent ${
                coin.price_change_percentage_24h ? "green" : "red"
              }`}
            >
              {coin.price_change_percentage_24h}
            </p>
          </div>
          <p className="coin-marketcap">
            Mkt Cap: ${coin.market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
