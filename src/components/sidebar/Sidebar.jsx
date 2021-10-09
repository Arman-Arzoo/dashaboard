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
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Dashboard</h3> */}
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <img className="sidebarIcon" src={house} alt="house" />
                Dashboard
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Quick Menu</h3> */}
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <img className="sidebarIcon" src={User} alt="house" />
                Users
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Notifications</h3> */}
          <ul className="sidebarList">
            <Link to="/booking" className="link">
              <li className="sidebarListItem">
                <img className="sidebarIcon" src={tag} alt="house" />
                Booking
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Staff</h3> */}
          <ul className="sidebarList">
            <Link to="/services" className="link">
              <li className="sidebarListItem">
                <img className="sidebarIcon" src={services} alt="house" />
                Services
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Staff</h3> */}
          <ul className="sidebarList">
            <Link to="/Payment" className="link">
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  src={CurrencyCircleDollar}
                  alt="house"
                />
                Payment
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Staff</h3> */}
          <ul className="sidebarList">
            <Link to="/team" className="link">
              <li className="sidebarListItem">
                <img className="sidebarIcon" src={Users} alt="house" />
                Team
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Staff</h3> */}
          <ul className="sidebarList">
            <Link to="/chat" className="link">
              <li className="sidebarListItem">
                <img className="sidebarIcon" src={ChatCircleText} alt="house" />
                Chat
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Staff</h3> */}
          <ul className="sidebarList">
            <Link to="/admin" className="link">
              <li className="sidebarListItem">
                <img className="sidebarIcon" src={UserCircle} alt="house" />
                Admin
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/setting" className="link">
              <li className="sidebarListItem">
                <img className="sidebarIcon" src={GearSix} alt="house" />
                Setting
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/logout" className="link">
              <li className="sidebarListItem">
                <img className="sidebarIcon" src={Power} alt="house" />
                Logout
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
