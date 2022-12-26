import React from "react";
import "./Shop.css";
import pic from "../images/Tinder-Symbol.jpg";
export default function Shop() {
  return (
    <div className="container">
      <h1 className="display-4 text-center">
        Choose your store in <span style={{ color: "green" }}>Dehradun</span>
      </h1>
      <div className="row">
        <div className="col-md-4 box">
          <div className="my-card">
            <div className="img">
              <img src={pic} alt="tinder" />
            </div>
            <div className="info">
              <p className="heading">Shop A</p>
              <p className="content">Delivery Pickup 1.4mi</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 box">
        <div className="my-card">
        <div className="img">
          <img src={pic} alt="tinder" />
        </div>
        <div className="info">
          <p className="heading">Shop B</p>
          <p className="content">Delivery Pickup 1.4mi</p>
        </div>
      </div>
        </div>
        <div className="col-md-4 box">
        <div className="my-card">
        <div className="img">
          <img src={pic} alt="tinder" />
        </div>
        <div className="info">
          <p className="heading">Shop C</p>
          <p className="content">Delivery Pickup 1.4mi</p>
        </div>
      </div>
        </div>
      </div>
      <p style={{ color: "green", margin: "30px 0" }} className="text-center">
        Show all
      </p>
    </div>
  );
}
