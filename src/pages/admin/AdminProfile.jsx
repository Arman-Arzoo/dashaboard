import React from "react";
import Search from "../../components/home/search/search";
import "./adminprofile.css";
import pic from "../admin/adminpic.png";
import spic from "../admin/servicepic.png";
export default function AdminProfile() {
  return (
    <div className="admin">
      <Search />
      <span style={{ color: "#7A7A7A" }} className="pl-1">
        admin/admin Profile
      </span>

      <div className="card card-outline-secondary">
        <div className="p-3">
          <div className="row">
            {/* profile pic and info */}
            <div className="col-6 pt-5 artist-profile-detail-div">
              <img className="img" src="" alt="" />
              <div className=" pl-4">
                <h4>Darcel Ballentine</h4>

                <p className="pt-2">
                  <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
                  cameron@gmail.com
                </p>
                <p>
                  {" "}
                  <i class="fa fa-map-marker" aria-hidden="true"></i> 4517
                  Washington Ave. Manchester, Kentucky 39495
                </p>
                <p>
                  <i class="fa fa-phone" aria-hidden="true"></i> (123)242-2134
                </p>
                <i class="fa fa-trash-o float-right" aria-hidden="true"></i>
              </div>
            </div>
            {/* map on route detail */}
            <div className="col-6 ">
              <div className="admin-profile-most-recent-activity ">
                {/* heading */}
                <div className="card-header bg-white artist-card-header-info">
                  <h5 className=" mb-0 ">Most Recent Activity</h5>
                </div>
                {/* body */}
                <div className="p-4">
                  <h5>New Artist Added</h5>
                  <div className="admin-most-recent-activity">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img className="img" src={pic} alt="" />
                      <div>
                        <p>Tina Fox</p>
                        <p>(123)242-2134</p>
                        <p>tinafox@gmail.com</p>
                      </div>
                    </div>
                    <p>view</p>
                  </div>

                  <h5>New Service Added</h5>
                  <div className="admin-most-recent-activity">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img className="simg" src={spic} alt="" />
                      <div>
                        <p>Acrylic paint and reshape </p>
                        <p>$42</p>
                      </div>
                    </div>
                    <p>view</p>
                  </div>

                  <h5 className="pt-2">Transfered Amount</h5>
                  <div className="admin-most-recent-activity">
                    <div>
                      <h6>Tina Fox</h6>
                      <div>
                        <p>Acrylic paint and reshape </p>
                        <p>$42</p>
                      </div>
                    </div>
                    <p>view</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
