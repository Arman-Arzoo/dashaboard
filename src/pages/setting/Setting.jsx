import "./setting.css";

export default function Setting() {
  return (
    <div className="setting">
      {/* template */}
      <div className="customerDetails">
        {/* card */}
        <div className="card card-outline-secondary">
          {/* heading */}
          <div className="card-header">
            <h3 className=" mb-0 ">Settings</h3>
          </div>
          {/* body */}
          <div className="setting-div">
            <div className="setting-sidebar">
            <div className="setting-wrapper">
                 setting item
            </div>
            </div>
            <div className="setting-content">setting content</div>
          </div>
        </div>
      </div>
    </div>
  );
}
