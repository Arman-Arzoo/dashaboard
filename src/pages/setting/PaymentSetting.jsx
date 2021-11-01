import React from "react";

export default function PaymentSetting() {
  return (
    <div>
      {/* template */}
      <div className="">
        {/* card */}
        <div className="card card-outline-secondary">
          {/* heading */}
          <div className="card-header">
            <h3 className=" mb-0 ">Payment Settings</h3>
          </div>
          {/* body */}
          <div className="p-3 payment-setting">
            <form>
              <div className="form-row pt-4">
                <div className="form-group col-md-12">
                  <label for="selectCard">Select Card</label>
                  <select
                    class="form-control"
                    name=""
                    size="0"
                    id="payment-card"
                  >
                    <option value="v-card">Mastercard</option>
                  </select>
                </div>
              </div>
              <label htmlFor="">Enter Details</label>

              <div className="form-row pt-4 pl-5">
                <div className="form-group col-md-4">
                  <label for="inputsender">CardHolder Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardholderName"
                    placeholder="abc"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputsender">Card Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="CardNumber"
                    placeholder="1234 - 4234 - 3456"
                  />
                </div>
              </div>

              <div className="form-row  pl-5">
                <div className="form-group col-md-4">
                  <label for="inputsender">Expiration Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="expirationDate"
                    placeholder="......."
                  />
                </div>
                <div className="form-group col-md-2">
                  <label for="cvv">CVV</label>
                  <input type="text" className="form-control" id="CardNumber" />
                </div>

                <div>
                  <button className="btn ml-3 ">save Changes</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
