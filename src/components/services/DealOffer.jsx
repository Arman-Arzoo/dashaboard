import React from "react";
import apic from "../services/dealimg.png";

export default function DealOffer() {
  return (
    <div className="card ongoing-deal m-2  ">
      <img src={apic} alt="Card" />
      <span className="circle-div-right">
        <i className="fa fa-trash-o " aria-hidden="true"></i>
      </span>
      <span className="circle-div-left">
        <i className="fa fa-pencil " aria-hidden="true"></i>
      </span>

      <p className="bg-dark label pl-2">Order no : 23221</p>
      <p className="heading">Weekend Deal</p>
      <p className="sub-heading pt-1">Service</p>
      <p className="normal">Acrylic fill , French manicure , Nail Reshape</p>
      <span className="pt-1">
        <span className="sub-heading ">Originalprice :</span>
        <span className="float-right pr-2">$150</span>
      </span>
      <span className="pt-1">
        <span className="sub-heading">Discount : </span>
        <span className="float-right pr-2">20%</span>
      </span>
      <span className="pt-1">
        <span className="sub-heading">Discounted price : </span>
        <span className="float-right pr-2">$135</span>
      </span>
      <span className="pt-1">
        <span className="sub-heading">Duration : </span>
        <span className="float-right pr-2">8/8/2021 - 11/8/2021</span>
      </span>
      {/* <Link to="#" className="btn btn-primary">
            Go somewhere
          </Link> */}
    </div>
  );
}
