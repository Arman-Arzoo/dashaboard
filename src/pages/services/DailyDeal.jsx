import "./dailydeal.css";
import Search from "../../components/home/search/search";
import { Link } from "react-router-dom";
import DealOffer from "../../components/services/DealOffer";

export default function DailyDeal() {
  return (
    <div className="dailydeal">
      <Search />
      <span style={{ color: "#7A7A7A" }} className="pl-1">
        Services/Deals
      </span>
      <div className="container-fluid pt-3 deal-container">
        <div className="row">
          <div className="col-4">
            {/* template */}
            <div className="customerDetails  ">
              {/* card */}
              <div className="card card-outline-secondary ">
                {/* heading */}
                <div className="card-header">
                  <h3 className=" mb-0 ">Ongoing deal</h3>
                </div>
                {/* body */}
                <div style={{ display: "flex" }}>
                  {/* card for ongoing deals start */}
                  <DealOffer />
                  <DealOffer />
                  {/* card for ongoing deals end */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-8">
            {/* template */}
            <div className="customerDetails">
              {/* card */}
              <div className="card card-outline-secondary">
                {/* heading */}
                <div className="card-header">
                  <h3 className=" mb-0 ">All Customers</h3>
                </div>
                {/* body */}
                <div>body</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Deal pakages start  */}

      {/* template */}
      <div className="customerDetails pt-5">
        {/* card */}
        <div className="card card-outline-secondary">
          {/* heading */}
          <div className="card-header">
            <h3 className=" mb-0 ">Deal Packages</h3>
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
                      <div className="d-none d-lg-block">
                        <div className="slide-box">
                          <DealOffer />
                          <DealOffer />
                          <DealOffer />
                          <DealOffer />
                          <DealOffer />
                        </div>
                      </div>
                    </div>
                    {/* second round */}
                    <div className="carousel-item">
                      <div className="d-none d-lg-block">
                        <div className="slide-box">
                          {/* items box here  start*/}
                          <DealOffer />
                          <DealOffer />
                          <DealOffer />
                          <DealOffer />
                          <DealOffer />
                          {/* items box end */}
                        </div>
                      </div>
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
                    ></span>
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
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            {/* carousel data end here */}
          </div>
        </div>
      </div>
    </div>
  );
}
