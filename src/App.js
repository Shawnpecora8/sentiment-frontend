import React, { useEffect, useState } from 'react';
import SentimentTable from './components/SentimentTable';
import './styles.css';

function App() {
  const [data, setData] = useState([]);

  const fetchSentimentData = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/sentiment-data`);
    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    fetchSentimentData();
  }, []);

  return (
    <div className="app">
      <h1>S&P 500 Stock Sentiment</h1>
      <p>Live sentiment and price data from market news</p>
      <SentimentTable data={data} />
    </div>
  );
}

export default App;