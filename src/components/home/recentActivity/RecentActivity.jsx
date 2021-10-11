import "./recentActivity.css";
import caret from "../recentActivity/caret.png";
import caretd from "../recentActivity/caretd.png";
export default function Users() {
  return (
    <div>
      {/* Recent activity section start */}
      <div className="container-fluid mt-4 recent-activity">
        <div className="row">
          <div className="col-12">
            <div className="recent-activity-head">
              <span>Recent Activity</span>
              <i class="fa fa-refresh" aria-hidden="true"></i>
            </div>
            {/* table for recent activity*/}
            <table class="table table-striped">
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
                    <img src={caret} alt="" />
                    <span className="order-no">1</span>
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
                {/* table body item1 end */}

                {/* table body item2 start */}
                <tr>
                  <th scope="row">
                    <img src={caret} alt="" />
                    <span className="order-no">2</span>
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
                {/* table body item2 end */}

                {/* table body item3 start */}
                <tr>
                  <th scope="row">
                    <img src={caretd} alt="" />
                    <span className="order-no">3</span>
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
