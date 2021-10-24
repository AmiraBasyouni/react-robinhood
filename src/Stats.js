import React, { useState, useEffect } from 'react';
import './Stats.css';

const TOKEN = 'bvkgi0v48v6vtohioj2g';
const BASE_URL = 'https://finnhub.io/api/v1/quote';

function Stats() {
  const [stockData, setstockData] = useState([]);

  const getStockData = (stock) => {
    return axios
      .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
      .catch((error) => {
        console.error('Error', error.message);
      });
  };

  useEffect(() => {}, []);

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">{/*for our current stocks*/}</div>
        </div>
        <div className="stats__header">
          <p>Lists</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">{/*stocks we can buy*/}</div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
