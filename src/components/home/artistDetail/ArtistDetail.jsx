import "./artistDetail.css";
import pic from "../artistDetail/profilepic.png";

export default function artistDetail() {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-8  align">
          <div className="col-12   artist-detail-main  align">
            <div className="artist-detail ">
              <span>Artist Details</span>
              <i class="fa fa-refresh" aria-hidden="true"></i>
            </div>

            {/* table for artish detail*/}
            <table class="table table-striped">
              <thead>
                {/* table list */}
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Join Date</th>
                  <th>Job Done</th>
                  <th>Status</th>
                  <th>Contact no</th>
                  <th>Current Location</th>
                </tr>
              </thead>
              <tbody>
                {/* table body item1 start */}
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <div className="artist-img">
                      <img src={pic} alt="" />
                      <span>Wade Warren</span>
                    </div>
                  </td>
                  <td>01/01/2021</td>
                  <td>200</td>
                  <td>
                    <button className="btn-artist-detail-status">
                      Working
                    </button>
                  </td>
                  <td>8502 98380</td>
                  <td>abcdef ghijk lmnopqrst uvwxyz</td>
                </tr>
                {/* table body item1 end */}
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-7  mt-3  artist-detail-main ml-2">
              monthly generate
            </div>
            <div className="col-4  mt-3 artist-detail-main ml-4">
              Service status
            </div>
          </div>
        </div>
        <div className="col-4 artist-detail-main">Customer Review</div>
      </div>
    </div>
  );
}
