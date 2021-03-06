import React from "react";
import propic from "../setting/propic.png";
export default function ProfileSetting() {
  return (
    <div>
      {/* template */}
      <div className="">
        {/* card */}
        <div className="card card-outline-secondary">
          {/* heading */}
          <div className="card-header">
            <h3 className=" mb-0 ">Profile Settings</h3>
          </div>
          {/* body */}
          <div>
            <form style={{ display: "flex" }}>
              <div className="setting-image-profile p-3 m-3">
                <p>Change Profile Picture</p>
                <img src={propic} alt="" />
                <div className="circle-div-setting">
                  {/* demo start */}
                  <div className="image-upload-setting mt-3">
                    {" "}
                    <label htmlFor="file_upload-setting">
                      {" "}
                      <img src="" alt="" className="uploaded-image" />
                      <div className="h-100">
                        <div className="dplay-tbl">
                          <div className="dplay-tbl-cell">
                            {" "}
                            <i className="fa fa-camera" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                      <input
                        data-required="image"
                        type="file"
                        name="image_name"
                        id="file_upload"
                        className="image-input"
                        data-traget-resolution="image_resolution"
                      />
                    </label>{" "}
                  </div>
                  {/* demo end */}
                </div>
              </div>
              <div>
                <div className="form-row pt-4 pl-5">
                  <div className="form-group col-md-5">
                    <label htmlFor="inputsender">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="shailnay"
                    />
                  </div>
                  <div className="form-group col-md-5">
                    <label htmlFor="username">User Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="CardNumber"
                      placeholder="shailnay cordway"
                    />
                  </div>
                </div>

                <div className="form-row pt-4 pl-5">
                  <div className="form-group col-md-5">
                    <label htmlFor="inputsender">Contact</label>
                    <input
                      type="text"
                      className="form-control"
                      id="contact"
                      placeholder="shailnay"
                    />
                  </div>
                  <div className="form-group col-md-5">
                    <label htmlFor="username">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="shailnay cordway"
                    />
                  </div>
                </div>

                <div className="form-row pt-4 pl-5">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputsender">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="@gmail.com"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <button className="btn btn-profile-update">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
