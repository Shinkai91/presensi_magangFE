import React, { useState } from "react"
import imageCon from "../Assets/balaikota.jpg"
import user from "../Components/Assets/person.png"
import penugasan from "../Assets/image_Buat Penugasan.svg"
import peserta from "../Assets/image_Peserta magang.svg"
import statistik from "../Assets/image_Statistik.svg"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "../Components/SideBar/Style.css"
import './Homestyle.css'

const Homepage = () => {

  const [showNav, setShowNav] = useState(true);

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
              alt="Clue Mediator"
            />
          </div>
        </header>
        <div className={`l-navbar${showNav ? " show" : ""}`}>
          <nav className="nav">
            <div>
              <a
                href="https://cluemediator.com"
                target="_blank"
                className="nav_logo"
              >
                <i className="bi bi-alexa nav_logo-icon" />{" "}
                <span className="nav_logo-name">Clue Mediator</span>
              </a>
              <div className="nav_list">
                <a
                  href="https://cluemediator.com"
                  target="_blank"
                  className="nav_link"
                >
                  <i className="bi bi-people nav_icon" />
                  <span className="nav_name">Users</span>
                </a>
                <a
                  href="https://cluemediator.com"
                  target="_blank"
                  className="nav_link"
                >
                  <i className="bi bi-person-check nav_icon" />
                  <span className="nav_name">Role</span>
                </a>
              </div>
            </div>
            <a
              href="https://cluemediator.com"
              target="_blank"
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
              <img src={imageCon} alt='' />
            </div>
            <div className="account-info-container">
              <div className="info-box">
                <div className="user-info">
                  <h2>Nama: John Doe</h2>
                  <div className="contact-info">
                    <p>Nomor Telepon: 123-456-7890</p>
                    <p>Email: john.doe@example.com</p>
                  </div>
                </div>
              </div>
              <div className='space'></div>
              <div className="user-image">
                <img src={user} alt="" />
              </div>
            </div>
            <div className="action-buttons">
              <a href="/peserta">
                <img src={peserta} alt="Peserta" />
                <span>Peserta</span>
              </a>
              <a href="/penugasan">
                <img src={penugasan} alt="Penugasan" />
                <span>Penugasan</span>
              </a>
              <a href="/statistik">
                <img src={statistik} alt="Statistik" />
                <span>Statistik</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;