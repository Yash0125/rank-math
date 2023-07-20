import React from 'react';
import './navigation.css';
import { GrMoreVertical } from "react-icons/gr";
import { SlArrowLeft } from "react-icons/sl";

const Navigation = () => {
  return (
    <header className='navigation'>
      <div className='left-icon'>
        <SlArrowLeft />
      </div>
      <h1 className='title'>Bitcoin wallet</h1>
      <div className='right-icon'>
        <GrMoreVertical />
      </div>
    </header>
  );
}

export default Navigation;
