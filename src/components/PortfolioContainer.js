import React from "react";
import Stock from "./Stock";

function PortfolioContainer( {portfolioList, handleSell} ) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioList.map( stock => {
        return (
          <Stock 
            key={stock.ticker} 
            name={stock.name} 
            ticker={stock.ticker}
            stockid={stock.id} 
            price={stock.price} 
            handleSale={handleSell}
          />
        )
      })}
    </div>
  );
}

export default PortfolioContainer;