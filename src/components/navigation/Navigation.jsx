import React, { useState } from 'react';
import './navigation.css';
import { GrMoreVertical } from "react-icons/gr";
import { SlArrowLeft } from "react-icons/sl";
import { CgRename } from "react-icons/cg";
import { PiDeviceTabletSpeaker } from "react-icons/pi";
import { BiArrowFromBottom } from "react-icons/bi";
import { IoMdRemoveCircleOutline } from "react-icons/io";

const Navigation = () => {
  const [showMoreIcons, setShowMoreIcons] = useState(false);

  const handleMoreIconClick = () => {
    setShowMoreIcons(prevState => !prevState);
  };

  return (
    <header className='navigation'>
      <div className='left-icon'>
        <SlArrowLeft />
      </div>
      <h1 className='title'>Bitcoin wallet</h1>
      <div className='right-icon' onClick={handleMoreIconClick}>
        <GrMoreVertical />
      </div>
      <div className={`more-icons ${showMoreIcons ? 'visible' : 'hidden'}`}>
        <ul>
          <li>
            <span>Edit</span>
            <CgRename />
          </li>
          <hr />
          <li>
            <span>Courier info</span>
            <PiDeviceTabletSpeaker />
          </li>
          <hr />
          <li>
            <span>Share</span>
            <BiArrowFromBottom />
          </li>
          <hr />
          <li className='remove'>
            <span>Remove</span>
            <IoMdRemoveCircleOutline />
          </li>
          <hr />
        </ul>
      </div>
    </header>
  );
}

export default Navigation;
