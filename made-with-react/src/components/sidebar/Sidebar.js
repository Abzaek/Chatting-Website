// components/sidebar/Sidebar.js

import React from 'react';
import '../styles/Sidebar.css';
import '../styles/responsive.css'
import '../styles/hover.css'
import * as assets from '../assets/'

const Sidebar = () => {
    return (
        <div className="side-bar">
            <div className="banner-logo-and-name">
                <img
                    className="banner-logo"
                    src={assets.bannerLogo}
                    alt="Banner Logo"
                />
                <a href="index.html">
                    <p className="banner-name">FIGMA</p>
                </a>
            </div>

            <div className="dashboard-and-menus">
                <div className="dashboard">
                    <img
                        className="dashboard-image"
                        src={assets.dashboardImage}
                        alt="Dashboard Icon"
                    />
                    <p className="dashboard-text">Dashboard</p>
                </div>

                <ul className="menus">
                    <li>
                        <a href="#">
                            <img src={assets.servicesIcon} alt="Services Icon" />
                            <p className="services">Services</p>
                        </a>
                        <div className="rectangle"></div>
                    </li>
                    <li>
                        <a href="#">
                            <img src={assets.employeesIcon} />
                            <p className="issues">Employees</p>
                        </a>
                        <div className="rectangle"></div>
                    </li>
                    <li>
                        <a href="#">
                            <img src={assets.artifactIcon} />
                            <p className="artifact">Artifact</p>
                        </a>
                        <div className="rectangle"></div>
                    </li>
                    <li>
                        <a href="#">
                            <img src={assets.toolsIcon} />
                            <p className="tools">Tools</p>
                        </a>
                        <div className="rectangle"></div>
                    </li>
                    <li>
                        <a href="#">
                            <img src={assets.credentialsIcon} />
                            <p className="credentials">Credentials</p>
                        </a>
                        <div className="rectangle"></div>
                    </li>
                    <li>
                        <a href="#">
                            <img src={assets.notesIcon} />
                            <p className="notes">Notes</p>
                        </a>
                        <div className="rectangle"></div>
                    </li>
                    <li>
                        <a href="#">
                            <img src={assets.chatIcon} />
                            <p>Chat</p>
                        </a>
                        <div className="rectangle"></div>
                    </li>
                    <li>
                        <a href="#">
                            <img src={assets.reportIcon} />
                            <p>Report</p>
                        </a>
                        <div className="rectangle"></div>
                    </li>

                </ul>
            </div>

            <ul className="profile-and-settings">
                <li>
                    <a href="#">
                        <img src={assets.accountIcon} alt="Account Icon" />
                        <p>Account</p>
                    </a>
                    <div className="rectangle"></div>
                </li>
                <li>
                    <a href="#">
                        <img src={assets.settingsIcon} alt="Settings Icon" />
                        <p>Settings</p>
                    </a>
                    <div className="rectangle"></div>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
