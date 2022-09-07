import { NavLink } from "react-router-dom";
import logo from "../../../../assets/image/nav/logo.png";

export default function LogoWrapper() {
  return (
    <div className="Header__FlexItem">
      <div className="Header__Logo">
        <NavLink to={"/"} className="Header__LogoLink">
          <img
            className="Header__LogoImage"
            src={logo}
            width="155"
            style={{ height: "61px" }}
            alt="Nazca"
          />
        </NavLink>
      </div>
    </div>
  );
}
