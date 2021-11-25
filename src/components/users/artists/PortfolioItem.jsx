import React from "react";
import nail from "../artists/nail.png";
export default function PortfolioItem() {
  return (
    <div className="artist-portfolio-slider-item">
      <h5>Acrylic paint and reshape </h5>
      <img src={nail} alt="" />
      <div className="artist-portfolio-slider-item-info">
        <div>
          <h5>Order ID</h5>
          <p>010242</p>
        </div>
        <div>
          <h5>Service ID</h5>
          <p>010242</p>
        </div>
      </div>
      <h5 className="pl-4">Client Name:</h5>
      <p className="pl-4">Cameron Williamson</p>
    </div>
  );
}
