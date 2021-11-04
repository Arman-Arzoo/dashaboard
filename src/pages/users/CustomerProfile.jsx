import React from "react";
import Search from "../../components/home/search/search";
import nails from "../users/nails.png";
import "./customerprofile.css";

export default function CustomerProfile() {
  return (
    <div className="customers">
      <Search />
      <span style={{ color: "#7A7A7A" }} className="pl-1">
        users/customers/customer Detail
      </span>

      <div className="card card-outline-secondary">
        <div className="p-3">
          <div className="row">
            {/* profile pic and info */}
            <div className="col-5 pt-5 artist-profile-detail-div">
              <img className="img" src="" alt="" />
              <div className=" pl-4">
                <h4>Cameron Williamson</h4>

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
                  <div className="mt-4">
                    <iframe
                      width="150"
                      height="240"
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
                    {/* timeline  start*/}
                    <div className="timeline-artist-location">
                      <div>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <h5>Customer’s Location</h5>
                        <p>xyz street , 123 block , abc</p>
                      </div>
                      <div>
                        <h5>Time Left</h5>
                        <p>5 min</p>
                      </div>
                      <div>
                        <h5>Artist’s Location </h5>
                        <p>xyz street , 123 block , abc</p>
                      </div>
                    </div>
                    {/* timeline  end*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className="row">
          <div className="col-5">
            <div className="card card-outline-secondary ml-2">
              {/* heading */}
              <div className="card-header">
                <h3 className=" mb-0 ">Pre booking</h3>
              </div>
              {/* body */}
              <div className="p-2">
                <div>
                  <div className="customer-prebooking ">
                    <img src={nails} alt="" />
                    <h4>Acrylic Deal</h4>
                    <h5>Services</h5>
                    <p>Acrylic fill , French manicure, Nail Reshape</p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7 ">
            <div className="card card-outline-secondary mr-2 ">
              {/* heading */}
              <div className="card-header">
                <h3 className=" mb-0 ">Previous Booking</h3>
              </div>
              {/* body */}
              <div>body</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
