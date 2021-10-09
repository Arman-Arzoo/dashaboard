import "./jobPost.css";

export default function JobPost() {
  return (
    <div>
      {/* Recent activity section start */}

      <div className="container-fluid mt-4 recent-activity">
        <div className="row">
          <div className="col-12">
            <div className="recent-activity-head">
              <span>20 Job Posts</span>
              <i class="fa fa-refresh" aria-hidden="true"></i>
            </div>
            {/* table for recent activity*/}
            <table class="table table-striped">
              <thead>
                {/* table list */}
                <tr>
                  <th>No</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Service</th>
                  <th>Customer</th>
                  <th>Location</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* table body item1 start */}
                <tr>
                  <th scope="row">1</th>
                  <td>04/08/2021</td>
                  <td>01:00PM</td>
                  <td>Acrylic Nail art</td>
                  <td>Tina Fox</td>
                  <td>8502 Preston Rd. Inglewood, Maine 98380</td>
                  <td>$20</td>
                  <td>
                    <button className="btn-route-status">Onroute</button>
                  </td>
                </tr>
                {/* table body item1 end */}

                {/* table body item2 start */}
                <tr>
                  <th scope="row">2</th>
                  <td>04/08/2021</td>
                  <td>01:00PM</td>
                  <td>Acrylic Nail art</td>
                  <td>Tina Fox</td>
                  <td>8502 Preston Rd. Inglewood, Maine 98380</td>
                  <td>$20</td>

                  <td>
                    <button className="btn-ongoing-status">Ongoing</button>
                  </td>
                </tr>
                {/* table body item2 end */}

                {/* table body item3 start */}
                <tr>
                  <th scope="row">3</th>
                  <td>04/08/2021</td>
                  <td>01:00PM</td>
                  <td>Acrylic Nail art</td>
                  <td>Tina Fox</td>
                  <td>8502 Preston Rd. Inglewood, Maine 98380</td>
                  <td>$20</td>

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
