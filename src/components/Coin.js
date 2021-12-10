import React from "react";

const Coin = ({ coins }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={coins.image} alt="crypto" />
          <h1>{coins.id}</h1>
          <p className="coin-symbol">{coins.symbol}</p>
          <div className="coin-data">
            <p className="coin-price">${coins.price}</p>
            <p className="coin-volume">${coins.volume.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
