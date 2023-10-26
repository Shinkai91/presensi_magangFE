import React, { useState, useEffect } from 'react';
import './PresensiMagang.css';
import { Link } from 'react-router-dom';
import logo from "../Assets/diskominfo.png"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "../Components/SideBar/Style.css"
import axiosJWT from '../config/axiosJWT';

export const Peserta = () => {
  const [users, setUsers] = useState([]);
  const [showNav, setShowNav] = useState(true);
  const [totalAttendance, setTotalAttendance] = useState(0);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axiosJWT.get('http://localhost:3000/admin/presensi');
      setUsers(response.data.presensi);
      setTotalAttendance(response.data.totalSudahPresensi);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getPresensiBelum = async () => {
    try {
      const response = await axiosJWT.get('http://localhost:3000/admin/presensi/negatif');
      setUsers(response.data.presensi);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
                href="/homepage"
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
                  href="homepage"
                  target="_self"
                  className="nav_link"
                >
                  <i className="bi bi-house nav_icon" />
                  <span className="nav_name">Home</span>
                </a>
                <a
                  href="peserta"
                  target="_self"
                  className="nav_link"
                >
                  <i className="bi bi-person nav_icon" />
                  <span className="nav_name">Peserta</span>
                </a>
                <a
                  href="presensi"
                  target="_self"
                  className="nav_link"
                >
                  <i className="bi bi-person-check nav_icon" />
                  <span className="nav_name">Presensi Magang</span>
                </a>
                <a
                  href="penugasan"
                  target="_self"
                  className="nav_link"
                >
                  <i className="bi bi-list-task nav_icon" />
                  <span className="nav_name">Penugasan</span>
                </a>
                <a
                  href="statistik"
                  target="_self"
                  className="nav_link"
                >
                  <i className="bi bi-bar-chart-line nav_icon" />
                  <span className="nav_name">Statistik</span>
                </a>
              </div>
            </div>
            <a
              href="/"
              target="_blank"
              className="nav_link"
            >
              <i className="bi bi-box-arrow-left nav_icon" />
              <span className="nav_name">SignOut</span>
            </a>
          </nav>
        </div>
        <div className="pt-4 pb-4">
        <div className="columns mt-5">
      <div className="column is-half">
        <h2>Data Kehadiran</h2>
        <div className="cards">
          <div className="card green">
            <p>Total Hadir Hari Ini</p>
            <p>{totalAttendance}</p>
          </div>
          <div className="card red">
            <p>Tanggal Hari Ini</p>
            <p>{new Date().toLocaleDateString()}</p>
          </div>
        </div>
        <div className="button-container">
          <button
            onClick={() => getPresensiBelum()}
            className="button is-small is-danger"
          >
            Peserta Belum Absen
          </button>
          <button
            onClick={() => getUsers()}
            className="button is-small is-success"
          >
            Peserta Sudah Absen
          </button>
        </div>
        <table className="custom-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Image In</th>
              <th>Image Out</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) &&
              users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.nama}</td>
                  <td>{user.check_in}</td>
                  <td>{user.check_out}</td>
                  <td>{user.image_url_in}</td>
                  <td>{user.image_url_out}</td>
                  <td>
                    <Link to={`/edit/${user.id}`} className="button is-small is-info">
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Peserta;