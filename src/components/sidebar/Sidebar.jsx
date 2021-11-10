import "./sidebar.css";
import house from "../sidebar/icons/House.png";
import tag from "../sidebar/icons/Tag.png";
import ChatCircleText from "../sidebar/icons/ChatCircleText.png";
import CurrencyCircleDollar from "../sidebar/icons/CurrencyCircleDollar.png";
import services from "../sidebar/icons/services.png";
import User from "../sidebar/icons/User.png";
import Users from "../sidebar/icons/Users.png";
import UserCircle from "../sidebar/icons/UserCircle.png";
import GearSix from "../sidebar/icons/GearSix.png";
import Power from "../sidebar/icons/Power.png";
import { NavLink, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Dashboard</h3> */}
          <ul className="sidebarList">
            <NavLink to="/" className="link">
              <li
                className={`sidebarListItem  ${
                  splitLocation[1] === "" ? "active" : ""
                }`}
              >
                <img className="sidebarIcon" src={house} alt="house" />
                Dashboard
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Quick Menu</h3> */}
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <img className="sidebarIcon" src={User} alt="house" />
              Users
            </li>
            <ul className="pl-5 pt-1 ">
              <NavLink to="/customers" className="link">
                <li
                  className={` sidebarSubListItem ${
                    splitLocation[1] === "customers" ? "active" : ""
                  }`}
                >
                  customer
                </li>
              </NavLink>
              <NavLink to="/artists" className="link">
                <li
                  className={` sidebarSubListItem pt-2 ${
                    splitLocation[1] === "artists" ? "active" : ""
                  }`}
                >
                  artists{" "}
                </li>
              </NavLink>
            </ul>
          </ul>
        </div>
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Notifications</h3> */}
          <ul className="sidebarList">
            <NavLink to="/booking" className="link">
              <li
                className={`sidebarListItem  ${
                  splitLocation[1] === "booking" ? "active" : ""
                }`}
              >
                <img className="sidebarIcon" src={tag} alt="house" />
                Booking
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Staff</h3> */}
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <img className="sidebarIcon" src={services} alt="house" />
              Services
            </li>
            <ul className="pl-5 pt-1">
              <NavLink to="/daily-deals" className="link">
                <li
                  className={` sidebarSubListItem  ${
                    splitLocation[1] === "daily-deals" ? "active" : ""
                  }`}
                >
                  Daily Deals
                </li>
              </NavLink>
              <NavLink to="/all-services" className="link">
                <li
                  className={` sidebarSubListItem pt-2 ${
                    splitLocation[1] === "all-services" ? "active" : ""
                  }`}
                >
                  All Services{" "}
                </li>
              </NavLink>
            </ul>
          </ul>
        </div>

        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Staff</h3> */}
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <img
                className="sidebarIcon"
                src={CurrencyCircleDollar}
                alt="house"
              />
              Payment
            </li>
            <ul className="pl-5 pt-1">
              <NavLink
                to="/payments/customers"
                className="link"
                activeClassName="a-active"
              >
                <li>Customers</li>
              </NavLink>
              <NavLink
                to="/payments/artists"
                className="link"
                activeClassName="a-active"
              >
                <li className="pt-2">Artists </li>
              </NavLink>
            </ul>
          </ul>
        </div>

        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Staff</h3> */}
          <ul className="sidebarList">
            <NavLink to="/team" className="link">
              <li
                className={`sidebarListItem  ${
                  splitLocation[1] === "team" ? "active" : ""
                }`}
              >
                <img className="sidebarIcon" src={Users} alt="house" />
                Team
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Staff</h3> */}
          <ul className="sidebarList">
            <NavLink to="/chat" className="link">
              <li
                className={`sidebarListItem  ${
                  splitLocation[1] === "chat" ? "active" : ""
                }`}
              >
                <img className="sidebarIcon" src={ChatCircleText} alt="house" />
                Chat
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Staff</h3> */}
          <ul className="sidebarList">
            <NavLink to="/admin" className="link">
              <li
                className={`sidebarListItem  ${
                  splitLocation[1] === "admin" ? "active" : ""
                }`}
              >
                <img className="sidebarIcon" src={UserCircle} alt="house" />
                Admin
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="sidebarMenu">
          <ul className="sidebarList">
            <NavLink to="/setting/general-setting" className="link">
              <li
                className={`sidebarListItem  ${
                  splitLocation[1] === "setting" ? "active" : ""
                }`}
              >
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
