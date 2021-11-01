import React from "react";

export default function SupportSetting() {
  return (
    <div>
      {/* template */}
      <div className="">
        {/* card */}
        <div className="card card-outline-secondary">
          {/* heading */}
          <div className="card-header">
            <h3 className=" mb-0 ">Chat Configuration</h3>
          </div>
          {/* body */}
          <div className="p-3">
            <div className="alert-notification-setting">
              <p>Accept Chat from Clients</p>
              <div class="switch_box box_1">
                <input type="checkbox" className="switch" />
              </div>
            </div>

            <div className="alert-notification-setting">
              <div>
                <p style={{ marginBottom: "0px" }}>Send Auto-Reply in Chat</p>
                <small>
                  Enable to send Self-defined message to the client when they
                  are chat with you
                </small>
              </div>

              <div class="switch_box box_1">
                <input type="checkbox" className="switch" />
              </div>
            </div>

            <div className="alert-notification-setting">
              <div>
                <textarea name="" id="" cols="80" rows="2"></textarea>
              </div>

              <div class="switch_box box_1">
                <button className="btn">save</button>
              </div>
            </div>

            <div className="alert-notification-setting">
              <div>
                <p style={{ marginBottom: "0px" }}>Choose when you Chat</p>
                <small>
                  Set the time and day when you want to chat with client
                </small>
              </div>

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
