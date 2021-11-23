import "./sidebar.css";
import house from "../sidebar/icons/House.svg";
import houseB from "../sidebar/icons/HouseB.svg";
import tag from "../sidebar/icons/Tag.svg";
import tagB from "../sidebar/icons/TagB.svg";
import ChatCircleText from "../sidebar/icons/ChatCircleText.svg";
import ChatCircleTextB from "../sidebar/icons/ChatCircleTextB.svg";
import CurrencyCircleDollar from "../sidebar/icons/CurrencyCircleDollar.svg";
import CurrencyCircleDollarB from "../sidebar/icons/CurrencyCircleDollarB.svg";
import services from "../sidebar/icons/Wrench.svg";
import servicesB from "../sidebar/icons/WrenchB.svg";
import User from "../sidebar/icons/User.svg";
import UserB from "../sidebar/icons/UserB.svg";
import Users from "../sidebar/icons/Users.svg";
import UsersB from "../sidebar/icons/UsersB.svg";
import UserCircle from "../sidebar/icons/UserCircle.svg";
import UserCircleB from "../sidebar/icons/UserCircleB.svg";
import GearSix from "../sidebar/icons/GearSix.svg";
import GearSixB from "../sidebar/icons/GearSixB.svg";
import Power from "../sidebar/icons/Power.svg";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [showSubMenuOne, setShowSubMenuOne] = useState(true);
  const [showSubMenuTwo, setShowSubMenuTwo] = useState(true);
  const [showSubMenuThree, setShowSubMenuThree] = useState(true);

  const location = useLocation();
  const { pathname } = location;

  const l = console.log(pathname);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Dashboard</h3> */}
          <ul className="sidebarList">
            <NavLink to="/dashboard" className="link ">
              <li
                className={`sidebarListItem  ${
                  pathname === "/dashboard" ? "active" : ""
                } `}
              >
                <img
                  className="sidebarIcon"
                  src={pathname === "/dashboard" ? houseB : house}
                  alt="house"
                />
                Dashboard
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Quick Menu</h3> */}
          <ul className="sidebarList ">
            <li
              className={`sidebarListItem ${
                pathname === "/dashboard/artists" ||
                pathname === "/dashboard/customers"
                  ? "active"
                  : null
              } `}
              onClick={() => setShowSubMenuOne(!showSubMenuOne)}
            >
              <img
                className="sidebarIcon"
                src={
                  pathname === "/dashboard/artists" ||
                  pathname === "/dashboard/customers"
                    ? UserB
                    : User
                }
                alt="house"
              />
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
                    <div
                      className={
                        pathname === "/dashboard/customers"
                          ? "menu__badgeActive"
                          : "menu__badge"
                      }
                    ></div>
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
                  <div
                    className={
                      pathname === "/dashboard/artists"
                        ? "menu__badgeActiveTwo"
                        : "menu__badgeTwo"
                    }
                  ></div>
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
              <li
                className={`sidebarListItem ${
                  pathname === "/dashboard/booking" ? "active" : null
                } `}
              >
                <img
                  className="sidebarIcon"
                  src={pathname === "/dashboard/booking" ? tagB : tag}
                  alt="house"
                />
                Booking
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Staff</h3> */}
          <ul className="sidebarList">
            <li
              className={`sidebarListItem ${
                pathname === "/dashboard/daily-deals" ||
                pathname === "/dashboard/all-services"
                  ? "active"
                  : null
              } `}
              onClick={() => setShowSubMenuTwo(!showSubMenuTwo)}
            >
              <img
                className="sidebarIcon"
                src={
                  pathname === "/dashboard/daily-deals" ||
                  pathname === "/dashboard/all-services"
                    ? servicesB
                    : services
                }
                alt="house"
              />
              Services
            </li>
            <ul className={`pl-5 pt-1  ${showSubMenuTwo ? "hide" : null}`}>
              <NavLink
                to="/dashboard/daily-deals"
                className="link"
                activeClassName="a-active"
              >
                <div className="subMenu__item">
                  <div
                    className={
                      pathname === "/dashboard/daily-deals"
                        ? "menu__badgeActive"
                        : "menu__badge"
                    }
                  ></div>
                  <li className=" sidebarSubListItem ">Daily Deals</li>
                </div>
              </NavLink>
              <NavLink
                to="/dashboard/all-services"
                className="link"
                activeClassName="a-active"
              >
                <div className="subMenu__item">
                  <div
                    className={
                      pathname === "/dashboard/all-services"
                        ? "menu__badgeActiveTwo"
                        : "menu__badgeTwo"
                    }
                  ></div>
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
              className={`sidebarListItem ${
                pathname === "/dashboard/payments/customers" ||
                pathname === "/dashboard/payments/artists"
                  ? "active"
                  : null
              } `}
              onClick={() => setShowSubMenuThree(!showSubMenuThree)}
            >
              <img
                className="sidebarIcon"
                src={
                  pathname === "/dashboard/payments/customers" ||
                  pathname === "/dashboard/payments/artists"
                    ? CurrencyCircleDollarB
                    : CurrencyCircleDollar
                }
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
                  <div
                    className={
                      pathname === "/dashboard/payments/customers"
                        ? "menu__badgeActive"
                        : "menu__badge"
                    }
                  ></div>
                  <li>Customers</li>
                </div>
              </NavLink>
              <NavLink
                to="/dashboard/payments/artists"
                className="link"
                activeClassName="a-active"
              >
                <div className="subMenu__item">
                  <div
                    className={
                      pathname === "/dashboard/payments/artists"
                        ? "menu__badgeActiveTwo"
                        : "menu__badgeTwo"
                    }
                  ></div>
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
              <li
                className={`sidebarListItem  ${
                  pathname === "/dashboard/team" ? "active" : ""
                } `}
              >
                <img
                  className="sidebarIcon"
                  src={pathname === "/dashboard/team" ? UsersB : Users}
                  alt="house"
                />
                Team
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Staff</h3> */}
          <ul className="sidebarList">
            <NavLink to="/dashboard/chat" className="link">
              <li
                className={`sidebarListItem  ${
                  pathname === "/dashboard/chat" ? "active" : ""
                } `}
              >
                <img
                  className="sidebarIcon"
                  src={
                    pathname === "/dashboard/chat"
                      ? ChatCircleTextB
                      : ChatCircleText
                  }
                  alt="house"
                />
                Chat
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Staff</h3> */}
          <ul className="sidebarList">
            <NavLink to="/dashboard/admin" className="link">
              <li
                className={`sidebarListItem  ${
                  pathname === "/dashboard/admin" ? "active" : ""
                } `}
              >
                <img
                  className="sidebarIcon"
                  src={
                    pathname === "/dashboard/admin" ? UserCircleB : UserCircle
                  }
                  alt="house"
                />
                Admin
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="sidebarMenu">
          <ul className="sidebarList">
            <NavLink to="/dashboard/setting/general-setting" className="link">
              <li
                className={`sidebarListItem  ${
                  pathname === "/dashboard/setting/general-setting" ||
                  pathname === "/dashboard/setting/alert-notification" ||
                  pathname === "/dashboard/setting/payment-setting" ||
                  pathname === "/dashboard/setting/support-setting" ||
                  pathname === "/dashboard/setting/profile-setting"
                    ? "active"
                    : ""
                } `}
              >
                <img
                  className="sidebarIcon"
                  src={
                    pathname === "/dashboard/setting/general-setting" ||
                    pathname === "/dashboard/setting/alert-notification" ||
                    pathname === "/dashboard/setting/payment-setting" ||
                    pathname === "/dashboard/setting/support-setting" ||
                    pathname === "/dashboard/setting/profile-setting"
                      ? GearSixB
                      : GearSix
                  }
                  alt="house"
                />
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
