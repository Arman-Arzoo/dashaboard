import "./setting.css";
import { NavLink } from "react-router-dom";
import settingicon from "../setting/settingsicon.png";
import notificationicon from "../setting/notificationicon.png";
import supporticon from "../setting/supporticon.png";
import usericon from "../setting/usericon.png";
import walleticon from "../setting/walleticon.png";
import SettingsContent from "./SettingsContent";

export default function Setting() {
  return (
    <div className="setting">
      {/* template */}
      <div className="customerDetails">
        {/* card */}
        <div className="card card-outline-secondary">
          {/* heading */}
          <div className="card-header">
            <h3 className=" mb-0 ">Settings</h3>
          </div>
          {/* body */}
          <div className="setting-div">
            <div className="setting-sidebar">
              <div className="setting-wrapper">
                <div className="setting-menu">
                  <div className="setting-display">
                    <div className="setting-menu-container setting-active">
                      <NavLink to="/setting/general-setting">
                        <img src={settingicon} alt="" />
                        <p>General settings</p>
                      </NavLink>
                    </div>

                    <div className="setting-menu-container ml-3">
                      <NavLink to="/setting/alert-notification">
                        <img src={notificationicon} alt="" />
                        <p>Alert Notification</p>
                      </NavLink>
                    </div>
                  </div>

                  <div className="setting-display">
                    <div className="setting-menu-container mt-3">
                      <NavLink to="/setting/payment-setting">
                        <img src={walleticon} alt="" />
                        <p>Payment settings</p>
                      </NavLink>
                    </div>

                    <div className="setting-menu-container ml-3 mt-3">
                      <NavLink to="/setting/support-setting">
                        <img src={supporticon} alt="" />
                        <p>support settings</p>
                      </NavLink>
                    </div>
                  </div>
                  <div className="setting-display">
                    <div className="setting-menu-container  mt-3">
                      <NavLink to="/setting/profile-setting">
                        <img src={usericon} alt="" />
                        <p>profile settings</p>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="setting-content ">
              <SettingsContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
