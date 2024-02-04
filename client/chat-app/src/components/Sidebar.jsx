import React from 'react'
import UserBox from './UserBox'

function Sidebar() {
  return (
    <>
        <input type="checkbox" id="sidebar_check" />
        <div className="inner_area">
          <div className="sidebar_head">
            <span>Friends</span>
            <label htmlFor="sidebar_check">+</label>
          </div>
          <ul>
            <UserBox />
            <UserBox />
            <UserBox />
            <UserBox />
            <UserBox />
          </ul>
        </div>
    </>
  )
}

export default Sidebar
