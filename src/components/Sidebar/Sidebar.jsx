import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./Sidebar.css";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbmJvdyUyMGNvbG91cnN8ZW58MHx8MHx8&w=1000&q=80"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar_avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_state_number">2.4343</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_state_number">2.4343</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("software")}
        {recentItem("react js")}
        {recentItem("web development")}
        {recentItem("Programming")}
        {recentItem("design")}
      </div>
    </div>
  );
};

export default Sidebar;
