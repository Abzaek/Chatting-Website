import React, {useState, useEffect} from "react";
import * as assets from '../../assets';
import '../../styles/responsive.css';
import '../../styles/inbox.css';
import EmojiPicker from "emoji-picker-react";

const Inbox = () => {

    const [isPickerVisible, setIsPickerVisible] = useState(false);
    

    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (isPickerVisible && !event.target.closest('.emoji-S')) {
            setIsPickerVisible(false);
          }
          
        };
    
        document.addEventListener('click', handleOutsideClick);


        const handleEmojiClick = (event) => {
                setIsPickerVisible(true)
                event.stopPropagation();
           
        };

        document.querySelector('.emoji-S').addEventListener('click', handleEmojiClick);
    
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };

      }, [isPickerVisible]);


    return (
        <div className='inbox'>
            <div className="status">
                <div className="profile-pic">
                    <img src={assets.ellipse197BgIcon} alt="Profile" />
                    <div>
                        <h3>Userss Communication</h3>
                        <p>online</p>
                    </div>
                </div>

                <div>
                    <img
                        className="search-inbox"
                        src={assets.mingcuteSearchLineIcon}
                        alt="Search Inbox"
                    />
                    <img
                        className="options"
                        src={assets.simpleLineIconsOptionsVerticalIcon}
                        alt="Options"
                    />
                </div>
            </div>
            <div className="inbox-area">
                <div className="text-date-div">

                    <span>TODAY</span>


                </div>

                <div className="chat-messages">

                    <div className="spaceholder">

                    </div>
                    <div className="received">
                        <div className="left-row-div">
                            <div className="right-pushed-div">
                                <div className="right-top-div">
                                    <div>
                                        <p>
                                            Hey! 🍕 Don't forget our pizza night at your place this
                                            Saturday. I'm bringing my famous veggie pizza..."
                                        </p>
                                    </div>
                                    <img
                                        className="received-img"
                                        src={assets.icBaselineChatBubbleV4U}
                                        alt="Received Chat Bubble"
                                    />
                                </div>
                                <p className="received-time">3:00AM</p>
                            </div>
                        </div>
                        <img
                            className="received-images-marker"
                            src={assets.majesticonsPin}
                            alt="Received Images Marker"
                        />
                    </div>

                    <div className="sent_messages">
                        <div>
                            <div className="sent_">
                                <div className="messages_">
                                    <div className="auto-group-vgqt-QJQ">
                                        <img
                                            className="arrow_icon"
                                            src={assets.icBaselineChatBubble}
                                            alt="Chat Bubble"
                                        />
                                    </div>
                                    <div>
                                        <p className="sent_text">
                                            Sounds delicious, Meera! 🤩 Can't wait for Saturday! By the way,
                                            do you think we should get some ice cream for dessert?"
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        className="seen_message"
                                        src={assets.charmTickDoubleBsr}
                                        alt="Seen Message"
                                    />
                                </div>
                            </div>
                            <p className="sent_time">3:25 PM</p>
                        </div>
                    </div>

                    <div className="received">
                        <div className="left-row-div">
                            <div className="right-pushed-div">
                                <div className="right-top-div">
                                    <div>
                                        <p>
                                            Absolutely! 🍦 I'm all in for ice cream. I'll bring my
                                            favorite flavors. What's your preference?
                                        </p>
                                    </div>
                                    <img
                                        className="received-img"
                                        src={assets.icBaselineChatBubbleV4U}
                                        alt="Received Chat Bubble"
                                    />
                                </div>
                                <p className="received-time">4:00AM</p>
                            </div>
                        </div>
                        <img
                            className="received-images-marker"
                            src={assets.majesticonsPin}
                            alt="Received Images Marker"
                        />
                    </div>

                    <div className="sent_messages">
                        <div>
                            <div className="sent_">
                                <div className="messages_">
                                    <div className="auto-group-vgqt-QJQ">
                                        <img
                                            className="arrow_icon"
                                            src={assets.icBaselineChatBubble}
                                            alt="Chat Bubble"
                                        />
                                    </div>
                                    <div>
                                        <p className="sent_text">
                                            Awesome! 🍨 I love chocolate chip cookie dough. Looking forward
                                            to the pizza party on Friday!!
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        className="seen_message"
                                        src={assets.charmTickDoubleBsr}
                                        alt="Seen Message"
                                    />
                                </div>
                            </div>
                            <p className="sent_time">10:00AM</p>
                        </div>
                    </div>
                </div>
                <div className="typing-area">
                    <div className="left-side-typing-area">
                        <img
                            className="attachements-icon"
                            src={assets.mingcuteAttachmentLine}
                            alt="Attachments Icon"
                        />
                        <div
                            contentEditable={true}
                            name=""
                            id=""
                            aria-multiline={true}
                        />
                    </div>
                    <div className="emoji-S">
                        {
                            !isPickerVisible ? 
                        
                        <img
                            className="emoji-icon"
                            src={assets.fluentEmoji16Regular}
                            alt="Emoji Icon"
                        />
                        :
                        <EmojiPicker />
                        }
                        <img
                            className="send-icon"
                            src={assets.materialSymbolsSend}
                            alt="Send Icon"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Inbox;