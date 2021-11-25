import "./booking.css";
import Pagination from "../../components/users/customers/Pagination";
import Search from "../../components/home/search/search";

export default function Booking() {
  return (
    <div className="booking">
      <Search />
      <div>
        <span style={{ color: "#7A7A7A" }} className="pl-1">
          Bookings
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
      <div className="card card-outline-secondary booking__services mt-2 ">
        {/* heading */}
        <div className="card-header">
          <h3 className=" mb-0 ">Booking services</h3>
        </div>
        {/* body */}
        <div>
          {/* table */}
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Order ID</th>
                <th>Client</th>
                <th>Service</th>
                <th>Time</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Location</th>
                <th>Booked Artist</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>234229</td>
                <td>Tina Fax</td>
                <td>Acrylic nail art</td>
                <td>01.00.PM</td>
                <td>8/9/2021</td>
                <td>$8</td>
                <td>House No 113 Block A Street 4 xyz</td>
                <td>Shailnay Cordon</td>
                <td>
                  <span>
                    <div className="circle-booking-edit">
                      <i className="fa fa-pencil" aria-hidden="true"></i>
                    </div>
                  </span>
                  <span>
                    <div className="circle-booking-cross">
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                  </span>
                </td>
              </tr>

              {/* row start */}
              <tr>
                <td>1</td>
                <td>234229</td>
                <td>Tina Fax</td>
                <td>Acrylic nail art</td>
                <td>01.00.PM</td>
                <td>8/9/2021</td>
                <td>$8</td>
                <td>House No 113 Block A Street 4 xyz</td>
                <td>Shailnay Cordon</td>
                <td>
                  <span>
                    <div className="circle-booking-edit">
                      <i className="fa fa-pencil" aria-hidden="true"></i>
                    </div>
                  </span>
                  <span>
                    <div className="circle-booking-cross">
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                  </span>
                </td>
              </tr>
              {/* row end */}

              {/* row start */}
              <tr>
                <td>1</td>
                <td>234229</td>
                <td>Tina Fax</td>
                <td>Acrylic nail art</td>
                <td>01.00.PM</td>
                <td>8/9/2021</td>
                <td>$8</td>
                <td>House No 113 Block A Street 4 xyz</td>
                <td>Shailnay Cordon</td>
                <td>
                  <span>
                    <div className="circle-booking-edit">
                      <i className="fa fa-pencil" aria-hidden="true"></i>
                    </div>
                  </span>
                  <span>
                    <div className="circle-booking-cross">
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                  </span>
                </td>
              </tr>
              {/* row end */}
              {/* row start */}
              <tr>
                <td>1</td>
                <td>234229</td>
                <td>Tina Fax</td>
                <td>Acrylic nail art</td>
                <td>01.00.PM</td>
                <td>8/9/2021</td>
                <td>$8</td>
                <td>House No 113 Block A Street 4 xyz</td>
                <td>Shailnay Cordon</td>
                <td>
                  <span>
                    <div className="circle-booking-edit">
                      <i className="fa fa-pencil" aria-hidden="true"></i>
                    </div>
                  </span>
                  <span>
                    <div className="circle-booking-cross">
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                  </span>
                </td>
              </tr>
              {/* row end */}

              {/* row start */}
              <tr>
                <td>1</td>
                <td>234229</td>
                <td>Tina Fax</td>
                <td>Acrylic nail art</td>
                <td>01.00.PM</td>
                <td>8/9/2021</td>
                <td>$8</td>
                <td>House No 113 Block A Street 4 xyz</td>
                <td>Shailnay Cordon</td>
                <td>
                  <span>
                    <div className="circle-booking-edit">
                      <i className="fa fa-pencil" aria-hidden="true"></i>
                    </div>
                  </span>
                  <span>
                    <div className="circle-booking-cross">
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                  </span>
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
