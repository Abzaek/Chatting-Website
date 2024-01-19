import React, { useState, useEffect } from "react";
import '../../styles/chatList.css';
import '../../styles/responsive.css';
import '../../styles/hover.css';
import * as assets from '../../assets';

const ChatList = () => {
  return (
    <div className="chat-list">
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
              <div>
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
              <div>
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
              <div>
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
              <div>
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
              <div>
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
              <div>
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
