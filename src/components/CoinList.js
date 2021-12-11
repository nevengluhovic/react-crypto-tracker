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

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">
          Search Currency{" "}
          <FontAwesomeIcon icon={faSearch} className="result-icon" />
        </h1>
        <form onSubmit={submitHandler} action="">
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
            <th>Icon</th>
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
              <td data-label="Icon">
                <img src={coin.image} alt="crypto" />
              </td>
              <td className="name-breaking" data-label="Name">
                {coin.id}
              </td>
              <td data-label="Code">{coin.symbol.toUpperCase()}</td>
              <td data-label="Price">${coin.current_price.toLocaleString()}</td>
              <td
                data-label="24h Change"
                className={` ${
                  coin.price_change_percentage_24h > 0 ? "green" : "red"
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td data-label="Market Cap">
                ${coin.market_cap.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinList;
