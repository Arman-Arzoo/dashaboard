import "./clientInfoSection.css";
import User from "../../../components/sidebar/icons/User.png";
export default function ClientInfoSection() {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-6 ">
          <div className="row">
            {/* client div start */}
            <div className="col-6  clients-info-home ">
              <div className="clients-info-home__header">
                <img src={User} alt="user" />
                <span>Clients</span>
              </div>

              <center>
                <h1>250</h1>
              </center>
              <p>20 New Clients Today</p>
            </div>
            {/* client div end */}
            {/* artist div start */}
            <div className="col-5  clients-info-home ml-4">
              <div className="clients-info-home__header">
                <img src={User} alt="user" />
                <span>Artist</span>
              </div>

              <center>
                <h1>250</h1>
              </center>
              <p>20 New comers</p>
            </div>
            {/* artist div end */}
          </div>
          <div className="row">
            {/* booking div start */}
            <div className="col-6  clients-info-home mt-4">
              <div className="clients-info-home__header">
                <img src={User} alt="user" />
                <span>Booking</span>
              </div>

              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div>
                  <span className="today ">20</span>
                  <span className="prebooking leftsideMove">10</span>
                  <span className="cancelled leftsideMove">20</span>
                </div>

                <div>
                  <span className="booking-text">Today</span>
                  <span className="booking-text">Prebooking</span>
                  <span className="booking-text ">Cancelled</span>
                </div>
              </div>
            </div>
            {/* booking div end */}
            {/* booking div start */}
            <div className="col-5  clients-info-home mt-4 ml-4">
              <div className="clients-info-home__header">
                <img src={User} alt="user" />
                <span>Job Posts</span>
              </div>
              <center>
                <h1>40</h1>
              </center>
              <p>10 New Today</p>
            </div>
            {/* booking div end */}
          </div>
        </div>
        {/* artist live location */}
        <div className="col-6 artist-live-location">
          <div className="artist-head">
            <span>Artist live location</span>
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </div>

          <hr />
          <div>
            <iframe
              width="100%"
              height="250"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              title="artist-map"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
