import React from "react";
import "./style.css";
import Logo from "../../assets/logo.png";
import Buttons from "../Buttons/Buttons";
const Header = () => {
  return (
    <section>
      <nav className="navigation">
        <div className="container">
          <div className="image_container">
            <img src={Logo} alt="logo" />
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px", marginRight: "20px" }}>
            <Buttons />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
