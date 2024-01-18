import React from "react";
import '../styles/right-container.css'
import '../styles/responsive.css'
import '../styles/hover.css'
import NavigationBar from "./NavigationBar";
import ClientNum from "./ClientNum";
import MainChatsBar from "./chatbar/MainChatsBar";

const MainContainer = (props) => {
    return (
        <div className="right-container">
            <NavigationBar toggleSidebar={props.toggleSidebar}/>
            <ClientNum />
            <MainChatsBar />
        </div>
    );
};

export default MainContainer;