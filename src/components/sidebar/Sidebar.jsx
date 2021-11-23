import "./sidebar.css";
import house from "../sidebar/icons/House.svg";
import tag from "../sidebar/icons/Tag.svg";
import ChatCircleText from "../sidebar/icons/ChatCircleText.svg";
import CurrencyCircleDollar from "../sidebar/icons/CurrencyCircleDollar.svg";
import services from "../sidebar/icons/Wrench.svg";
import User from "../sidebar/icons/User.svg";
import Users from "../sidebar/icons/Users.svg";
import UserCircle from "../sidebar/icons/UserCircle.svg";
import GearSix from "../sidebar/icons/GearSix.svg";
import Power from "../sidebar/icons/Power.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [showSubMenuOne, setShowSubMenuOne] = useState(true);
  const [showSubMenuTwo, setShowSubMenuTwo] = useState(true);
  const [showSubMenuThree, setShowSubMenuThree] = useState(true);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Dashboard</h3> */}
          <ul className="sidebarList">
            <li>
              <NavLink to="/dashboard" className="link sidebarListItem ">
                <img className="sidebarIcon" src={house} alt="house" />
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Quick Menu</h3> */}
          <ul className="sidebarList">
            <li
              className="sidebarListItem"
              onClick={() => setShowSubMenuOne(!showSubMenuOne)}
            >
              <img className="sidebarIcon" src={User} alt="house" />
              Users
            </li>
            <ul className={`pl-5 pt-1  ${showSubMenuOne ? "hide" : null}`}>
              <NavLink
                to="/dashboard/customers"
                className="link"
                activeClassName="a-active"
              >
                <div className="subMenu__item">
                  <li className=" sidebarSubListItem">
                    <div className="menu__badge"></div>
                    customer
                  </li>
                </div>
              </NavLink>
              <NavLink
                to="/dashboard/artists"
                className="link"
                activeClassName="a-active"
              >
                <div className="subMenu__item">
                  <div className="menu__badgeTwo"></div>
                  <li className=" sidebarSubListItem pt-2 ">artists </li>
                </div>
              </NavLink>
            </ul>
          </ul>
        </div>
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Notifications</h3> */}
          <ul className="sidebarList">
            <NavLink
              to="/dashboard/booking"
              className="link"
              activeClassName="a-active"
            >
              <li className="sidebarListItem ">
                <img className="sidebarIcon" src={tag} alt="house" />
                Booking
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Staff</h3> */}
          <ul className="sidebarList">
            <li
              className="sidebarListItem"
              onClick={() => setShowSubMenuTwo(!showSubMenuTwo)}
            >
              <img className="sidebarIcon" src={services} alt="house" />
              Services
            </li>
            <ul className={`pl-5 pt-1  ${showSubMenuTwo ? "hide" : null}`}>
              <NavLink
                to="/dashboard/daily-deals"
                className="link"
                activeClassName="a-active"
              >
                <div className="subMenu__item">
                  <div className="menu__badge"></div>
                  <li className=" sidebarSubListItem ">Daily Deals</li>
                </div>
              </NavLink>
              <NavLink
                to="/dashboard/all-services"
                className="link"
                activeClassName="a-active"
              >
                <div className="subMenu__item">
                  <div className="menu__badgeTwo"></div>
                  <li className=" pt-2 ">All Services </li>
                </div>
              </NavLink>
            </ul>
          </ul>
        </div>

        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Staff</h3> */}
          <ul className="sidebarList">
            <li
              className="sidebarListItem"
              onClick={() => setShowSubMenuThree(!showSubMenuThree)}
            >
              <img
                className="sidebarIcon"
                src={CurrencyCircleDollar}
                alt="house"
              />
              Payment
            </li>
            <ul className={`pl-5 pt-1  ${showSubMenuThree ? "hide" : null}`}>
              <NavLink
                to="/dashboard/payments/customers"
                className="link "
                activeClassName="a-active"
              >
                <div className="subMenu__item sidebarSubListItem">
                  <div className="menu__badge"></div>
                  <li>Customers</li>
                </div>
              </NavLink>
              <NavLink
                to="/dashboard/payments/artists"
                className="link"
                activeClassName="a-active"
              >
                <div className="subMenu__item">
                  <div className="menu__badgeTwo "></div>
                  <li className="pt-2">Artists </li>
                </div>
              </NavLink>
            </ul>
          </ul>
        </div>

        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Staff</h3> */}
          <ul className="sidebarList">
            <NavLink to="/dashboard/team" className="link">
              <li className="sidebarListItem">
                <img className="sidebarIcon" src={Users} alt="house" />
                Team
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Staff</h3> */}
          <ul className="sidebarList">
            <NavLink to="/dashboard/chat" className="link">
              <li className="sidebarListItem ">
                <img className="sidebarIcon" src={ChatCircleText} alt="house" />
                Chat
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Staff</h3> */}
          <ul className="sidebarList">
            <NavLink to="/dashboard/admin" className="link">
              <li className="sidebarListItem ">
                <img className="sidebarIcon" src={UserCircle} alt="house" />
                Admin
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="sidebarMenu">
          <ul className="sidebarList">
            <NavLink to="/dashboard/setting/general-setting" className="link">
              <li className="sidebarListItem">
                <img className="sidebarIcon" src={GearSix} alt="house" />
                Setting
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="sidebarMenu">
          <ul className="sidebarList">
            <NavLink to="#" className="link">
              <li className="sidebarListItem">
                <img className="sidebarIcon" src={Power} alt="house" />
                Logout
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
