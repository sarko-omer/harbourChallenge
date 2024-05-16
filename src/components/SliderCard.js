import React from "react";
import "./slidercard.css";

export default function SliderCard() {
  return (
    <div className="slider-card">
      {/* comment */}
      <div className="top-slider">
        <div className="slider-card-content-top">
          <div className="card-content-top-left">
            <div className="first">
              <img src={require("../assets/images/Image.png")} alt="icon" />
            </div>
            <div className="second">
              <h4>Irene Pereyra</h4>
              <p>Interaction Design Fellow '19</p>
            </div>
          </div>
          <div className="card-content-top-right">
            <img src={require("../assets/images/Twitter.png")} alt="icon" />
          </div>
        </div>
      </div>
      <div className="bottom-slider">
        <div className="slider-card-content-bottom">
          <h4>
            This Fellowship was a turning point in my career. I wouldn’t be
            where I am today without the financial support and experienced
            offered through the program.{" "}
          </h4>
          <p>Education · B.A. Visual Design</p>
        </div>
      </div>
    </div>
  );
}
