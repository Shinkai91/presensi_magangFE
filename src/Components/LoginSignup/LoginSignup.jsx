import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import user_icon from "../Assets/person.png";
import imagelogin from "../../Assets/diskominfo.png";
import PasswordInput from "./PasswordInput";
import "../LoginSignup/LoginSignup.css";

const LoginSignup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState(""); // Default role is "user"
  const [error, setError] = useState("");

  return (
    <div className="login-background">
      <div className="container">
        <div className="header">
          <img src={imagelogin} alt="" />
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <PasswordInput password={password} setPassword={setPassword} />
        </div>
        <div className="role-selection">
          <label>
            <input
              type="radio"
              value="admin"
              checked={selectedRole === "admin"}
              onChange={() => setSelectedRole("admin")}
            />{" "}
            Admin
          </label>
          <label>
            <input
              type="radio"
              value="peserta_magang"
              checked={selectedRole === "peserta_magang"}
              onChange={() => setSelectedRole("peserta_magang")}
            />{" "}
            Peserta Magang
          </label>
        </div>
        <div className="submit-container">
          <div className="submit" >
            Login
          </div>
        </div>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}

export default LoginSignup;