import React from "react";
import userImage from "../Assets/person.png";
import logo from "../../Assets/diskominfo.png";
import "../Dashboard/Dashboard.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="user-info">
        <img src={userImage} alt="Profile" className="user-image" />
        <div className="user-details">
          <div className="user-name">Nama Pengguna</div>
          <div className="user-role">Role Pengguna</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;