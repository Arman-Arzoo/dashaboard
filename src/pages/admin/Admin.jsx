import { Link } from "react-router-dom";
import Search from "../../components/home/search/search";
import "./admin.css";

export default function Admin() {
  return (
    <div className="admin">
      <Search />
      <span style={{ color: "#7A7A7A" }} className="pl-1">
        users/artists
      </span>
      {/* card */}
      <div className="card card-outline-secondary mt-2 ">
        {/* heading */}
        <div
          className="card-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3 className=" mb-0 ">List Of Admins</h3>
          <button className="btn-add-artist">
            <i className="fa fa-plus" aria-hidden="true"></i>
            <span>Add new Admin</span>
          </button>
        </div>
        {/* body */}
        <div className="artist-card-body pl-4">
          {/* admin table */}
          {/* table for artish detail*/}
          <table class="table table-striped">
            <thead>
              {/* table list */}
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Contact No</th>
                <th>Email Address</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* table body item1 start */}
              <tr>
                <th scope="row">1</th>
                <td>
                  <div className="artist-img">
                    <img src="" alt="" />
                    <span>Wade Warren</span>
                  </div>
                </td>
                <td>02552215</td>
                <td>@gmail.com</td>
                <td>Owner</td>
                <td className="admin-status">
                  Active
                  <div className="admin-active"></div>
                </td>
                <td>
                  <Link to="/admin/admin-profile">view Detail</Link>
                </td>
              </tr>
              {/* table body item1 end */}
              {/* table body item1 start */}
              <tr>
                <th scope="row">1</th>
                <td>
                  <div className="artist-img">
                    <img src="" alt="" />
                    <span>Wade Warren</span>
                  </div>
                </td>
                <td>02552215</td>
                <td>@gmail.com</td>
                <td>Admin</td>
                <td className="admin-status">
                  Active
                  <div className="admin-offline"></div>
                </td>{" "}
                <td>
                  <Link to="/admin/admin-profile">view Detail</Link>
                </td>
              </tr>
              {/* table body item1 end */}
              {/* table body item1 start */}
              <tr>
                <th scope="row">1</th>
                <td>
                  <div className="artist-img">
                    <img src="" alt="" />
                    <span>Wade Warren</span>
                  </div>
                </td>
                <td>02552215</td>
                <td>@gmail.com</td>
                <td>Admin</td>
                <td className="admin-status">
                  Active
                  <div className="admin-active"></div>
                </td>
                <td>
                  <Link to="/admin/admin-profile">view Detail</Link>
                </td>
              </tr>
              {/* table body item1 end */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
