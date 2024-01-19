import React, {useState, useEffect} from "react";
import SidebarChat from "./SidebarChat";
import '../../styles/mainChatsBar.css';
import ChatList from "./ChatList";
import Inbox from "./Inbox";


const MainChatsBar = () => {
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        const checkWindowSize = () => {
            if (isSmall == window.innerWidth > 1300) {
            }
            setIsSmall(window.innerWidth < 1300);
        }
        checkWindowSize();

        window.addEventListener('resize', checkWindowSize);

        return () => {
            window.removeEventListener('resize', checkWindowSize);
        };
    }, []);
    const displayer = isSmall ? 'expand' : '';
    console.log(displayer)
    return (
        <div className={`main-div`}>
            <div className={`inside-main ${displayer}`}>
                <SidebarChat />
                <ChatList isSmall={isSmall} />
            </div>
            {
                !isSmall && <Inbox />
            }
            
        </div>

    );
};

export default MainChatsBar;