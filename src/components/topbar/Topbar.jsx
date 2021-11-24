import React from "react";
import "./topbar.css";
import profilepic from "../topbar/profile.png";
import messageIcon from "../topbar/Envelope.svg";
import resumeIcon from "../topbar/resume.svg";
import bellIcon from "../topbar/bell.svg";
import logo from "../topbar/logo.svg";

import { NavLink } from "react-router-dom";

export default function Topbar() {
  const resume = null;
  const message = null;
  const notification = null;
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img className="logo-image" src={logo} alt="" />
          <NavLink to="/dashboard">
            <span className="logo">Nail2u</span>
          </NavLink>
          <img src={profilepic} alt="" className="topAvatar" />
          <div className="welcome-text">
            <span className="welcome">Welcome Back , John Doe</span>
            <br />
            <span className="insights">Today’s insights for you</span>
          </div>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            {/* <chat /> */}

            {/* <i class="fa fa-address-card-o" aria-hidden="true"></i> */}
            <img src={resumeIcon} alt="" className="topbar__iconSize" />
            <span className={`topIconBadge ${resume ? "" : "hideBadge"}`}>
              5
            </span>
            <span className="bottomTextResumes">Resumes</span>
          </div>

          <div className="topbarIconContainer">
            {/* <envelope /> */}

            {/* <i class="fa fa-envelope-o" aria-hidden="true"></i> */}
            <img src={messageIcon} alt="" className="topbar__iconSize" />
            <span className={`topIconBadge ${message ? "" : "hideBadge"}`}>
              5
            </span>
            <span className="bottomTextMessage">Messages</span>
          </div>

          <div className="topbarIconContainer">
            {/* <Notification /> */}

            {/* <i className="fa fa-bell-o" aria-hidden="true"></i> */}
            <img src={bellIcon} alt="" className="topbar_bell" />
            <span className={`topIconBadge ${notification ? "" : "hideBadge"}`}>
              12
            </span>
            <span className="bottomTextNotification">Notification</span>
          </div>
        </div>
      </div>
    </div>
  );
}
