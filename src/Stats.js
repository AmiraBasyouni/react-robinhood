import React, { useState, useEffect } from 'react';
import './Stats.css';
import axios from 'axios';
import StatsRow from './StatsRow';
import {db} from './firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

// const TOKEN = 'bvkgi0v48v6vtohioj2g';
// const BASE_URL = 'https://finnhub.io/api/v1/quote';

function Stats() {
  const TOKEN = 'bvkgi0v48v6vtohioj2g';
  const BASE_URL = 'https://finnhub.io/api/v1/quote';
  const [stockData, setstockData] = useState([]);
  const [myStocks, setmyStocks] = useState([]);
  const getMyStocks = () => {
    const myStocksCollection = collection(db, 'myStocks');
    getDocs(myStocksCollection).then((snapshot) => {
      let promises = [];
      let tempData = [];
      snapshot.docs.map((doc) => {
        console.log(snapshot.docs);
        promises.push(
          getStocksData(doc.data().ticker).then((res) => {
            tempData.push({ id: doc.id, data: doc.data(), info: res.data });
          })
        );
      });
    });
  };

  
  // function Stats() {
  //   const [ myStocks, setmyStocks] = useState([])
  //    db
  //   .collection('myStocks')
  //   .onSnapshot(snapshot => {
  //     // console.log(snapshot);
  //       // console.log(doc.data())
  //       promise.push(getStocksData(doc.data().ticker))
  //       .then(res => {
  //         tempData.push({
  //           id: doc.id,
  //           data: doc.data(),
  //           info: res.data
  //       console.log(snapshot.docs);
  //          }
  //   )})
  //   // })
  //   })
  // };
   


  const getStocksData = (stock) => {
    return axios
      .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
      .catch((error) => {
        console.error('Error', error.message);
      });
  };

  useEffect(() => {
    let tempStocksData = [];
    const stocksList = [
      'AAPL',
      'MSFT',
      'TSLA',
      'FB',
      'BABA',
      'UBER',
      'DIS',
      'SBUX',
    ];
    let promises = [];
    getMyStocks();
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock).then((res) => {
          console.log(res);
          tempStocksData.push({
            name: stock,
            ...res.data,
          });
        })
      );
    });

    Promise.all(promises).then(() => {
        console.log(tempData);
        setMyStocks(tempData);
        // setstockData(tempData);
    })
    // ;

  }, []);

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
          <div className="stats__rows">
            {/*stocks we can buy*/}
            {stockData.map((stock) => (
              <StatsRow
              key={stock.name}
              name={stock.name}
              openPrice={stock.o}
              price={stock.c}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
