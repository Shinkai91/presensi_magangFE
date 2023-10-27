import React, { useState } from 'react'
import CardList from '../../Components/User/CardList';
import Dates from '../../Assets/Date';
import logo from "../../Assets/diskominfo.png"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "../../Components/SideBar/Navbar.css"


function Tugas() {
  const [showNav, setShowNav] = useState(true);
  const cardData = [
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      deadline: 'Deadline : 1 November 2023'
    },
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      deadline: 'Deadline : 1 November 2023'
    },
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      deadline: 'Deadline : 1 November 2023'
    },
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      deadline: 'Deadline : 1 November 2023'
    },
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      deadline: 'Deadline : 1 November 2023'
    },
    // Tambahkan data kartu lainnya sesuai kebutuhan
  ];

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
                href="/user/homepage"
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
                  href="/user/homepage"
                  target="_self"
                  className="nav_link"
                >
                  <i className="bi bi-house nav_icon" />
                  <span className="nav_name">Home</span>
                </a>
                <a
                  href="/user/presensi/riwayat"
                  target="_self"
                  className="nav_link"
                >
                  <i className="bi bi-list-task nav_icon" />
                  <span className="nav_name">History Presensi</span>
                </a>
                <a
                  href="/user/presensi"
                  target="_self"
                  className="nav_link"
                >
                  <i className="bi bi-camera nav_icon" />
                  <span className="nav_name">Lakukan Presensi</span>
                </a>
                <a
                  href="/user/tugas"
                  target="_self"
                  className="nav_link"
                >
                  <i className="bi bi-card-checklist nav_icon" />
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
        <div className="App">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }} > <Dates /> </div>
          <h1 style={{ marginBottom: "16px" }} >Tugas</h1>
          <CardList cardData={cardData} />
        </div>
      </div>
    </div>
  );
}

export default Tugas