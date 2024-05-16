import "./hero.css";
import "../app.css";

import CustomButton from "../components/CustomButton";
import Timer from "./Timer";
export default function Hero() {
  return (
    <div className="hero">
      <div className="left">
        <img src={require("../assets/images/icon-img.png")} alt="icon" />
        <span className="title">
          Interaction Design
          <br /> Apprenticeship
        </span>
        <p className="paragraph-title">
          A fully funded work-study program to launch
          <br /> your tech career{" "}
        </p>
        <p className="paragraph">
          Harbour.Space has partnered with SCG to empower driven talent and
          eliminate the barriers to accessing exceptional education and career
          opportunities through a Masters Fellowship.{" "}
        </p>
        <div className="position-phrase">
          Position:<span>Marketing Performance</span>
        </div>

        <CustomButton label="Apply Now" width="120px" height="50px" />
      </div>
      <div className="right">
        <div className="top-part">
          <div className="rightpart">
            <img src={require("../assets/images/Logo.png")} alt="logo" />
          </div>
          <div className="leftpart">
            <h4>Powered by:</h4>
            <p>Zeptolab</p>
          </div>
        </div>
        <div className="middle-part card-border">
          <p>Application closes in</p>
          <Timer
            duration={2 * 24 * 60 * 60 * 1000}
            style={{ fontSize: "27px", fontWeight: "300", color: "#535353" }}
          />
        </div>
        <div className="bottom-part card-border">
          <div className="bottom-part-container">
            <div className="loc-dur-sta-end">
              <h4 id="title">Location</h4> <p id="content">Bangkok</p>
            </div>
            <div className="loc-dur-sta-end">
              <h4 id="title">Duration</h4> <p id="content">1 year Full Time</p>
            </div>
            <div className="loc-dur-sta-end">
              <h4 id="title">Start Day</h4> <p id="content">30 June 2020</p>
            </div>
            <div className="loc-dur-sta-end">
              <h4 id="title">End Date</h4> <p id="content">3 Aug 2020</p>
            </div>
          </div>
        </div>
      </div>
      <img src={require("../assets/images/Background.png")} alt="background" />
    </div>
  );
}
