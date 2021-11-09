import React from "react";

export default function Pagination() {
  return (
    <div>
      {/* pagination */}
      <div className=" p-2">
        <span>
          <i className="fa fa-angle-double-left" aria-hidden="true"></i>
          <span className="pl-2">Previous</span>
        </span>
        <span className="float-right">
          <span className="pr-2">Next</span>
          <i className="fa fa-angle-double-right" aria-hidden="true"></i>
        </span>
      </div>

      {/* total entries */}
      <div className="p-2 pt-2">
        <p>
          Showing <span className="font-weight-bold">1</span> to{" "}
          <span className="font-weight-bold">11</span> of{" "}
          <span className="font-weight-bold">150</span> entries
        </p>
      </div>
    </div>
  );
}
