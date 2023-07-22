import React, { useState } from 'react';
import './footer.css';
import { PiWalletFill } from "react-icons/pi";
import { MdOutlineExplore } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { AiTwotoneSetting } from "react-icons/ai";

const Footer = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <div className='footer-container'>
      <PiWalletFill
        onClick={() => handleIconClick('PiWalletFill')}
        style={{ color: activeIcon === 'PiWalletFill' ? '#4c5968' : '#aeb8c4' }}
      />
      <MdOutlineExplore
        onClick={() => handleIconClick('MdOutlineExplore')}
        style={{ color: activeIcon === 'MdOutlineExplore' ? '#4c5968' : '#aeb8c4' }}
      />
      <IoMdNotifications
        onClick={() => handleIconClick('IoMdNotifications')}
        style={{ color: activeIcon === 'IoMdNotifications' ? '#4c5968' : '#aeb8c4' }}
      />
      <AiTwotoneSetting
        onClick={() => handleIconClick('AiTwotoneSetting')}
        style={{ color: activeIcon === 'AiTwotoneSetting' ? '#4c5968' : '#aeb8c4' }}
      />
    </div>
  );
};

export default Footer;
