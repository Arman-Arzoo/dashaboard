import "./customerDetail.css";
export default function CustomerDetails() {
  return (
    <div>
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
      <div className="card card-outline-secondary mt-2">
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
                <td>View Detail </td>
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
                <td>View Detail </td>
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
                <td>View Detail </td>
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
                <td>View Detail </td>
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
                <td>View Detail </td>
              </tr>
              {/* row end */}
            </tbody>
          </table>
        </div>
      </div>
      {/* pagination */}
      <div className="pt-2">
        <span>
          <i class="fa fa-angle-double-left" aria-hidden="true"></i> Previous
        </span>
        <span className="float-right">
          Next
          <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        </span>
      </div>

      {/* total entries */}
      <div className="pt-4">
        <p>
          Showing <span>1</span> to <span>11</span> of <span>150</span>entries
        </p>
      </div>
    </div>
  );
}
