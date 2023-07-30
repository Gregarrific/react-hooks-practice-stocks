import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stockList, setStockList] = useState([]);
  const [portfolioList, setPortfolioList] = useState([]);
  const [filter, setStockFilter] = useState('All');
  const [sort, setSort] = useState('Alphabetically');

  useEffect( () => {
    fetch("http://localhost:3001/stocks")
    .then(response => response.json())
    .then(data => setStockList(data))
  }, []);
  
  function handleBuy(e) {
    const stockID = e.target.getAttribute('stockid');
    updatePortfolio(stockID, true);
  }

  function handleSell(e) {
    const stockID = e.target.getAttribute('stockid');
    updatePortfolio(stockID, false);
  }

  function updatePortfolio(stockID, portfolio) {
    if (portfolio) {
      const stockIndex = stockList.findIndex(object => object.id === parseInt(stockID));
      const purchaseStock = stockList.splice(stockIndex, 1)
      setPortfolioList([...portfolioList, ...purchaseStock]);
    } else {
      const stockIndex = portfolioList.findIndex(object => object.id === parseInt(stockID));
      const soldStock = portfolioList.splice(stockIndex, 1);
      setStockList([...stockList, ...soldStock]);
    }
  }

  function handleFilter(e) {
    setStockFilter(e.target.value);
  }

  function handleSort(e) {
    setSort(e.target.value);
  }

  return (
    <div>
      <SearchBar handleFilter={handleFilter} sort={sort} handleSort={handleSort}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={stockList} filter={filter} sort={sort} handleBuy={handleBuy} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioList={portfolioList} handleSell={handleSell} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;