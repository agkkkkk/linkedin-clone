import React from "react";
import { useSelector } from "react-redux";
import "./SideBar.css";

import { Avatar } from "@material-ui/core";
import { selectUser } from "../../features/userSlice";

function SideBar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sideBarRecentItem">
      <span className="sideBarHash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sideBar">
      <div className="sideBarTop">
        <img
          src="https://images.unsplash.com/photo-1469264829440-117e4c3453ec?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <Avatar /* src={user.photoUrl} */ className="sideBarAvatar">
          {user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sideBarStats">
        <div className="sideBarStat">
          <p>Who viewed you</p>
          <p className="sideBarStatNumber">2,467</p>
        </div>
        <div className="sideBarStat">
          <p>Views on post</p>
          <p className="sideBarStatNumber">2,467</p>
        </div>
      </div>
      <div className="sideBarBottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("nodejs")}
        {recentItem("programming")}
      </div>
    </div>
  );
}

export default SideBar;
