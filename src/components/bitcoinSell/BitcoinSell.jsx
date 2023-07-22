import React from "react";
import "./bitcoinSell.css";
import { FaDollarSign } from "react-icons/fa";

const BitcoinSell = () => {
  return (
    <div className="sell-container">
      <div className="sell-logo">
        <FaDollarSign className="logo" />
      </div>
      <div className="sell-text">
        <span>Sell BTC</span>
      </div>
    </div>
  );
};

export default BitcoinSell;
