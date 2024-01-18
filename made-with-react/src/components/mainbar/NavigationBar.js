// NavigationBar.js

import React from 'react';
import '../styles/NavigationBar.css';
import '../styles/hover.css'
import '../styles/responsive.css'
import * as assets from '../assets';

const NavigationBar = (props) => {
    const handleClick = (event) => {
        event.stopPropagation();
        props.toggleSidebar();
      };
    return (
        

        <div className="navigation-bar">
            {/* Hamburger Menu */}
            <div>
                <div className="hamburger-menu" onClick={handleClick}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            <ul className="navigation-links">
                <li>
                    <a href="last.html">
                        <img src={assets.homeIcon} alt="Home Icon" />
                        <p>Home</p>
                    </a>
                    <div className="rectangle"></div>
                </li>
                <li>
                    <a href="#">
                        <img
                            src={assets.todoIcon}
                            alt="Todo Icon"
                        />
                        <p>Todo</p>
                    </a>
                    <div className="rectangle"></div>
                </li>
                {/* Repeat the structure for other navigation links */}
                <li>
                    <a href="#">
                        <img src={assets.feedbackIcon} />
                        <p>Feedback</p>
                    </a>
                    <div class="rectangle"></div>
                </li>
                <li>
                    <a href="#">
                        <img src={assets.toolIcon} />
                        <p>Tools</p>
                    </a>
                    <div class="rectangle"></div>
                </li>
                <li>
                    <a href="#">
                        <img
                            src={assets.libraryIcon}
                        />
                        <p>Library</p>
                    </a>
                    <div class="rectangle"></div>
                </li>
            </ul>
            <div href="#">
                <img
                    src={assets.searchIcon}
                />
                <input
                    type="search"
                    className="search"
                    name="search"
                    placeholder="Search"
                    id=""
                />
            </div>
            <div className="profile-and-notifications">
                <div className="notification-and-theme">
                    <img
                        className="notification-icon"
                        src={assets.notificationIcon}
                        alt="Notification Icon"
                    />
                    <img
                        className="theme-toggler"
                        src={assets.themeTogglerIcon}
                        alt="Theme Toggler Icon"
                    />
                </div>
                <div className="profile-div">
                    <div>
                        <img
                            className="profile-photo"
                            src={assets.profilePhoto}
                            alt="Profile Photo"
                        />
                    </div>

                    <p className="profile-name">Hi, Abebe Kebede</p>
                    <img
                        className="drop-down"
                        src={assets.dropdownIcon}
                        alt="Dropdown Icon"
                    />
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
