import React from "react";
import '../styles/right-container.css'
import '../styles/responsive.css'
import '../styles/hover.css'
import NavigationBar from "./NavigationBar";

const MainContainer = (props) => {
    return (
        <div className="right-container">
            <NavigationBar toggleSidebar={props.toggleSidebar}/>
            
        </div>
    );
};

export default MainContainer;