import React from "react";

function Stock( {name, ticker, stockid, price, handleSale }) {
  return (
    <div>
      <div className="card" stockid={stockid}>
        <div className="card-body" stockid={stockid} onClick={handleSale}>
          <h5 className="card-title" stockid={stockid}>{name}</h5>
          <p className="card-text" stockid={stockid}>{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;