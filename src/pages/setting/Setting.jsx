import "./setting.css";
import {Link} from 'react-router-dom';
import settingicon from '../setting/settingsicon.png'

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
                <div className="setting-menu-container">
                  <Link>
                    <img src={settingicon} alt="" />
                     <p>setting</p>
                     </Link>
                </div>

                <div className="setting-menu-container ml-3">
                  <Link>
                    <img src={settingicon} alt="" />
                     <p>setting</p>
                     </Link>
                </div>
                </div>


                <div className="setting-display">
                <div className="setting-menu-container mt-3">
                  <Link>
                    <img src={settingicon} alt="" />
                     <p>setting</p>
                     </Link>
                </div>

                <div className="setting-menu-container ml-3 mt-3">
                  <Link>
                    <img src={settingicon} alt="" />
                     <p>setting</p>
                     </Link>
                </div>
                </div>
                <div className="setting-display">
              

                <div className="setting-menu-container  mt-3">
                  <Link>
                    <img src={settingicon} alt="" />
                     <p>setting</p>
                     </Link>
                </div>
                </div>

                



                
                 </div>
            </div>
            </div>
            <div className="setting-content">setting content</div>
          </div>
        </div>
      </div>
    </div>
  );
}
