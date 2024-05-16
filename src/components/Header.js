import "./header.css";
import "../app.css";

import MenuIcon from "@mui/icons-material/Menu";
export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="header-up">
          <div>
            <span className="logo">HARBOUR.SPACE</span>
          </div>

          <MenuIcon sx={{ color: "white" }} />
        </div>
      </div>
      <div className="apply-button">Apply Now</div>
    </div>
  );
}
