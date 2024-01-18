// components/sidebar/Sidebar.js

import React from 'react';
import '../styles/Sidebar.css';
import '../styles/responsive.css'
import '../styles/hover.css'

const Sidebar = () => {
    return (
        <div className="side-bar">
            <div className="banner-logo-and-name">
                <img
                    className="banner-logo"
                    src="./assets/flat-color-icons-picture-KVe.png"
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
                        src="./assets/icon-pie-chart-nVS.png"
                        alt="Dashboard Icon"
                    />
                    <p className="dashboard-text">Dashboard</p>
                </div>

                <ul className="menus">
                    <li>
                        <a href="#">
                            <img src="./assets/vector-7b2.png" alt="Services Icon" />
                            <p className="services">Services</p>
                        </a>
                        <div className="rectangle"></div>
                    </li>
                    <li>
                        <a href="#">
                            <img src="assets/group-Yax.png" />
                            <p className="issues">Employees</p>
                        </a>
                        <div className="rectangle"></div>
                    </li>
                    <li>
                        <a href="#">
                            <img src="assets/vector-GPN.png" />
                            <p className="artifact">Artifact</p>
                        </a>
                        <div className="rectangle"></div>
                    </li>
                    <li>
                        <a href="#">
                            <img src="assets/vector-ha4.png" />
                            <p className="tools">Tools</p>
                        </a>
                        <div className="rectangle"></div>
                    </li>
                    <li>
                        <a href="#">
                            <img src="assets/vector-HcQ.png" />
                            <p className="credentials">Credentials</p>
                        </a>
                        <div className="rectangle"></div>
                    </li>
                    <li>
                        <a href="#">
                            <img src="assets/vector-pCc.png" />
                            <p className="notes">Notes</p>
                        </a>
                        <div className="rectangle"></div>
                    </li>
                    <li>
                        <a href="#">
                            <img src="assets/group-xuz.png" />
                            <p>Chat</p>
                        </a>
                        <div className="rectangle"></div>
                    </li>
                    <li>
                        <a href="#">
                            <img src="assets/vector-kbN.png" />
                            <p>Report</p>
                        </a>
                        <div className="rectangle"></div>
                    </li>

                </ul>
            </div>

            <ul className="profile-and-settings">
                <li>
                    <a href="#">
                        <img src="./assets/vector-XPi.png" alt="Account Icon" />
                        <p>Account</p>
                    </a>
                    <div className="rectangle"></div>
                </li>
                <li>
                    <a href="#">
                        <img src="./assets/vector-7BS.png" alt="Settings Icon" />
                        <p>Settings</p>
                    </a>
                    <div className="rectangle"></div>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
