import React, { useState, useEffect } from "react";
//Importing Axios
import axios from "axios";
import CoinList from "./components/CoinList";
import "./styles/app.scss";

const App = () => {
  //States
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  //Getting data when page loads
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <CoinList loading={loading} coins={coins} setCoins={setCoins} />
    </div>
  );
};

export default App;
