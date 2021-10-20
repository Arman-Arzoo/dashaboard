import React from "react";
import "./artistlist.css";
import { Link } from "react-router-dom";
import Search from "../../home/search/search";
import Pagination from "../customers/Pagination";
import apic from "../artists/a.png";
import p from "../artists/g.jpg";
import s from "../artists/s.png";
import trash from "../artists/trash.png";

export default function ArtistsList() {
  return (
    <div>
      {/* template */}
      <div className="customerDetails">
        <Search />
        <span style={{ color: "#7A7A7A" }} className="pl-1">
          users/artists
        </span>
        {/* card */}
        <div className="card card-outline-secondary mt-2">
          {/* heading */}
          <div
            className="card-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h3 className=" mb-0 ">List Of All artist</h3>
            <button className="btn-add-artist">
              <i className="fa fa-plus" aria-hidden="true"></i>
              <span>Add new Artist</span>
            </button>
          </div>
          {/* body */}
          <div className="artist-card-body">
            {/* artist card start */}
            <div className="card m-4 artistlist">
              <img className="card-img-top" src={apic} alt="Card" />
              {/* trash icon on left top */}
              <span className="toptrash">
                <img src={trash} alt="" />
              </span>
              {/* card-body */}
              <div className="card-body artist">
                <img src={p} alt="" className="artist-profile" />
                <p className="card-title text-center mt-3 artist-name">
                  Jenny Wilson
                </p>
                <span className="arating mb-2">
                  <img src={s} alt="" />
                  <img src={s} alt="" />
                  <img src={s} alt="" />
                  <img src={s} alt="" />
                  <img src={s} alt="" />
                </span>
                <p className="card-text artist-dec ">
                  Expert in Acrylic and French Manicure
                </p>
                <span>Jobs Done</span>
                <span className="float-right">Working Since</span>
                <br />
                <span className="ml-4 num">20</span>
                <span className="float-right num mr-5">2019</span>
                <p className="text-center para">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span>(123)242-2134</span>
                </p>

                <Link to="#" className="btn btn-artist-info ">
                  View More
                </Link>
              </div>
            </div>
            {/* artist card end */}

            {/* artist card start */}
            <div className="card m-4 artistlist">
              <img className="card-img-top" src={apic} alt="Card" />
              {/* trash icon on left top */}
              <span className="toptrash">
                <img src={trash} alt="" />
              </span>
              <div className="card-body artist">
                <img src={p} alt="" className="artist-profile" />
                <p className="card-title text-center mt-3 artist-name">
                  Jenny Wilson
                </p>
                <span className="arating mb-2">
                  <img src={s} alt="" />
                  <img src={s} alt="" />
                  <img src={s} alt="" />
                  <img src={s} alt="" />
                  <img src={s} alt="" />
                </span>
                <p className="card-text artist-dec ">
                  Expert in Acrylic and French Manicure
                </p>
                <span>Jobs Done</span>
                <span className="float-right">Working Since</span>
                <br />
                <span className="ml-4 num">20</span>
                <span className="float-right num mr-5">2019</span>
                <p className="text-center para">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span>(123)242-2134</span>
                </p>

                <Link to="#" className="btn btn-artist-info ">
                  View More
                </Link>
              </div>
            </div>
            {/* artist card end */}

            {/* artist card start */}
            <div className="card m-4 artistlist">
              <img className="card-img-top" src={apic} alt="Card" />
              {/* trash icon on left top */}
              <span className="toptrash">
                <img src={trash} alt="" />
              </span>
              <div className="card-body artist">
                <img src={p} alt="" className="artist-profile" />

                <p className="card-title text-center mt-3 artist-name">
                  Jenny Wilson
                </p>
                <span className="arating mb-2">
                  <img src={s} alt="" />
                  <img src={s} alt="" />
                  <img src={s} alt="" />
                  <img src={s} alt="" />
                  <img src={s} alt="" />
                </span>
                <p className="card-text artist-dec ">
                  Expert in Acrylic and French Manicure
                </p>
                <span>Jobs Done</span>
                <span className="float-right">Working Since</span>
                <br />
                <span className="ml-4 num">20</span>
                <span className="float-right num mr-5">2019</span>
                <p className="text-center para">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span>(123)242-2134</span>
                </p>

                <Link to="#" className="btn btn-artist-info ">
                  View More
                </Link>
              </div>
            </div>
            {/* artist card end */}

            {/* artist card start */}
            <div className="card m-4 artistlist">
              <img className="card-img-top" src={apic} alt="Card" />
              {/* trash icon on left top */}
              <span className="toptrash">
                <img src={trash} alt="" />
              </span>
              <div className="card-body artist">
                <img src={p} alt="" className="artist-profile" />
                <p className="card-title text-center mt-3 artist-name">
                  Jenny Wilson
                </p>
                <span className="arating mb-2">
                  <img src={s} alt="" />
                  <img src={s} alt="" />
                  <img src={s} alt="" />
                  <img src={s} alt="" />
                  <img src={s} alt="" />
                </span>
                <p className="card-text artist-dec ">
                  Expert in Acrylic and French Manicure
                </p>
                <span>Jobs Done</span>
                <span className="float-right">Working Since</span>
                <br />
                <span className="ml-4 num">20</span>
                <span className="float-right num mr-5">2019</span>
                <p className="text-center para">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span>(123)242-2134</span>
                </p>

                <Link to="#" className="btn btn-artist-info ">
                  View More
                </Link>
              </div>
            </div>
            {/* artist card end */}

            {/* artist card start */}
            <div className="card m-4 artistlist">
              <img className="card-img-top" src={apic} alt="Card" />
              {/* trash icon on left top */}
              <span className="toptrash">
                <img src={trash} alt="" />
              </span>
              <div className="card-body artist">
                <img src={p} alt="" className="artist-profile" />
                <p className="card-title text-center mt-3 artist-name">
                  Jenny Wilson
                </p>
                <span className="arating mb-2">
                  <img src={s} alt="" />
                  <img src={s} alt="" />
                  <img src={s} alt="" />
                  <img src={s} alt="" />
                  <img src={s} alt="" />
                </span>
                <p className="card-text artist-dec ">
                  Expert in Acrylic and French Manicure
                </p>
                <span>Jobs Done</span>
                <span className="float-right">Working Since</span>
                <br />
                <span className="ml-4 num">20</span>
                <span className="float-right num mr-5">2019</span>
                <p className="text-center para">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span>(123)242-2134</span>
                </p>

                <Link to="#" className="btn btn-artist-info ">
                  View More
                </Link>
              </div>
            </div>
            {/* artist card end */}

            {/* artist card start */}
            <div className="card m-4 artistlist">
              <img className="card-img-top" src={apic} alt="Card" />
              {/* trash icon on left top */}
              <span className="toptrash">
                <img src={trash} alt="trash" />
              </span>
              <div className="card-body artist">
                <img src={p} alt="" className="artist-profile" />
                <p className="card-title text-center mt-3 artist-name">
                  Jenny Wilson
                </p>
                <span className="arating mb-2">
                  <img src={s} alt="" />
                  <img src={s} alt="" />
                  <img src={s} alt="" />
                  <img src={s} alt="" />
                  <img src={s} alt="" />
                </span>
                <p className="card-text artist-dec ">
                  Expert in Acrylic and French Manicure
                </p>
                <span>Jobs Done</span>
                <span className="float-right">Working Since</span>
                <br />
                <span className="ml-4 num">20</span>
                <span className="float-right num mr-5">2019</span>
                <p className="text-center para">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span>(123)242-2134</span>
                </p>

                <Link to="#" className="btn btn-artist-info ">
                  View More
                </Link>
              </div>
            </div>
            {/* artist card end */}
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
}
