import "./BottomStickyBar.css";
import Timer from "./Timer";

export default function BottomStickyBar() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#535353",
            }}
          >
            Zeptolab
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "300",
              color: "#535353",
            }}
          >
            Marketing Performance
          </p>
        </div>
        {/* ******** */}
        <div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#535353",
            }}
          >
            Location
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "300",
              color: "#535353",
            }}
          >
            Bangkok
          </p>
        </div>
        {/* ******** */}
        {/* ******** */}
        <div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#535353",
            }}
          >
            Duration
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "300",
              color: "#535353",
            }}
          >
            1 Year Full-Time
          </p>
        </div>
        {/* ******** */}
        {/* ******** */}
        <div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#535353",
            }}
          >
            Start date
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "300",
              color: "#535353",
            }}
          >
            3 Aug 2020
          </p>
        </div>
        {/* ******** */}
        {/* ******** */}
        <div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#535353",
            }}
          >
            Application deadline
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "300",
              color: "#535353",
            }}
          >
            30 June 2020
          </p>
        </div>
        {/* ******** */}
        {/* ******** */}
        <div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#535353",
            }}
          >
            Application Closes in
          </p>
          <Timer
            duration={2 * 24 * 60 * 60 * 1000}
            style={{ fontSize: "16px", fontWeight: "300", color: "#535353" }}
          />
        </div>
        {/* ******** */}
      </div>
    </div>
  );
}
