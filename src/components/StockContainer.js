import React, { useEffect, useState } from "react";
import Stock from "./Stock";

function StockContainer( {stockList, filter, sort, handleBuy} ) {
  return (
    <div>
      <h2>Stocks</h2>
      {stockList.filter(stock => (filter !== 'All' ? stock.type === filter : true))
      .sort(sort === 'Alphabetically' ? ((a, b) => {
        let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      }) : 
      ((a, b) => b.price - a.price))
      .map( stock => {
        return (
          <Stock 
            key={stock.ticker} 
            name={stock.name} 
            ticker={stock.ticker}
            stockid={stock.id} 
            price={stock.price} 
            handleSale={handleBuy}
          />
        )
      })} 
    </div>
  );
}

export default StockContainer;