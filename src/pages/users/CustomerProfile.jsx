import React from "react";
import Search from "../../components/home/search/search";
import nails from "../users/nails.png";
import "./customerprofile.css";
import pic from "../users/pic.png";
import FavouriteItem from "../../components/users/customers/FavouriteItem";
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
                  <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                  cameron@gmail.com
                </p>
                <p>
                  {" "}
                  <i className="fa fa-map-marker" aria-hidden="true"></i> 4517
                  Washington Ave. Manchester, Kentucky 39495
                </p>
                <p>
                  <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                  (123)242-2134
                </p>
                <i className="fa fa-trash-o float-right" aria-hidden="true"></i>
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
                      title="customer-location"
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
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
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
                <div className="pre-booking-customer-div">
                  <div className="customer-prebooking ">
                    <img src={nails} alt="" />
                    <h4>Acrylic Deal</h4>
                    <h5>Services</h5>
                    <p>Acrylic fill , French manicure, Nail Reshape</p>
                  </div>
                  <div>
                    <div className="prebooking-customer-info">
                      <div>
                        <h5>Order ID : </h5>
                        <h5>Service ID :</h5>
                        <h5>Scheduled Time :</h5>
                        <h5>Scheduled Date :</h5>
                        <h5>Tax :</h5>
                        <h5>Subtotal : </h5>
                        <h5>Payment :</h5>
                      </div>
                      <div>
                        <p>23425433</p>
                        <p>23425433</p>
                        <p>01:00Pm</p>
                        <p>08/10/2021</p>
                        <p>$0.15</p>
                        <p>$120</p>
                        <p>$300</p>
                      </div>
                    </div>
                    <div className="prebooking-customer-profile">
                      <img src={pic} alt="" />
                      <div>
                        <h5>Shailny Cordon</h5>
                        <h5>(123)242-2134</h5>
                      </div>
                    </div>
                  </div>
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
              <div className="previous-booking-table-div">
                <table className="table table-striped previous-booking-table">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Order ID</th>
                      <th>Service ID</th>
                      <th>Card no.</th>
                      <th>Artist</th>
                      <th>Location</th>
                      <th>Date/time</th>
                      <th>Payment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* item row 1 */}
                    <tr>
                      <td>1</td>
                      <td>A9B11C3D</td>
                      <td>A9B11C3D</td>
                      <td>0011 2342 3219</td>
                      <td>Tina Fox</td>
                      <td>2972 Westheimer Rd. Santa Ana, Illinois 85486 </td>
                      <td>27 Aug 2020 10:42 AM</td>
                      <td>$6.48</td>
                    </tr>
                    {/* item row 2 */}
                    <tr>
                      <td>2</td>
                      <td>A9B11C3D</td>
                      <td>A9B11C3D</td>
                      <td>0011 2342 3219</td>
                      <td>Tina Fox</td>
                      <td>2972 Westheimer Rd. Santa Ana, Illinois 85486 </td>
                      <td>27 Aug 2020 10:42 AM</td>
                      <td>$6.48</td>
                    </tr>
                    {/* item row 3 */}
                    <tr>
                      <td>3</td>
                      <td>A9B11C3D</td>
                      <td>A9B11C3D</td>
                      <td>0011 2342 3219</td>
                      <td>Tina Fox</td>
                      <td>2972 Westheimer Rd. Santa Ana, Illinois 85486 </td>
                      <td>27 Aug 2020 10:42 AM</td>
                      <td>$6.48</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* favourite section start */}

        <div className="ml-2 mr-2 mt-2">
          <div className="card card-outline-secondary">
            {/* heading */}
            <div className="card-header">
              <h3 className=" mb-0 ">Favourite</h3>
            </div>
            {/* body */}
            <div>
              {/* carousel data start here */}
              <div className="container">
                <div className="row">
                  <div
                    id="carousel"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    {/* <ol className="carousel-indicators">
                    <li
                      data-target="#carousel"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                  </ol> */}
                    <div className="carousel-inner">
                      <div className="carousel-item active ">
                        {/* <div className="d-none d-lg-block"> */}
                        <div className="slide-box ">
                          {/* slider item */}
                          <FavouriteItem />
                          <FavouriteItem />
                          <FavouriteItem />
                          <FavouriteItem />
                          <FavouriteItem />
                        </div>
                        {/* </div> */}
                      </div>
                      {/* second round */}
                      <div className="carousel-item">
                        {/* <div className="d-none d-lg-block"> */}
                        <div className="slide-box">
                          {/* items box here  start*/}
                          <FavouriteItem />
                          <FavouriteItem />
                          <FavouriteItem />
                          <FavouriteItem />
                          <FavouriteItem />

                          {/* items box end */}
                        </div>
                        {/* </div> */}
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carousel"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      >
                        <i
                          className="fa fa-chevron-left"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carousel"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      >
                        <i
                          className="fa fa-chevron-right"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* carousel data end here */}
            </div>
          </div>
        </div>
        {/* favourite section end */}
      </div>
    </div>
  );
}
