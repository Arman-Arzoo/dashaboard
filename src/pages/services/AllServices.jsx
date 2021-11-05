import React from "react";
import Search from "../../components/home/search/search";
import Pagination from "../../components/users/customers/Pagination";
import "./allservice.css";

export default function AllServices() {
  return (
    <div className="allservices">
      <Search />
      {/* breedcamp */}
      <div>
        <span style={{ color: "#7A7A7A" }} className="pl-1">
          Services {">"} all services
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
            <h3 className=" mb-0 ">All Services</h3>
          </div>
          {/* body */}
          <div className="all-services-list">
            {/* create a table for list of sevices */}
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Service ID</th>
                  <th>Service</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* item row 1 */}
                <tr>
                  <td>1</td>
                  <td>23429</td>
                  <td>Acrylic Nail art</td>
                  <td>$20</td>
                  <td>
                    <span>
                      <div className="circle-services-edit">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                      </div>
                    </span>
                    <span>
                      <div className="circle-services-cross">
                        <i class="fa fa-times" aria-hidden="true"></i>
                      </div>
                    </span>
                  </td>
                </tr>
                {/* item row  */}
                <tr>
                  <td>2</td>
                  <td>23429</td>
                  <td>Acrylic Nail art</td>
                  <td>$20</td>
                  <td>
                    <span>
                      <div className="circle-services-edit">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                      </div>
                    </span>
                    <span>
                      <div className="circle-services-cross">
                        <i class="fa fa-times" aria-hidden="true"></i>
                      </div>
                    </span>
                  </td>
                </tr>
                {/* item row 3*/}
                <tr>
                  <td>3</td>
                  <td>23429</td>
                  <td>Acrylic Nail art</td>
                  <td>$20</td>
                  <td>
                    <span>
                      <div className="circle-services-edit">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                      </div>
                    </span>
                    <span>
                      <div className="circle-services-cross">
                        <i class="fa fa-times" aria-hidden="true"></i>
                      </div>
                    </span>
                  </td>
                </tr>
                {/* item row 4 */}
                <tr>
                  <td>4</td>
                  <td>23429</td>
                  <td>Acrylic Nail art</td>
                  <td>$20</td>
                  <td>
                    <span>
                      <div className="circle-services-edit">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                      </div>
                    </span>
                    <span>
                      <div className="circle-services-cross">
                        <i class="fa fa-times" aria-hidden="true"></i>
                      </div>
                    </span>
                  </td>
                </tr>
                {/* item row 5 */}
                <tr>
                  <td>5</td>
                  <td>23429</td>
                  <td>Acrylic Nail art</td>
                  <td>$20</td>
                  <td>
                    <span>
                      <div className="circle-services-edit">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                      </div>
                    </span>
                    <span>
                      <div className="circle-services-cross">
                        <i class="fa fa-times" aria-hidden="true"></i>
                      </div>
                    </span>
                  </td>
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
