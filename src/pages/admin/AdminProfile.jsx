import React from "react";
import Search from "../../components/home/search/search";
import "./adminprofile.css";
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
                <div>dskfj</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
