import React from "react";
import "./userInfoDetail.css";
import powerIcon from "../components/Power.svg";
export const UserInfoDetail = () => {
  return (
    <div className="userInfoDetail">
      <div className="mapPorwerIcon">
        <iframe
          title="customer-location"
          width="150"
          height="210"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="http://www.gps.ie/">sport gps</a>
        </iframe>
        <img src={powerIcon} alt="" />
      </div>
      <div>
        <table className="table table-striped">
          <thead>
            <th>Amount</th>
            <th>Booking Number</th>
            <th>Service Type</th>
            <th>Distance</th>
            <th>Payment Method</th>
          </thead>
          <tbody>
            <tr>
              <td>$20</td>
              <td>A9B11C3D</td>
              <td>Manicure, Nails</td>
              <td>31 Miles</td>
              <td>mastercard</td>
            </tr>
          </tbody>
        </table>

        {/* timeline  start*/}
        <div className="userInfoDetail__timeline">
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
  );
};
