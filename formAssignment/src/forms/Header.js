import React from "react";
import Logo from "../assets/logo.png";
import "./Style.css";

export default function Header() {
  return (
    <div class="HeaderLogoWrapper">
      <img src={Logo} alt="logo" />
    </div>
  );
}
