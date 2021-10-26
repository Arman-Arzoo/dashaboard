import React from "react";
import Search from "../../components/home/search/search";
import Pagination from "../../components/users/customers/Pagination";
import "./customers.css";
export default function Pcustomers() {
  return (
    <div className="allservices">
      <Search />
      {/* breedcamp */}
      <div>
        <span style={{ color: "#7A7A7A" }} className="pl-1">
          Payments {">"} customers{" "}
        </span>
        <div className="float-right inputfilter">
          <span>show</span>
          <span>
            <input type="text" className="inpEntries " />
          </span>
          <span>Entries</span>
        </div>
      </div>
      {/* table list for all services */}

      <div className=" mt-3">
        <div className="card card-outline-secondary">
          {/* heading */}
          <div className="card-header">
            <h3 className=" mb-0 ">Customer Payment</h3>
          </div>
          {/* body */}
          <div>
            {/* create a table for list of sevices */}
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Order ID</th>
                  <th>Service ID</th>
                  <th>Amount</th>
                  <th>Card Number</th>
                  <th>Payment Method</th>
                  <th>Service Provider</th>
                  <th>Date</th>
                  <th>Contact no</th>
                </tr>
              </thead>
              <tbody>
                {/* item row 1 */}
                <tr>
                  <td>1</td>
                  <td>23429</td>
                  <td>Acrylic Nail art</td>
                  <td>$20</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}
