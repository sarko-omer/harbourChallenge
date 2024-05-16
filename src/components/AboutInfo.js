import "./aboutinfo.css";
export default function AboutInfo() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="aboutinfo">
        <div className="about-info-right">
          <div class="parent">
            <img
              className="image1"
              src={require("../assets/images/Pattern.png")}
              alt="logo"
            />
            <img
              className="image2"
              src={require("../assets/images/Group-21.png")}
              alt="logo"
            />
          </div>
        </div>
        <div className="about-info-left">
          <span className="title">
            About the
            <br /> apprenticeship
          </span>{" "}
          <p className="paragraph">
            Our scholarships are designed to give talented and driven young
            people from any background access to top-class education, experience
            and network. We offer a fully-funded master's degree alongside an
            apprenticeship and a guaranteed job upon graduation.
          </p>
        </div>
      </div>
    </div>
  );
}
