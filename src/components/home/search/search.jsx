import "./search.css";
export default function Search() {
  return (
    <div>
      {/* search box start */}
      <div className="form-group has-search   ">
        <span className="fa fa-search form-control-feedback"></span>
        <input type="text" className="form-control" placeholder="Search Here" />
      </div>
      {/* search box end */}
    </div>
  );
}
