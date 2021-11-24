import "./customerDetail.css";
import Pagination from "./Pagination";
import Search from "../../home/search/search";
import { Link } from "react-router-dom";
export default function CustomerDetails() {
  return (
    <div>
      <Search />
      <div>
        <span style={{ color: "#7A7A7A" }} className="pl-1">
          users/customers
        </span>
        <div className="float-right inputfilter">
          <span>show</span>
          <span>
            <input type="text" className="inpEntries " />
          </span>
          <span>Entries</span>
        </div>
      </div>
      {/* card */}
      <div className="card card-outline-secondary mt-2 customer__deatail__table">
        {/* heading */}
        <div className="card-header">
          <h3 className=" mb-0 ">All Customers</h3>
        </div>
        {/* body */}
        <div>
          {/* table */}
          <table className="table table-striped">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Order No</th>
                <th>Time</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Email Address</th>
                <th>Location</th>
                <th>Service Provider</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Tina Fox</td>
                <td>23211233</td>
                <td>01.00.Pm</td>
                <td>8/9/2021</td>
                <td>$20</td>
                <td>TinaFox@gmail.com</td>
                <td>House No 113 Block A Street 4 xyz</td>
                <td>Shailnay Cordon</td>
                <td style={{ display: "flex", alignItems: "center" }}>
                  <Link to="/dashboard/customers/customer-profile">
                    {" "}
                    View Detail{" "}
                  </Link>

                  <i
                    style={{ color: "#FF5050" }}
                    className="fa fa-times"
                    aria-hidden="true"
                  ></i>
                </td>
              </tr>

              {/* row start */}
              <tr>
                <td>2</td>
                <td>Tina Fox</td>
                <td>23211233</td>
                <td>01.00.Pm</td>
                <td>8/9/2021</td>
                <td>$20</td>
                <td>TinaFox@gmail.com</td>
                <td>House No 113 Block A Street 4 xyz</td>
                <td>Shailnay Cordon</td>
                <td style={{ display: "flex", alignItems: "center" }}>
                  <Link to="/dashboard/customers/customer-profile">
                    {" "}
                    View Detail{" "}
                  </Link>

                  <i
                    style={{ color: "#FF5050" }}
                    className="fa fa-times"
                    aria-hidden="true"
                  ></i>
                </td>
              </tr>
              {/* row end */}

              {/* row start */}
              <tr>
                <td>3</td>
                <td>Tina Fox</td>
                <td>23211233</td>
                <td>01.00.Pm</td>
                <td>8/9/2021</td>
                <td>$20</td>
                <td>TinaFox@gmail.com</td>
                <td>House No 113 Block A Street 4 xyz</td>
                <td>Shailnay Cordon</td>
                <td style={{ display: "flex", alignItems: "center" }}>
                  <Link to="/dashboard/customers/customer-profile">
                    {" "}
                    View Detail{" "}
                  </Link>

                  <i
                    style={{ color: "#FF5050" }}
                    className="fa fa-times"
                    aria-hidden="true"
                  ></i>
                </td>
              </tr>
              {/* row end */}

              {/* row start */}
              <tr>
                <td>4</td>
                <td>Tina Fox</td>
                <td>23211233</td>
                <td>01.00.Pm</td>
                <td>8/9/2021</td>
                <td>$20</td>
                <td>TinaFox@gmail.com</td>
                <td>House No 113 Block A Street 4 xyz</td>
                <td>Shailnay Cordon</td>
                <td style={{ display: "flex", alignItems: "center" }}>
                  <Link to="/dashboard/customers/customer-profile">
                    {" "}
                    View Detail{" "}
                  </Link>

                  <i
                    style={{ color: "#FF5050" }}
                    className="fa fa-times"
                    aria-hidden="true"
                  ></i>
                </td>
              </tr>
              {/* row end */}

              {/* row start */}
              <tr>
                <td>5</td>
                <td>Tina Fox</td>
                <td>23211233</td>
                <td>01.00.Pm</td>
                <td>8/9/2021</td>
                <td>$20</td>
                <td>TinaFox@gmail.com</td>
                <td>House No 113 Block A Street 4 xyz</td>
                <td>Shailnay Cordon</td>
                <td style={{ display: "flex", alignItems: "center" }}>
                  <Link to="/dashboard/customers/customer-profile">
                    {" "}
                    View Detail{" "}
                  </Link>

                  <i
                    style={{ color: "#FF5050" }}
                    className="fa fa-times"
                    aria-hidden="true"
                  ></i>
                </td>
              </tr>
              {/* row end */}
            </tbody>
          </table>
        </div>
        {/* pagination */}
        <Pagination />
      </div>
    </div>
  );
}
