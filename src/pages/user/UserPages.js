import React, { useState, useEffect } from "react"
import axios from 'axios'
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom'
import imageCon from "../Assets/balaikota.jpg"
import logo from "../Assets/diskominfo.png"
// import icon from "../Assets/icon.png"
import penugasan from "../Assets/image_Penugasan.svg"
import data from "../Assets/image_Data Presensi.svg"
import presensi from "../Assets/image_Lakukan Presensi.svg"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "../components/Navigasi/Navbar.css"
import './UserPages.css'


const UserPages = () => {
  const [nama, setNama] = useState('');
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    refreshToken();
  })

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:3000/account/token');
      const decoded = jwt_decode(response.data.token);
      setNama(decoded.nama);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
    }
  }


  return (
    <div className="body-main">
      <div className={`body-area${showNav ? " body-pd" : ""}`}>
        <header className={`header${showNav ? " body-pd" : ""}`}>
          <div className="header_toggle">
            <i
              className={`bi ${showNav ? "bi-x" : "bi-list"}`}
              onClick={() => setShowNav(!showNav)}
            />
          </div>
          <div className="header_img">
            <img
              src="https://reqres.in/img/faces/5-image.jpg"
              alt=""
            />
          </div>
        </header>
        <div className={`l-navbar${showNav ? " show" : ""}`}>
          <nav className="nav">
            <div>
              <a
                href="/userpage"
                target="_self"
                className="nav_logo"
              >
                {showNav ? (
                  <img src={logo} alt="" style={{ width: '150px', height: 'auto' }} />
                ) : (
                  <i className="bi bi-border-width nav_logo-icon" />
                )}
              </a>
              <div className="nav_list">
                <a
                  href="userpage"
                  target="_self"
                  className="nav_link"
                >
                  <i className="bi bi-house nav_icon" />
                  <span className="nav_name">Home</span>
                </a>
                <a
                  href="data"
                  target="_self"
                  className="nav_link"
                >
                  <i className="bi bi-card-checklist nav_icon" />
                  <span className="nav_name">History Presensi</span>
                </a>
                <a
                  href="presensi"
                  target="_self"
                  className="nav_link"
                >
                  <i className="bi bi-camera nav_icon" />
                  <span className="nav_name">Lakukan Presensi</span>
                </a>
                <a
                  href="tugas"
                  target="_self"
                  className="nav_link"
                >
                  <i className="bi bi-list-task nav_icon" />
                  <span className="nav_name">Penugasan</span>
                </a>
              </div>
            </div>
            <a
              href="/"
              target="_self"
              className="nav_link"
            >
              <i className="bi bi-box-arrow-left nav_icon" />
              <span className="nav_name">SignOut</span>
            </a>
          </nav>
        </div>
        <div className="pt-4 pb-4">
          <div className="homepage-container">
            <div className="image-container">
              <img className="background-home" src={imageCon} alt='' />
            </div>
            <div className="account-info-container">
              <div className="info-box">
                <div className="user-info">
                  <p>Selamat Datang,</p>
                  <p>{nama}</p>
                </div>
              </div>
              <div className='space'></div>
              <div className="user-image">
                <img src="https://reqres.in/img/faces/5-image.jpg" alt="" />
              </div>
            </div>
            <div className="action-buttons">
              <a href="/data">
                <img src={data} alt="Peserta" />
                <span>History Presensi</span>
              </a>
              <a href="/presensi">
                <img src={presensi} alt="Penugasan" />
                <span>Penugasan</span>
              </a>
              <a href="/tugas">
                <img src={penugasan} alt="Statistik" />
                <span>Tugas</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPages;