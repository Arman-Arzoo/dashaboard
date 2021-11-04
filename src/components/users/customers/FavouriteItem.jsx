import React from "react";
import rated from "../customers/rated.png";
import pic from "../customers/pic.png";

export default function FavouriteItem() {
  return (
    <div className="favourite-slider-item">
      <img className="img" src={pic} alt="" />
      <h5>Shailny Cordon</h5>
      <img src={rated} alt="" />
      <img src={rated} alt="" />
      <img src={rated} alt="" />
      <img src={rated} alt="" />
      <img src={rated} alt="" />
    </div>
  );
}
