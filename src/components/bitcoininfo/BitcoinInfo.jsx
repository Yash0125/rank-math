import React, { useState } from 'react';
import './bitcoinInfo.css';
import { BsCurrencyBitcoin } from "react-icons/bs";
import { SlArrowDown } from "react-icons/sl";

const BitcoinInfo = () => {
  const [showButtons, setShowButtons] = useState(false);

  const handleArrowClick = () => {
    setShowButtons(!showButtons);
  };

  return (
    <>
      <section className='bitcoin-container'>
        <div className='top-row'>
          <div className='bitcoin-logo'>
            <BsCurrencyBitcoin className='logo' />
          </div>
          <div className='bitcoin'>Bitcoin</div>
          <div className='btc'>BTC</div>
        </div>
        <div className='mid-row'>
          <span>3.529020 BTC</span>
        </div>
        <div className='last-row'>
          <span className='bitcoin-price'>$19.153 USD</span>
          <span className='bicoin-profit'>-2.32%</span>
        </div>
        <div className='dropdown' onClick={handleArrowClick}>
          <SlArrowDown />
        </div>
        {showButtons && (
          <div className='buttons-container'>
            <button className='buy-button'>Buy</button>
            <button className='sell-button'>Sell</button>
          </div>
        )}
      </section>
    </>
  );
}

export default BitcoinInfo;
