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
                console.log('no it is not')
            }
            setIsSmall(window.innerWidth < 1392);
            if (isSmall == window.innerWidth < 1392) {
                console.log('yeah it is')
            }
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
                <ChatList  />
            </div>
            {
                !isSmall && <Inbox />
            }
            
        </div>

    );
};

export default MainChatsBar;