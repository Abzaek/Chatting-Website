import React from "react";
import SidebarChat from "./SidebarChat";
import '../../styles/mainChatsBar.css';
import ChatList from "./ChatList";


const MainChatsBar = () => {
    return (
        <div className="main-div">
            <div className="inside-main">
                <SidebarChat />
                <ChatList />
            </div>
        </div>

    );
};

export default MainChatsBar;