import React from "react";
import "./bitcoinTrade.css";
import BitcoinBuy from "../bitcoinbuy/BitcoinBuy";
import BitcoinSell from "../bitcoinSell/BitcoinSell";

const BitcoinTrade = () => {
  return (
    <div className="bitcoinTrade-container">
      <BitcoinBuy />
      <BitcoinSell />
    </div>
  );
};

export default BitcoinTrade;
