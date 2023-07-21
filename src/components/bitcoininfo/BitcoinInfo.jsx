import React from 'react';
import './bitcoinInfo.css';
import { BsCurrencyBitcoin } from "react-icons/bs";
import { SlArrowDown } from "react-icons/sl";

const BitcoinInfo = () => {
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
    <div className='dropdown'>

    <SlArrowDown />
    </div>
    </section>
    </>
  );
}

export default BitcoinInfo;
