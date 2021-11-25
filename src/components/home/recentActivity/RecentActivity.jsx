import "./recentActivity.css";
import caret from "../recentActivity/CaretLeft.svg";
import caretd from "../recentActivity/CaretOpen.svg";
import { UserInfoDetail } from "../../UserInfoDetail";
import { UserSecondInfo } from "../../UserSecondInfo.jsx";
import { useState } from "react";
export default function Users() {
  const [onRoute, setOnRoute] = useState(false);
  const [onGoing, setOnGoing] = useState(false);

  const idone = 1;
  const idthree = 3;

  return (
    <div>
      {/* Recent activity section start */}
      <div className="container-fluid mt-4 recent-activity">
        <div className="row">
          <div className="col-12">
            <div className="recent-activity-head">
              <span>Recent Activity</span>
              <i className="fa fa-refresh" aria-hidden="true"></i>
            </div>
            {/* table for recent activity*/}
            <table className="table table-striped">
              <thead>
                {/* table list */}
                <tr>
                  <th>Order No</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Services</th>
                  <th>Customer</th>
                  <th>Location</th>
                  <th>Amount</th>
                  <th>Artist'sName</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* table body item1 start */}
                <tr>
                  <th scope="row">
                    <img
                      src={onRoute && idone === 1 ? caret : caretd}
                      alt=""
                      onClick={() => setOnRoute(!onRoute)}
                    />
                    <span className="order-no">{idone}</span>
                  </th>
                  <td>04/08/2021</td>
                  <td>01:00PM</td>
                  <td>Acrylic Nail art</td>
                  <td>Tina Fox</td>
                  <td>8502 Preston Rd. Inglewood, Maine 98380</td>
                  <td>$20</td>
                  <td>Shalney Cordon</td>
                  <td>
                    <button className="btn-route-status">Onroute</button>
                  </td>
                </tr>

                <tr className={`${onRoute ? "" : "userInfoHide"}`}>
                  <td colSpan="9">
                    <UserInfoDetail />
                  </td>
                </tr>

                {/* table body item1 end */}

                {/* table body item3 start */}
                <tr>
                  <th scope="row">
                    <img
                      src={onGoing && idthree === 3 ? caret : caretd}
                      alt=""
                      onClick={() => setOnGoing(!onGoing)}
                    />
                    <span className="order-no">{idthree}</span>
                  </th>
                  <td>04/08/2021</td>
                  <td>01:00PM</td>
                  <td>Acrylic Nail art</td>
                  <td>Tina Fox</td>
                  <td>8502 Preston Rd. Inglewood, Maine 98380</td>
                  <td>$20</td>
                  <td>Shalney Cordon</td>
                  <td>
                    <button className="btn-ongoing-status">Ongoing</button>
                  </td>
                </tr>

                <tr
                  className={`${
                    onGoing && idthree === 3 ? "" : "userInfoHide"
                  }`}
                >
                  <td colSpan="9">
                    <UserSecondInfo />
                  </td>
                </tr>
                {/* table body item3 end */}
              </tbody>
            </table>

            {/* table end */}
          </div>
        </div>
      </div>
      {/* Recent activity section end */}
    </div>
  );
}
