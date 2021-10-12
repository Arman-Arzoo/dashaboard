import "./artistDetail.css";
import pic from "../artistDetail/profilepic.png";
import rating from "../artistDetail/rating.png";

export default function artistDetail() {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-8  align">
          {/* artist detail section start */}
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
          {/* artist detail section end */}
          <div className="row ">
            {/* montly generate section  start*/}
            <div className="col-7  mt-3  artist-detail-main ml-2 ">
              <div className="monthly-revenue mt-2">
                <span>Monthly Generated Revenue</span>
              </div>
              <hr />
              <div className="chart">chart is here</div>
            </div>
            {/* montly generate section  end*/}
            {/* service status section start */}
            <div className="col-4  mt-3 artist-detail-main ml-4 monthly-revenue">
              <span>Service status</span>
              <div>pie circular chart here</div>
            </div>
            {/* service status section end */}
          </div>
        </div>
        {/* customer review section */}
        <div className="col-4 artist-detail-main customer-review-main-div">
          <div className="contianer-fluid border-bottom pt-1  ">
            <div className="row">
              <div className="col-7 customer-review">
                <span>Customer's Reviews</span>
              </div>
              <div className="col-5 customer-overall-rating">
                <span>3.5</span>
                <img src={rating} alt="" />
                <p>overall rating</p>
              </div>
            </div>
          </div>
          {/* customer list item 1 start*/}
          <div className="row ">
            <div className="col-9 customer-review-info">
              <img src={pic} alt="profile" />
              <span>Sarah Doe</span>
              <p>Awesome ! Highly recommended</p>
            </div>
            <div className="col-3 customer-review-rating">
              <span>3.5</span>
              <img src={rating} alt="rating" />
            </div>
          </div>
          {/*customer list item 1 end */}

          {/* customer list item 2 start*/}
          <div className="row ">
            <div className="col-9 customer-review-info">
              <img src={pic} alt="profile" />
              <span>Sarah Doe</span>
              <p>Awesome ! Highly recommended</p>
            </div>
            <div className="col-3 customer-review-rating">
              <span>3.5</span>
              <img src={rating} alt="rating" />
            </div>
          </div>
          {/*customer list item 2 end */}

          {/* customer list item 2 start*/}
          <div className="row ">
            <div className="col-9 customer-review-info">
              <img src={pic} alt="profile" />
              <span>Sarah Doe</span>
              <p>Awesome ! Highly recommended</p>
            </div>
            <div className="col-3 customer-review-rating">
              <span>3.5</span>
              <img src={rating} alt="rating" />
            </div>
          </div>
          {/*customer list item 2 end */}

          {/* customer list item 2 start*/}
          <div className="row ">
            <div className="col-9 customer-review-info">
              <img src={pic} alt="profile" />
              <span>Sarah Doe</span>
              <p>Awesome ! Highly recommended</p>
            </div>
            <div className="col-3 customer-review-rating">
              <span>3.5</span>
              <img src={rating} alt="rating" />
            </div>
          </div>
          {/*customer list item 2 end */}

          {/* customer list item 2 start*/}
          <div className="row ">
            <div className="col-9 customer-review-info">
              <img src={pic} alt="profile" />
              <span>Sarah Doe</span>
              <p>Awesome ! Highly recommended</p>
            </div>
            <div className="col-3 customer-review-rating">
              <span>3.5</span>
              <img src={rating} alt="rating" />
            </div>
          </div>
          {/*customer list item 2 end */}

          {/* customer list item 2 start*/}
          <div className="row ">
            <div className="col-9 customer-review-info">
              <img src={pic} alt="profile" />
              <span>Sarah Doe</span>
              <p>Awesome ! Highly recommended</p>
            </div>
            <div className="col-3 customer-review-rating">
              <span>3.5</span>
              <img src={rating} alt="rating" />
            </div>
          </div>
          {/*customer list item 2 end */}
        </div>
      </div>
    </div>
  );
}
