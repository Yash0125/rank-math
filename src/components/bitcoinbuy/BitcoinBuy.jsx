import React from "react";
import "./bitcoinBuy.css";
import { FaDollarSign } from "react-icons/fa";

const BitcoinBuy = () => {
  return (
    <div className="buy-container">
      <div className="buy-logo">
        <FaDollarSign className="logo" />
      </div>
      <div className="buy-text">
        <span>Buy BTC</span>
      </div>
    </div>
  );
};

export default BitcoinBuy;
