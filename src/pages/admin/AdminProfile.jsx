import React from "react";
import Search from "../../components/home/search/search";
import "./adminprofile.css";
import pic from "../admin/adminpic.png";
import spic from "../admin/servicepic.png";
export default function AdminProfile() {
  return (
    <div className="admin">
      <Search />
      <span style={{ color: "#7A7A7A" }} className="pl-1">
        admin/admin Profile
      </span>

      <div className="card card-outline-secondary">
        <div className="p-3">
          <div className="row">
            {/* profile pic and info */}
            <div className="col-6 pt-5 artist-profile-detail-div">
              <img className="img" src="" alt="" />
              <div className=" pl-4">
                <h4>Darcel Ballentine</h4>

                <p className="pt-2">
                  <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
                  cameron@gmail.com
                </p>
                <p>
                  {" "}
                  <i class="fa fa-map-marker" aria-hidden="true"></i> 4517
                  Washington Ave. Manchester, Kentucky 39495
                </p>
                <p>
                  <i class="fa fa-phone" aria-hidden="true"></i> (123)242-2134
                </p>
                <i class="fa fa-trash-o float-right" aria-hidden="true"></i>
              </div>
            </div>
            {/* map on route detail */}
            <div className="col-6 ">
              <div className="admin-profile-most-recent-activity ">
                {/* heading */}
                <div className="card-header bg-white artist-card-header-info">
                  <h5 className=" mb-0 ">Most Recent Activity</h5>
                </div>
                {/* body */}
                <div className="p-4">
                  <h5>New Artist Added</h5>
                  <div className="admin-most-recent-activity">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img className="img" src={pic} alt="" />
                      <div>
                        <p>Tina Fox</p>
                        <p>(123)242-2134</p>
                        <p>tinafox@gmail.com</p>
                      </div>
                    </div>
                    <p>view</p>
                  </div>

                  <h5>New Service Added</h5>
                  <div className="admin-most-recent-activity">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img className="simg" src={spic} alt="" />
                      <div>
                        <p>Acrylic paint and reshape </p>
                        <p>$42</p>
                      </div>
                    </div>
                    <p>view</p>
                  </div>

                  <h5 className="pt-2">Transfered Amount</h5>
                  <div className="admin-most-recent-activity">
                    <div>
                      <h6>Tina Fox</h6>
                      <div>
                        <p>Acrylic paint and reshape </p>
                        <p>$42</p>
                      </div>
                    </div>
                    <p>view</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* schedule  */}
        <div className="p-3">
          <div className="card card-outline-secondary">
            {/* heading */}
            <div className="card-header">
              <h3 className=" mb-0 ">schedule </h3>
            </div>
            {/* body */}
            <div>
              <div className="p-3 calender-schedule">
                <button className="btn">Today</button>
                <button className="btn ml-3">Week</button>
                <button className="btn ml-3">Month</button>
              </div>
              <div className="row">
                <div className="col-3">
                  {/* calender start*/}
                  <div>
                    <div class="month">
                      <ul>
                        <li class="prev">&#10094;</li>
                        <li class="next">&#10095;</li>
                        <li>
                          August
                          <br />
                          <span>2021</span>
                        </li>
                      </ul>
                    </div>

                    <ul class="weekdays">
                      <li>Mo</li>
                      <li>Tu</li>
                      <li>We</li>
                      <li>Th</li>
                      <li>Fr</li>
                      <li>Sa</li>
                      <li>Su</li>
                    </ul>

                    <ul class="days">
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                      <li>
                        <span>10</span>
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
                      <li>31</li>
                    </ul>
                  </div>
                  {/* calander end */}
                </div>
                <div className="col-9">
                  {/* detail calender start */}
                  <div class="container-fluid">
                    <header>
                      <h5 class="display-8 mb-4 ">August</h5>
                      <p>Tasks</p>
                      <small>
                        Amount Transfer, Add new Service, Candidate Interview
                      </small>
                      <div class="row d-none d-sm-flex p-1 border">
                        <h5 class="col-sm p-1 text-center">Sunday</h5>
                        <h5 class="col-sm p-1 text-center">Monday</h5>
                        <h5 class="col-sm p-1 text-center">Tuesday</h5>
                        <h5 class="col-sm p-1 text-center">Wednesday</h5>
                        <h5 class="col-sm p-1 text-center">Thursday</h5>
                        <h5 class="col-sm p-1 text-center">Friday</h5>
                        <h5 class="col-sm p-1 text-center">Saturday</h5>
                      </div>
                    </header>
                    <div class="row border border-right-0 border-bottom-0">
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                        <h5 class="row align-items-center">
                          <span class="date col-1">29</span>
                          <small class="col d-sm-none text-center text-muted">
                            Sunday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                        <h5 class="row align-items-center">
                          <span class="date col-1">30</span>
                          <small class="col d-sm-none text-center text-muted">
                            Monday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                        <h5 class="row align-items-center">
                          <span class="date col-1">31</span>
                          <small class="col d-sm-none text-center text-muted">
                            Tuesday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">1</span>
                          <small class="col d-sm-none text-center text-muted">
                            Wednesday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">2</span>
                          <small class="col d-sm-none text-center text-muted">
                            Thursday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate bg-dark">
                        <h5 class="row align-items-center">
                          <span class="date col-1 text-danger ">3</span>
                          <small class="col d-sm-none text-center text-muted">
                            Friday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <a
                          class="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small  text-white"
                          title="Test Event 1"
                        >
                          create Deal
                        </a>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">4</span>
                          <small class="col d-sm-none text-center text-muted">
                            Saturday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="w-100"></div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">5</span>
                          <small class="col d-sm-none text-center text-muted">
                            Sunday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">6</span>
                          <small class="col d-sm-none text-center text-muted">
                            Monday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">7</span>
                          <small class="col d-sm-none text-center text-muted">
                            Tuesday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate bg-dark">
                        <h5 class="row align-items-center">
                          <span class="date col-1 text-danger">8</span>
                          <small class="col d-sm-none text-center text-muted">
                            Wednesday
                          </small>
                          <span class="col-1"></span>
                        </h5>

                        <a
                          class="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small  text-white"
                          title="interview"
                        >
                          Interview
                        </a>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">9</span>
                          <small class="col d-sm-none text-center text-muted">
                            Thursday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">10</span>
                          <small class="col d-sm-none text-center text-muted">
                            Friday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">11</span>
                          <small class="col d-sm-none text-center text-muted">
                            Saturday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="w-100"></div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">12</span>
                          <small class="col d-sm-none text-center text-muted">
                            Sunday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">13</span>
                          <small class="col d-sm-none text-center text-muted">
                            Monday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">14</span>
                          <small class="col d-sm-none text-center text-muted">
                            Tuesday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">15</span>
                          <small class="col d-sm-none text-center text-muted">
                            Wednesday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">16</span>
                          <small class="col d-sm-none text-center text-muted">
                            Thursday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">17</span>
                          <small class="col d-sm-none text-center text-muted">
                            Friday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">18</span>
                          <small class="col d-sm-none text-center text-muted">
                            Saturday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="w-100"></div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">19</span>
                          <small class="col d-sm-none text-center text-muted">
                            Sunday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate bg-dark ">
                        <h5 class="row align-items-center">
                          <span class="date col-1 text-danger">20</span>
                          <small class="col d-sm-none text-center text-muted">
                            Monday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <a
                          class="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small  text-white"
                          title="Test Event with Super Duper Really Long Title"
                        >
                          Top Artist List
                        </a>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">21</span>
                          <small class="col d-sm-none text-center text-muted">
                            Tuesday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">22</span>
                          <small class="col d-sm-none text-center text-muted">
                            Wednesday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">23</span>
                          <small class="col d-sm-none text-center text-muted">
                            Thursday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">24</span>
                          <small class="col d-sm-none text-center text-muted">
                            Friday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">25</span>
                          <small class="col d-sm-none text-center text-muted">
                            Saturday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="w-100"></div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">26</span>
                          <small class="col d-sm-none text-center text-muted">
                            Sunday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">27</span>
                          <small class="col d-sm-none text-center text-muted">
                            Monday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">28</span>
                          <small class="col d-sm-none text-center text-muted">
                            Tuesday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">29</span>
                          <small class="col d-sm-none text-center text-muted">
                            Wednesday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                        <h5 class="row align-items-center">
                          <span class="date col-1">30</span>
                          <small class="col d-sm-none text-center text-muted">
                            Thursday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                        <h5 class="row align-items-center">
                          <span class="date col-1">1</span>
                          <small class="col d-sm-none text-center text-muted">
                            Friday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                        <h5 class="row align-items-center">
                          <span class="date col-1">2</span>
                          <small class="col d-sm-none text-center text-muted">
                            Saturday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="w-100"></div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                        <h5 class="row align-items-center">
                          <span class="date col-1">3</span>
                          <small class="col d-sm-none text-center text-muted">
                            Sunday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                        <h5 class="row align-items-center">
                          <span class="date col-1">4</span>
                          <small class="col d-sm-none text-center text-muted">
                            Monday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                        <h5 class="row align-items-center">
                          <span class="date col-1">5</span>
                          <small class="col d-sm-none text-center text-muted">
                            Tuesday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                        <h5 class="row align-items-center">
                          <span class="date col-1">6</span>
                          <small class="col d-sm-none text-center text-muted">
                            Wednesday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                        <h5 class="row align-items-center">
                          <span class="date col-1">7</span>
                          <small class="col d-sm-none text-center text-muted">
                            Thursday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                        <h5 class="row align-items-center">
                          <span class="date col-1">8</span>
                          <small class="col d-sm-none text-center text-muted">
                            Friday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                      <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                        <h5 class="row align-items-center">
                          <span class="date col-1">9</span>
                          <small class="col d-sm-none text-center text-muted">
                            Saturday
                          </small>
                          <span class="col-1"></span>
                        </h5>
                        <p class="d-sm-none">No events</p>
                      </div>
                    </div>
                  </div>
                  {/* detail calender end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
