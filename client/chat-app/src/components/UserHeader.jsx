import React from "react";

function UserHeader() {
    return (
        <>
            <div className="msg-header">
                <div className="container1">
                    <img src="user1.png" className="msgimg" />
                    <div className="active">
                        <p>User name</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserHeader;
