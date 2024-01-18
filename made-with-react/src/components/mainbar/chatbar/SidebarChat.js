import * as assets from '../../assets';
import React, {useEffect, useState} from 'react';
import '../../styles/foldersList.css';
import '../../styles/hover.css';
import '../../styles/responsive.css';


const SidebarChat = () => {
  return (
    <ul className="sidebar-chat">
      <li>
        <div className="left-side-rectangle"></div>
        <a href="#">
          <img src={assets.chatsIcon} alt="All" />
          <p>All</p>
        </a>
      </li>
      <li>
        <div className="left-side-rectangle"></div>
        <a href="#">
          <img src={assets.personOutlineIcon} alt="Personal" />
          <p>Personal</p>
        </a>
      </li>
      <li>
        <div className="left-side-rectangle"></div>
        <a href="#">
          <img src={assets.chatBubbleIcon} alt="Projects" />
          <p>Projects</p>
        </a>
      </li>
      <li>
        <div className="left-side-rectangle"></div>
        <a href="#">
          <img src={assets.announcementIcon} alt="Channel" />
          <p>Channel</p>
        </a>
      </li>
      <li>
        <div className="left-side-rectangle"></div>
        <a href="#">
          <img src={assets.settingIcon} alt="Company" />
          <p>Company</p>
        </a>
      </li>
    </ul>
  );
};

export default SidebarChat;
