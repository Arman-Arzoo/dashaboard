import React from "react";
import Search from "../../components/home/search/search";
import artistprofile from "../users/artistprofile.png";
import rated from "../users/rated.png";
import unrated from "../users/unrated.png";
import "./artistProfile.css";

export default function ArtistProfile() {
  return (
    <div className="customers">
      <Search />
      <span style={{ color: "#7A7A7A" }} className="pl-1">
        users/artists/artist Details
      </span>

      <div className="card card-outline-secondary">
        {/* body */}
        <div className="p-3">
          <div className="row">
            {/* profile pic and info */}
            <div className="col-5 pt-5 artist-profile-detail-div">
              <img className="img" src={artistprofile} alt="" />
              <div className=" pl-4">
                <h4>Shailnay Cordon</h4>
                <img src={rated} alt="" />
                <img src={rated} alt="" />
                <img src={rated} alt="" />
                <img src={rated} alt="" />
                <img src={unrated} alt="" />
                <p className="pt-2">Expert in Acrylic and French Manicure</p>
                <p>
                  <i class="fa fa-phone" aria-hidden="true"></i> (123)242-2134
                </p>
                <i class="fa fa-trash-o float-right" aria-hidden="true"></i>
              </div>
            </div>
            {/* map on route detail */}
            <div className="col-7">
              {/* heading */}
              <div className="card-header bg-white artist-card-header-info">
                <h6 className=" mb-0 ">Current Status</h6>
                <button className="btn">on route</button>
              </div>
              {/* body */}
              <div>
                <div className="artist-timeline-table">
                  {/* google map */}
                  <div className="pt-2">
                    <iframe
                      width="150"
                      height="180"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                      <a href="http://www.gps.ie/">sport gps</a>
                    </iframe>
                  </div>
                  {/* table */}
                  <div>
                    <table className="table artist-table">
                      <thead>
                        <th>Amount</th>
                        <th>Booking Number</th>
                        <th>Service Type</th>
                        <th>Distance</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>$20</td>
                          <td>A9B11C3D</td>
                          <td>Manicure, Nails</td>
                          <td>31 Miles</td>
                        </tr>
                      </tbody>
                    </table>
                    dkjfk
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* section 2 */}
          <div className="row">
            <div className="col-4">
              {/* total earning */}
              <div className="card card-outline-secondary">
                {/* heading */}
                <div className="card-header">
                  <h5 className=" mb-0 ">Total Earning</h5>
                </div>
                {/* body */}
                <div>
                  <center className="pt-4">
                    <h2>
                      200.00 <sup className="colour">$</sup>
                    </h2>
                  </center>
                </div>
              </div>
              {/* services */}
              <div className="card card-outline-secondary mt-2">
                {/* heading */}
                <div className="card-header">
                  <h5 className=" mb-0 ">Services</h5>
                </div>
                {/* body */}
                <div className="artist-profile-services-div p-2">
                  <div>
                    <p>Acrylic Nailart</p>
                    <p>Acrylic Nailart</p>
                    <p>Acrylic Nailart</p>
                    <p>Acrylic Nailart</p>
                    <p>Acrylic Nailart</p>
                  </div>
                  <div>
                    <p>$20</p>
                    <p>$20</p>
                    <p>$20</p>
                    <p>$20</p>
                    <p>$20</p>
                  </div>
                </div>
              </div>

              {/* other detail */}
              <div className="card card-outline-secondary mt-2">
                {/* heading */}
                <div className="card-header">
                  <h5 className=" mb-0 ">Other details</h5>
                </div>
                {/* body */}
                <div className=" p-2">
                  <div>
                    <h5>Joining date</h5>
                    <p>12/08/2019</p>

                    <h5>Address</h5>
                    <p>House no.123 , street 4, xyz </p>

                    <h5>Account No</h5>
                    <p>Account No # 1234 0454 3434</p>

                    <h5>Email ID</h5>
                    <p>@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
