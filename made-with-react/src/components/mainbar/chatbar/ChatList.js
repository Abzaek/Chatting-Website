import React, { useState, useEffect } from "react";
import '../../styles/chatList.css';
import '../../styles/responsive.css';
import '../../styles/hover.css';
import * as assets from '../../assets';

const ChatList = ({isSmall}) => {

  return (
    <div className={`chat-list ${!isSmall && 'limit-size'}`}>
      <div className="messages">Messages</div>
      <div className="search-chats">
        <img src={assets.circumSearchIcon} alt="Search" />
        <input type="search" placeholder="Search chats" />
      </div>
      <ul className="chat-list--inside">
        <li>
          <div className="messages-rectangle"></div>
          <div className="message-box">
            <a href="#">
              <img src={assets.ellipse196BgIcon} alt="Profile" />
            </a>

            <a className="second-a" href="#">
              <div className='second-a--insideDiv'>
                <h3>Users Communication</h3>
                <p>A high-level language (HLL) is a programming language, such as C, FORTRAN,
                   or Pascal, that allows a programmer to develop programmes that are independent
                    of the type of machine they are running on. all these languages are classified as high-level
                     because they are more comparable languages than machine languages.</p>
              </div>
              <div>
                <p>3:06</p>
                <p className="unread-messages">2</p>
              </div>
            </a>
          </div>
        </li>
        <li>
          <div className="messages-rectangle"></div>
          <div className="message-box">
            <a href="#">
              <img src={assets.ellipse196BgIcon} alt="Profile" />
            </a>
            <a className="second-a" href="#">
              <div className='second-a--insideDiv'>
                <h3>Users Communication</h3>
                <p>HelloEveryone there is an update on . . .</p>
              </div>
              <div>
                <p>3:06</p>
                <p className="unread-messages">2</p>
              </div>
            </a>
          </div>
        </li>
        <li>
          <div className="messages-rectangle"></div>
          <div className="message-box">
            <a href="#">
              <img src={assets.ellipse196BgIcon} alt="Profile" />
            </a>
            <a className="second-a" href="#">
              <div className='second-a--insideDiv'>
                <h3>Users Communication</h3>
                <p>A high-level language (HLL) is a programming language, such as C, FORTRAN,
                   or Pascal, that allows a programmer to develop programmes that are independent
                    of the type of machine they are running on. all these languages are classified as high-level
                     because they are more comparable languages than machine languages.</p>
              </div>
              <div>
                <p>3:06</p>
                <p className="unread-messages">2</p>
              </div>
            </a>
          </div>
        </li>
        <li>
          <div className="messages-rectangle"></div>
          <div className="message-box">
            <a href="#">
              <img src={assets.ellipse196BgIcon} alt="Profile" />
            </a>
            <a className="second-a" href="#">
              <div className='second-a--insideDiv'>
                <h3>Users Communication</h3>
                <p>HelloEveryone there is an update on . . .</p>
              </div>
              <div>
                <p>3:06</p>
                <p className="unread-messages">2</p>
              </div>
            </a>
          </div>
        </li>
        <li>
          <div className="messages-rectangle"></div>
          <div className="message-box">
            <a href="#">
              <img src={assets.ellipse196BgIcon} alt="Profile" />
            </a>
            <a className="second-a" href="#">
              <div className='second-a--insideDiv'>
                <h3>Users Communication</h3>
                <p>HelloEveryone there is an update on . . .</p>
              </div>
              <div>
                <p>3:06</p>
                <p className="unread-messages">2</p>
              </div>
            </a>
          </div>
        </li>
        <li>
          <div className="messages-rectangle"></div>
          <div className="message-box">
            <a href="#">
              <img src={assets.ellipse196BgIcon} alt="Profile" />
            </a>
            <a className="second-a" href="#">
              <div className='second-a--insideDiv'>
                <h3>Users Communication</h3>
                <p>HelloEveryone there is an update on . . .</p>
              </div>
              <div>
                <p>3:06</p>
                <p className="unread-messages">2</p>
              </div>
            </a>
          </div>
        </li>

      </ul>
    </div>
  );
};

export default ChatList;
