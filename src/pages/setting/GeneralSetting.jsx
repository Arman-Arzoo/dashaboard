import React from "react";

export default function GeneralSetting() {
  return (
    <div>
      {/* template */}
      <div className="">
        {/* card */}
        <div className="card card-outline-secondary">
          {/* heading */}
          <div className="card-header">
            <h3 className=" mb-0 ">General Settings</h3>
          </div>
          {/* body */}
          <div className="p-3 general-setting-form">
            <form>
              <div className="form-row">
                <div className="form-group col-md-8">
                  <label htmlFor="payableAmount">Email Address</label>
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <input
                      type="email"
                      className="form-control "
                      id="PayableAmount"
                      placeholder="tinafox@gmail.com"
                    />
                    <button className="btn ml-4 ">Save Changes</button>
                  </div>
                </div>
              </div>
            </form>
            <form>
              <div className="form-row pt-4">
                <div className="form-group col-md-3">
                  <label htmlFor="inputsender">Current Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputpassword"
                    placeholder="......."
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="inputsender">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputnewpassword"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="inputreciever">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputconfirm"
                  />
                </div>
                <div className="form-group col-md-3">
                  <button className="btn ml-4 update-btn">update</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
