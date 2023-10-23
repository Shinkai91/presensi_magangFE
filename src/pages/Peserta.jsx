import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Peserta.css'
import { Link } from 'react-router-dom'
import logo from "../Assets/diskominfo.png"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "../Components/SideBar/Style.css"

export const Peserta = () => {
  const [users, setUsers] = useState([]);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/admin/peserta');
      setUsers(response.data.peserta_magang);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/admin/peserta/${id}/delete`);
      getUsers();
    } catch (error) {
      console.log(error);
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
              <Link to={'/add'} className='button is-success'>Add User</Link>
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Universitas</th>
                    <th>Jurusan</th>
                    <th>Tanggal Mulai</th>
                    <th>Tanggal Selesai</th>
                    <th>Status Aktif</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td>{user.nama}</td>
                      <td>{user.asal_univ}</td>
                      <td>{user.asal_jurusan}</td>
                      <td>{user.tanggal_mulai}</td>
                      <td>{user.tanggal_selesai}</td>
                      <td>{user.status_aktif.toString() ? "Aktif" : "Tidak Aktif"}</td>
                      <td>
                        <Link to={`/edit/${user.id}`} className="button is-small is-info">Edit</Link>
                        <button onClick={() => deleteUser(user.id)} className="button is-small is-danger">Delete</button>
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