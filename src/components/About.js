import "./about.css";

export default function About() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="about">
        <div className="about-left card-border">
          <div className="left-inside">
            <p className="about-content-title">Scholarship value</p>
            <p className="price-euro">€31,300</p>
            <div className="left-divider"></div>
            <div className="about-left-bootom">
              <div className="about-left-bootom-one">
                <p className="about-content-title">Tuition covered</p>
                <p className="about-content-detail-small">€20,900</p>
              </div>
              <div className="about-left-bootom-two">
                <p className="about-content-title">Remaining</p>
                <p className="about-content-detail-small">€2,000</p>
              </div>
              <div className="about-left-bootom-three">
                <p className="about-content-title">Living stipend</p>
                <p className="about-content-detail-small">
                  €8,400 (€700/month)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="part-divider">
            <div className="about-right-up-left card-border ">
              <div className="about-total-content">
                <p className="about-content-title">Study commitment</p>
                <h3>3 hours / day</h3>
                <div className="right-divider"></div>
                <span className="about-content-detail-small">
                  You will complete 15 modules to graduate. Daily classes are 3
                  hours, plus coursework to complete in your own time.{" "}
                </span>
              </div>
            </div>
            <div className="about-right-up-right card-border ">
              <div className="about-total-content">
                <p className="about-content-title">Work commitment</p>
                <h3>4 hours / day</h3>
                <div className="right-divider"></div>

                <span className="about-content-detail-small">
                  Immerse yourself in the professional world during your
                  apprenticeship. You’ll learn the ropes from the best and get
                  to apply your newly acquired knowledge in the field from day
                  one.{" "}
                </span>
              </div>
            </div>
          </div>
          <div>
            <p className="hr-text"> Graduation</p>
          </div>

          <div className="about-right-bottom card-border ">
            <div className="about-total-content">
              <p className="about-content-title">A full-time contract</p>
              <h3>1 Year / Full-Time</h3>
              <div className="right-divider"></div>
              <span className="about-content-detail-small">
                You’ll be guaranteed a 1 year contract with SCG upon graduation.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
