import React from "react";
import arrowBendIcon from "../components/ArrowBendDownRight.svg";
import "./userSecondInfo.css";

export const UserSecondInfo = () => {
  return (
    <div className="userSecondInfo">
      <div>
        <img src={arrowBendIcon} alt="alla" />
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
      </div>
    </div>
  );
};
