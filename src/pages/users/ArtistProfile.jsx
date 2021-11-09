import React from "react";
import Search from "../../components/home/search/search";
import artistprofile from "../users/artistprofile.png";
import rated from "../users/rated.png";
import unrated from "../users/unrated.png";
import reviewpic from "../users/reviewpic.png";

import "./artistProfile.css";
import PortfolioItem from "../../components/users/artists/PortfolioItem";

export default function ArtistProfile() {
  return (
    <div className="customers">
      <Search />
      <span style={{ color: "#7A7A7A" }} className="pl-1">
        users/artists/artist Details
      </span>

      <div className="card card-outline-secondary">
        {/* body */}
        <div className="p-3">
          <div className="row">
            {/* profile pic and info */}
            <div className="col-5 pt-5 artist-profile-detail-div">
              <img className="img" src={artistprofile} alt="" />
              <div className=" pl-4">
                <h4>Shailnay Cordon</h4>
                <img src={rated} alt="" />
                <img src={rated} alt="" />
                <img src={rated} alt="" />
                <img src={rated} alt="" />
                <img src={unrated} alt="" />
                <p className="pt-2">Expert in Acrylic and French Manicure</p>
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
                      title="artist-location"
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

          {/* section 2 */}
          <div className="row">
            <div className="col-4">
              {/* total earning */}
              <div className="card card-outline-secondary">
                {/* heading */}
                <div className="card-header">
                  <h5 className=" mb-0 ">Total Earning</h5>
                </div>
                {/* body */}
                <div>
                  <center className="pt-4">
                    <h2>
                      200.00 <sup className="colour">$</sup>
                    </h2>
                  </center>
                </div>
              </div>
              {/* services */}
              <div className="card card-outline-secondary mt-2">
                {/* heading */}
                <div className="card-header">
                  <h5 className=" mb-0 ">Services</h5>
                </div>
                {/* body */}
                <div className="artist-profile-services-div p-2">
                  <div>
                    <p>Acrylic Nailart</p>
                    <p>Acrylic Nailart</p>
                    <p>Acrylic Nailart</p>
                    <p>Acrylic Nailart</p>
                    <p>Acrylic Nailart</p>
                  </div>
                  <div>
                    <p>$20</p>
                    <p>$20</p>
                    <p>$20</p>
                    <p>$20</p>
                    <p>$20</p>
                  </div>
                </div>
              </div>

              {/* other detail */}
              <div className="card card-outline-secondary mt-2">
                {/* heading */}
                <div className="card-header">
                  <h5 className=" mb-0 ">Other details</h5>
                </div>
                {/* body */}
                <div className=" p-2">
                  <div>
                    <h5>Joining date</h5>
                    <p>12/08/2019</p>

                    <h5>Address</h5>
                    <p>House no.123 , street 4, xyz </p>

                    <h5>Account No</h5>
                    <p>Account No # 1234 0454 3434</p>

                    <h5>Email ID</h5>
                    <p>@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8">
              {/* available slot detail */}
              <div className="card card-outline-secondary">
                {/* heading */}
                <div className="card-header">
                  <h5 className=" mb-0 ">available slot details</h5>
                </div>
                {/* body */}
                <div>
                  {/* calender start*/}
                  <div>
                    <div className="month">
                      <ul>
                        <li className="prev">&#10094;</li>
                        <li className="next">&#10095;</li>
                        <li>
                          August
                          <br />
                          <span>2021</span>
                        </li>
                      </ul>
                    </div>

                    <ul className="weekdays">
                      <li>Mo</li>
                      <li>Tu</li>
                      <li>We</li>
                      <li>Th</li>
                      <li>Fr</li>
                      <li>Sa</li>
                      <li>Su</li>
                    </ul>

                    <ul className="days">
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      {/* <li>8</li>
                    <li>9</li>
                    <li>
                      <span className="active">10</span>
                    </li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                    <li>14</li>
                    <li>15</li>
                    <li>16</li>
                    <li>17</li>
                    <li>18</li>
                    <li>19</li>
                    <li>20</li>
                    <li>21</li>
                    <li>22</li>
                    <li>23</li>
                    <li>24</li>
                    <li>25</li>
                    <li>26</li>
                    <li>27</li>
                    <li>28</li>
                    <li>29</li>
                    <li>30</li>
                    <li>31</li> */}
                    </ul>
                  </div>
                  {/* calander end */}

                  <h5 className=" mb-0 pl-3 pt-3">Available slots </h5>
                  <div className="available-slot p-2">
                    <p>9:00 am</p>
                    <p>9:30 am</p>
                    <p>10:00 am</p>
                    <p>10:30 am</p>
                    <p>11:00 am</p>
                    <p>11:30 am</p>
                    <p>12:00 pm</p>
                    <p>12:30 pm</p>
                    <p>1:00 pm</p>
                    <p className="active">1:30 pm</p>
                    <p>2:00 pm</p>
                    <p>2:30 pm</p>
                    <p>3:00 pm</p>
                    <p className="active">3:30 pm</p>
                    <p>4:00 pm</p>
                    <p>4:30 pm</p>
                    <p>5:00 pm</p>
                    <p className="active">5:30 pm</p>
                    <p>6:00 pm</p>
                    <p>6:30 pm</p>
                    <p>7:00 pm</p>
                  </div>
                </div>
              </div>

              {/* customer reviews */}
              <div className="card card-outline-secondary mt-2">
                {/* heading */}
                <div className="card-header">
                  <h5 className=" mb-0 ">Customer Reviews</h5>
                </div>
                {/* body */}
                <div className="artist-customer-reviews p-2">
                  {/* review here 1 */}
                  <div className="row ">
                    <div className="col-10 customer-review-info">
                      <img src={reviewpic} alt="profile" />
                      <span>Sarah Doe</span>
                      <p>Awesome ! Highly recommended</p>
                    </div>
                    <div className="col-2 customer-review-rating">
                      <span>3.5</span>
                      <img src={rated} alt="rating" />
                    </div>
                  </div>
                  {/* reviews end*/}

                  {/* review here 2*/}
                  <div className="row ">
                    <div className="col-10 customer-review-info">
                      <img src={reviewpic} alt="profile" />
                      <span>Sarah Doe</span>
                      <p>Awesome ! Highly recommended</p>
                    </div>
                    <div className="col-2 customer-review-rating">
                      <span>3.5</span>
                      <img src={rated} alt="rating" />
                    </div>
                  </div>
                  {/* reviews end*/}

                  {/* review here 3 */}
                  <div className="row ">
                    <div className="col-10 customer-review-info">
                      <img src={reviewpic} alt="profile" />
                      <span>Sarah Doe</span>
                      <p>Awesome ! Highly recommended</p>
                    </div>
                    <div className="col-2 customer-review-rating">
                      <span>3.5</span>
                      <img src={rated} alt="rating" />
                    </div>
                  </div>
                  {/* reviews end*/}
                  {/* review here 4 */}
                  <div className="row ">
                    <div className="col-10 customer-review-info">
                      <img src={reviewpic} alt="profile" />
                      <span>Sarah Doe</span>
                      <p>Awesome ! Highly recommended</p>
                    </div>
                    <div className="col-2 customer-review-rating">
                      <span>3.5</span>
                      <img src={rated} alt="rating" />
                    </div>
                  </div>
                  {/* reviews end*/}
                  {/* review here 5 */}
                  <div className="row ">
                    <div className="col-10 customer-review-info">
                      <img src={reviewpic} alt="profile" />
                      <span>Sarah Doe</span>
                      <p>Awesome ! Highly recommended</p>
                    </div>
                    <div className="col-2 customer-review-rating">
                      <span>3.5</span>
                      <img src={rated} alt="rating" />
                    </div>
                  </div>
                  {/* reviews end*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* job post */}
        <div className="ml-3 mr-3 mb-2">
          <div className="container-fluid mt-2  job-post">
            <div className="row">
              <div className="col-12">
                <div className="job-post-head">
                  <div>
                    {/* <span className="jobs-count">20 </span> */}
                    <span>Job Done</span>
                  </div>
                  <div>
                    {" "}
                    <span>Total Job Done</span>
                    <span className="jobs-count pl-2">150 </span>
                  </div>
                </div>
                {/* table for recent activity*/}
                <table className="table table-striped">
                  <thead>
                    {/* table list */}
                    <tr>
                      <th>No</th>
                      <th>Order ID</th>
                      <th>Service ID</th>
                      <th>Amount</th>
                      <th>Client's Name</th>
                      <th>Location</th>
                      <th>Date/time</th>
                      <th>Payment</th>
                      <th>Commission</th>
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
                      <td className="job-post-btn-status">
                        <button className="mr-2 approve">Paid</button>
                      </td>
                      <td>12%</td>
                    </tr>
                    {/* table body item1 end */}
                  </tbody>
                </table>
                {/* table end */}
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio section start */}
        <div className="ml-3 mr-3 mt-2">
          <div className="card card-outline-secondary">
            {/* heading */}
            <div className="card-header">
              <h3 className=" mb-0 ">portfolio</h3>
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
                          <PortfolioItem />
                          <PortfolioItem />
                          <PortfolioItem />
                          <PortfolioItem />
                        </div>
                        {/* </div> */}
                      </div>
                      {/* second round */}
                      <div className="carousel-item">
                        {/* <div className="d-none d-lg-block"> */}
                        <div className="slide-box">
                          {/* items box here  start*/}
                          <PortfolioItem />
                          <PortfolioItem />
                          <PortfolioItem />
                          <PortfolioItem />

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
        {/* portfolio section end */}
      </div>
    </div>
  );
}
