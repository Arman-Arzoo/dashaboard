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
          body area

          </div>
          
        </div>
      </div>
    
  );
}
