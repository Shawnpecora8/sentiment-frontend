import React from 'react';

const SentimentTable = ({ data }) => {
  return (
    <table className="sentiment-table">
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Price</th>
          <th>Sentiment Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => {
          const color =
            item.avg_score > 60
              ? '#d4edda'
              : item.avg_score < 40
              ? '#f8d7da'
              : '#ffffff';
          return (
            <tr key={i} style={{ backgroundColor: color }}>
              <td>{item.symbol}</td>
              <td>${item.price?.toFixed(2)}</td>
              <td>{item.avg_score}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SentimentTable;