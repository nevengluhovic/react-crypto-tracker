import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
        <h1 className="coin-text">
          Search Currency{" "}
          <FontAwesomeIcon icon={faSearch} className="result-icon" />
        </h1>
        <form action="">
          <input
            onChange={inputChangeHandler}
            type="text"
            className="coin-input"
            placeholder="Search"
          />
        </form>
      </div>
      <div
        className={`no-result ${filteredCoins.length !== 0 ? "hidden" : ""}`}
      >
        <h1>No Results Found</h1>
        <p>We couldn't find anything! :(</p>
      </div>

      <table>
        <thead className={filteredCoins.length === 0 ? "hidden" : ""}>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map((coin) => (
            <tr>
              <td>
                <img src={coin.image} alt="crypto" />
                {coin.id}
              </td>
              <td>{coin.symbol.toUpperCase()}</td>
              <td>${coin.current_price.toLocaleString()}</td>
              <td
                className={` ${
                  coin.price_change_percentage_24h > 0 ? "green" : "red"
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td>${coin.market_cap.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinList;
