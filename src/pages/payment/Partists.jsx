import React from "react";
import Search from "../../components/home/search/search";
import "./artists.css";

export default function Partists() {
  const a = "";
  return (
    <div className="partists mt-3">
      <Search />
      <span style={{ color: "#7A7A7A" }} className="pl-1">
        Payments {">"} Artists{" "}
      </span>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-8 artist-payment-div">
            {/* artists table section */}
            <div className="card card-outline-secondary">
              {/* heading */}
              <div className="card-header">
                <h3 className=" mb-0 ">Artist Payments</h3>
              </div>
              {/* body */}
              <div>
                {/* table for artist payment */}
                <table className="table table-striped">
                  <thead>
                    {/* table list */}
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Contact no</th>
                      <th>Amount</th>
                      <th>Card Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* table body item1 start */}
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        <div className="artist-img">
                          <img src={a} alt="" />
                          <span>Wade Warren</span>
                        </div>
                      </td>
                      <td>2566558544</td>
                      <td>$2000</td>

                      <td>8502 98380</td>
                      <td>
                        <button className="btn btn-sm bg-dark text-white">
                          pay
                        </button>
                      </td>
                    </tr>
                    {/* table body item1 end */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-4 make-payment-div">
            {/* make payment div */}
            <div className="card card-outline-secondary">
              {/* heading */}
              <div className="card-header">
                <h3 className=" mb-0 ">Make Payments</h3>
              </div>
              {/* body */}
              <div className="p-3 make-payment-body">
                <div>
                  Date: <span className="pl-2">11/08/2021</span>{" "}
                </div>
                <div className="pt-3">
                  current balance :{" "}
                  <span className="float-right font-weight-bold">$5000</span>
                </div>
                {/* form */}
                <form className="mt-5">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputsender">Sender Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputsender"
                        placeholder="Admin"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputreciever">Reciever Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputreciever"
                        placeholder="Shailny Cordon"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputSaccountno">Sender Account no</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputSaccountno"
                        placeholder="05451454512"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputRaccountno">
                        Reciever account No
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputRaccountNo"
                        placeholder="54546546"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-11">
                      <label htmlFor="payableAmount">Amount</label>
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        <input
                          type="text"
                          className="form-control "
                          id="PayableAmount"
                        />
                        <p className="pl-3"> commission:12%</p>
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-8">
                      <label htmlFor="payableAmount">Payable Amount</label>
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        <input
                          type="text"
                          className="form-control "
                          id="PayableAmount"
                        />
                        <button className="btn ml-4 ">Send</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
