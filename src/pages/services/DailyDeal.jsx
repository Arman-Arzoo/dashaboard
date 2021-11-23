import "./dailydeal.css";
import Search from "../../components/home/search/search";
import { Link } from "react-router-dom";
import DealOffer from "../../components/services/DealOffer";
import apic from "../services/girl.png";
import DealOfferSlide from "../../components/services/DealOfferSlide";

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
                <div style={{ display: "flex" }} className=" pt-3 pb-4">
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

            {/* card */}
            <div className="card card-outline-secondary">
              {/* heading */}

              {/* body */}
              <div>
                {/* add new deal and services */}
                <div className="row">
                  <div className="col-6">
                    <div className="card-header bg-white">
                      <h4 className=" mb-0 ">add new deals</h4>
                    </div>
                    <div className="pl-4 pt-3">
                      {/* form from add new deal */}
                      <form>
                        <div className="form-group">
                          <label htmlFor="input">Select Services</label>
                          <select id="inputState" className="form-control">
                            <option>Acrylic Full</option>
                            <option>...</option>
                            <option>...</option>
                          </select>
                        </div>

                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Start Date</label>
                            <input
                              type="date"
                              className="form-control"
                              id="inputPassword4"
                              placeholder="04/08/2021"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">End date</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword4"
                              placeholder="04/08/2021"
                            />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="inputCity">Add Image</label>

                            <div className="image-upload">
                              {" "}
                              <label htmlFor="file_upload">
                                {" "}
                                <img src="" alt="" className="uploaded-image" />
                                <div className="h-100">
                                  <div className="dplay-tbl">
                                    <div className="dplay-tbl-cell">
                                      {" "}
                                      <i
                                        className="fa fa-camera"
                                        aria-hidden="true"
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                                <input
                                  data-required="image"
                                  type="file"
                                  name="image_name"
                                  id="file_upload"
                                  className="image-input"
                                  data-traget-resolution="image_resolution"
                                />
                              </label>{" "}
                            </div>
                          </div>

                          <div className="form-group col-md-4 pl-3">
                            <label htmlFor="inputZip">Discount</label>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                width: "100%",
                              }}
                            >
                              <input
                                type="text"
                                className="form-control "
                                id="inputZip"
                              />
                              <span className="pl-3 font-weight-bold">%</span>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card mt-3 mr-3">
                      <div className="deal-services pl-2 pt-2 ">
                        <img src={apic} alt="" />
                        <div>
                          <h6>services</h6>
                          <div className="deal-services-info">
                            <div>
                              <p>Acrylic Full</p>
                              <p>French Manicure</p>
                              <p>Reshape Nails</p>
                            </div>
                            <div>
                              <p className="pl-5">$20</p>
                              <p className="pl-5">$10</p>
                              <p className="pl-5">$50</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* recipt total deal price */}
                      <div className="deal-services-total pl-4 pr-4">
                        <div>
                          <p>Total</p>
                          <p>Discount</p>
                          <p className="font-weight-bold text-dark">
                            Discounted Price
                          </p>
                          <p>Start Date</p>
                          <p>End Date</p>
                        </div>
                        <div>
                          <p>$80</p>
                          <p>50%</p>
                          <p className="font-weight-bold text-dark">$40</p>
                          <p>11/8/2021</p>
                          <p>14/8/2021</p>
                        </div>
                      </div>
                    </div>
                    <Link to="#" className="btn btn-dark mt-2 mb-2">
                      Make a new Deal
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Deal pakages start  */}

      {/* template */}
      <div className="customerDetails pt-3 ">
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
                      {/* <div className="d-none d-lg-block"> */}
                      <div className="slide-box ">
                        <DealOfferSlide />
                        <DealOfferSlide />
                        <DealOfferSlide />

                        <DealOfferSlide />
                      </div>
                      {/* </div> */}
                    </div>
                    {/* second round */}
                    <div className="carousel-item">
                      {/* <div className="d-none d-lg-block"> */}
                      <div className="slide-box">
                        {/* items box here  start*/}
                        <DealOfferSlide />
                        <DealOfferSlide />

                        <DealOfferSlide />
                        <DealOfferSlide />
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
                      <i className="fa fa-chevron-left" aria-hidden="true"></i>
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
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
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
    </div>
  );
}
