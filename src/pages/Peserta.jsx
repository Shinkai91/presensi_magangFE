import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Peserta.css";
import logo from "../Assets/diskominfo.png";
import axiosJWT from "../config/axiosJWT";
import { Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Components/SideBar/Style.css";

export const Peserta = () => {
  const [users, setUsers] = useState([]);
  const [showNav, setShowNav] = useState(true);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const [formData, setFormData] = useState({
    nama: "",
    asal_univ: "",
    asal_jurusan: "",
    tanggal_mulai: null,
    tanggal_selesai: null,
    status_aktif: true,
    username: "",
    password: "",
  });

  const getUserById = async (userId) => {
    try {
      const response = await axiosJWT.get(
        `http://localhost:3000/admin/peserta/${userId}`
      );
      const userData = response.data.peserta_magang;
      setFormData({
        nama: userData.nama,
        asal_univ: userData.asal_univ,
        asal_jurusan: userData.asal_jurusan,
        tanggal_mulai: userData.tanggal_mulai,
        tanggal_selesai: userData.tanggal_selesai,
        status_aktif: userData.status_aktif,
        username: userData.username,
        password: userData.password,
      });
      setShowTaskForm(true);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUsers();
    if (id) {
      getUserById();
    }
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  const getUsers = async () => {
    try {
      const response = await axiosJWT.get(
        "http://localhost:3000/admin/peserta"
      );
      setUsers(response.data.peserta_magang);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const saveUser = async () => {
    try {
      await axiosJWT.post("http://localhost:3000/admin/peserta/add", formData);
      getUsers();
      handleCloseTaskForm();
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const updateUser = async () => {
    try {
      await axiosJWT.patch(
        `http://localhost:3000/admin/peserta/${id}/edit`,
        formData
      );
      handleCloseTaskForm();
      getUsers();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axiosJWT.delete(`http://localhost:3000/admin/peserta/${id}/delete`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseTaskForm = () => {
    setShowTaskForm(false);
    setIsEditing(false); // Reset to not editing mode
    setFormData({
      nama: "",
      asal_univ: "",
      asal_jurusan: "",
      tanggal_mulai: null,
      tanggal_selesai: null,
      status_aktif: true,
      username: "",
      password: "",
    });
  };

  const handleShowTaskForm = (userToEdit) => {
    if (userToEdit) {
      setIsEditing(true);
      setFormData({
        nama: userToEdit.nama,
        asal_univ: userToEdit.asal_univ,
        asal_jurusan: userToEdit.asal_jurusan,
        tanggal_mulai: userToEdit.tanggal_mulai,
        tanggal_selesai: userToEdit.tanggal_selesai,
        status_aktif: userToEdit.status_aktif,
        username: userToEdit.username,
        password: userToEdit.password,
      });
    } else {
      setIsEditing(false);
      setFormData({
        nama: "",
        asal_univ: "",
        asal_jurusan: "",
        tanggal_mulai: null,
        tanggal_selesai: null,
        status_aktif: true,
        username: "",
        password: "",
      });
    }
    setShowTaskForm(true);
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
              <a href="/homepage" target="_self" className="nav_logo">
                {showNav ? (
                  <img
                    src={logo}
                    alt=""
                    style={{ width: "150px", height: "auto" }}
                  />
                ) : (
                  <i className="bi bi-border-width nav_logo-icon" />
                )}
              </a>
              <div className="nav_list">
                <a href="homepage" target="_self" className="nav_link">
                  <i className="bi bi-house nav_icon" />
                  <span className="nav_name">Home</span>
                </a>
                <a href="peserta" target="_self" className="nav_link">
                  <i className="bi bi-person nav_icon" />
                  <span className="nav_name">Peserta</span>
                </a>
                <a href="presensi" target="_self" className="nav_link">
                  <i className="bi bi-person-check nav_icon" />
                  <span className="nav_name">Presensi Magang</span>
                </a>
                <a href="penugasan" target="_self" className="nav_link">
                  <i className="bi bi-list-task nav_icon" />
                  <span className="nav_name">Penugasan</span>
                </a>
                <a href="statistik" target="_self" className="nav_link">
                  <i className="bi bi-bar-chart-line nav_icon" />
                  <span className="nav_name">Statistik</span>
                </a>
              </div>
            </div>
            <a href="/" target="_blank" className="nav_link">
              <i className="bi bi-box-arrow-left nav_icon" />
              <span className="nav_name">SignOut</span>
            </a>
          </nav>
        </div>
        <div className="pt-4 pb-4">
          <div className="columns mt-5">
            <div className="column is-half">
              <button
                onClick={handleShowTaskForm}
                className="button is-success"
              >
                Tambah Peserta
              </button>
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
                      <td>
                        {user.status_aktif.toString() ? "Aktif" : "Tidak Aktif"}
                      </td>
                      <td>
                        <Button
                          onClick={() => handleShowTaskForm(user)}
                          className="button is-small is-info"
                        >
                          Edit
                        </Button>
                        <button
                          onClick={() => deleteUser(user.id)}
                          className="button is-small is-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={showTaskForm}
        onHide={handleCloseTaskForm}
        backdrop="static"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1050 }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {isEditing ? "Edit User" : "Tambah Peserta"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={isEditing ? updateUser : saveUser}>
            <Form.Group controlId="formTaskTitle">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan nama"
                value={formData.nama}
                onChange={(e) =>
                  setFormData({ ...formData, nama: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formTaskDescription">
              <Form.Label>Universitas</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan universitas"
                value={formData.asal_univ}
                onChange={(e) =>
                  setFormData({ ...formData, asal_univ: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formTaskDeadline">
              <Form.Label>Jurusan</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan jurusan"
                value={formData.asal_jurusan}
                onChange={(e) =>
                  setFormData({ ...formData, asal_jurusan: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formTaskDeadline">
              <Form.Label>Tanggal Mulai</Form.Label>
              <Form.Control
                type="date"
                value={formData.tanggal_mulai}
                onChange={(e) =>
                  setFormData({ ...formData, tanggal_mulai: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formTaskDeadline">
              <Form.Label>Tanggal Selesai</Form.Label>
              <Form.Control
                type="date"
                value={formData.tanggal_selesai}
                onChange={(e) =>
                  setFormData({ ...formData, tanggal_selesai: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formTaskStatus">
              <Form.Label>Status Aktif</Form.Label>
              <Form.Control
                as="select"
                value={
                  formData.status_aktif
                    ? formData.status_aktif.toString()
                    : "true"
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status_aktif: e.target.value === "true",
                  })
                }
              >
                <option value="true">Aktif</option>
                <option value="false">Tidak Aktif</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formTaskUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formTaskPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Masukkan password"
                value={formData.password || null}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTaskForm}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            {isEditing ? "Update" : "Simpan"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Peserta;
