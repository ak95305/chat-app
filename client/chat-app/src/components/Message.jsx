import React from 'react'

function Message(props) {
  return (
    <div className={props.type}>
        <div className="message_block">
            <span>I Am Fine.</span>
        </div>
    </div>
  )
}

export default Message
