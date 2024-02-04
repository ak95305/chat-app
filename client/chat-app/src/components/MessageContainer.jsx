import React from "react";
import Message from "./Message";
import ChatInput from "./ChatInput";

function MessageContainer() {
    return (
        <>
            <div className="chats_container">
                <div className="chat_header">
                    <div className="user_box">
                        <div className="user_img">
                            <img src="" width={50} height={50} alt="" />
                        </div>
                        <div className="user_text">
                            User Name
                        </div>
                    </div>
                </div>
                <div className="chat_inner">
                    <Message type="outgoing" />
                    <Message type="recieved" />
                    <Message type="recieved" />
                    <Message type="outgoing" />
                    <Message type="recieved" />
                    <Message type="outgoing" />
                </div>
                <div className="chat_input">
                    <ChatInput />
                </div>
            </div>
        </>
    );
}

export default MessageContainer;
