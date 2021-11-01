import React from "react";

export default function AlertNotification() {
  return (
    <div>
      {/* template */}
      <div className="">
        {/* card */}
        <div className="card card-outline-secondary">
          {/* heading */}
          <div className="card-header">
            <h3 className=" mb-0 ">Alert & notification</h3>
          </div>
          {/* body */}
          <div className="p-3">
            <div className="alert-notification-setting">
              <p>Dashboard Nofication</p>
              <div class="switch_box box_1">
                <input type="checkbox" className="switch" />
              </div>
            </div>
            <div className="alert-notification-setting pt-3">
              <p>Sound</p>
              <div class="switch_box box_1">
                <input type="checkbox" className="switch" />
              </div>
            </div>

            <h4>Language</h4>
            <hr />
            <div className="alert-notification-setting pt-3">
              <p>English(USA)</p>
              <div class="switch_box box_1">
                <input type="checkbox" className="switch" />
              </div>
            </div>
            <div className="alert-notification-setting pt-3">
              <p>English(Uk)</p>
              <div class="switch_box box_1">
                <input type="checkbox" className="switch" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
