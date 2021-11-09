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
              <div className="switch_box box_1">
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

              <div className="switch_box box_1">
                <input type="checkbox" className="switch" />
              </div>
            </div>

            <div className="alert-notification-setting">
              <div>
                <textarea name="" id="" cols="80" rows="2"></textarea>
              </div>

              <div className="switch_box box_1">
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

              <div className="switch_box box_1">
                <input type="checkbox" className="switch" />
              </div>
            </div>

            <div className="custom-control custom-checkbox mt-2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Enable Chat for all Days(24*7)
              </label>
            </div>

            <p className="pt-3 pl-5">or</p>
            <div className="custom-control custom-checkbox mt-2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Monday
              </label>
              <input
                className="mon"
                type="time"
                id="appt"
                name="appt"
                readOnly
                value="11:30"
              ></input>
              <input
                className="ml-3"
                type="time"
                id="appt"
                name="appt"
                readOnly
                value="07:00"
              ></input>
            </div>

            <div className="custom-control custom-checkbox mt-2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
                value="11:30"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Tuesday
              </label>
              <input
                className="tue"
                type="time"
                id="appt"
                name="appt"
                value="11:30"
                readOnly
              ></input>
              <input
                className="ml-3"
                type="time"
                id="appt"
                name="appt"
                value="07:00"
                readOnly
              ></input>
            </div>

            <div className="custom-control custom-checkbox mt-2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Wednesday
              </label>
              <input
                className="timeinterval wed"
                type="time"
                id="appt"
                name="appt"
                value="11:30"
                readOnly
              ></input>
              <input
                className="ml-3"
                type="time"
                id="appt"
                name="appt"
                value="07:00"
                readOnly
              ></input>
            </div>

            <div className="custom-control custom-checkbox mt-2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Thursday
              </label>
              <input
                className="thur"
                type="time"
                id="appt"
                name="appt"
                value="11:30"
                readOnly
              ></input>
              <input
                className="ml-3"
                type="time"
                id="appt"
                name="appt"
                readOnly
                value="07:00"
              ></input>
            </div>

            <div className="custom-control custom-checkbox mt-2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Firday
              </label>
              <input
                className="fir"
                type="time"
                id="appt"
                name="appt"
                value="11:30"
                readOnly
              ></input>
              <input
                className="ml-3"
                type="time"
                id="appt"
                name="appt"
                readOnly
                value="07:00"
              ></input>
            </div>

            <div className="custom-control custom-checkbox mt-2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Saturday
              </label>
              <input
                className="sat"
                type="time"
                id="appt"
                name="appt"
                value="11:30"
                readOnly
              ></input>
              <input
                className="ml-3"
                type="time"
                id="appt"
                name="appt"
                value="07:00"
                readOnly
              ></input>
            </div>

            <div className="custom-control custom-checkbox mt-2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Sunday
              </label>
              <input
                className="sun"
                type="time"
                id="appt"
                name="appt"
                value="11:30"
                readOnly
              ></input>
              <input
                className="ml-3"
                type="time"
                id="appt"
                name="appt"
                readOnly
                value="07:00"
              ></input>
            </div>
            <small>*Set the Time format in 24h (e.g-15:30:00)</small>
          </div>
        </div>
      </div>
    </div>
  );
}
