import React from "react";
import "./topbar.css";
import { NotificationsNone } from "@material-ui/icons";
import profilepic from "../topbar/profile.png";
import logo from "../topbar/logo.png";
import envelope from "../topbar/Envelope.png";
import chat from "../topbar/chat.png";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img className="logo-image" src={logo} alt="" />
          <span className="logo">Nail2u</span>
          <img src={profilepic} alt="" className="topAvatar" />
          <div className="welcome-text">
            <span className="welcome">Welcome Back , John Doe</span>
            <br />
            <span className="insights">Today’s insights for you</span>
          </div>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            {/* <NotificationsNone /> */}
            <img src={chat} alt="chat" />
            <span className="topIconBadge">5</span>
            <span className="bottomTextResumes">Resumes</span>
          </div>

          <div className="topbarIconContainer">
            {/* <NotificationsNone /> */}
            <img src={envelope} alt="chat" />
            <span className="topIconBadge">5</span>
            <span className="bottomTextMessage">Messages</span>
          </div>

          <div className="topbarIconContainer">
            {/* <NotificationsNone /> */}
            <img src={envelope} alt="chat" />
            <span className="topIconBadge">12</span>
            <span className="bottomTextNotification">Notification</span>
          </div>
        </div>
      </div>
    </div>
  );
}
