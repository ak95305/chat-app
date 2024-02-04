import React from "react";

function ChatInput() {
    return (
        <>
            <div className="msg_box">
                <div className="input_group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Write message..."
                    />
                    <button type="submit">
                        SEND
                    </button>
                </div>
            </div>
        </>
    );
}

export default ChatInput;
