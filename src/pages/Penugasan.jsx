import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import logo from "../Assets/diskominfo.png";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Components/SideBar/Style.css";
import "./Penugasan.css";

function Penugasan() {
  const [showNav, setShowNav] = useState(true);
  const [activeTasks, setActiveTasks] = useState(5);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleShowTaskForm = () => {
    setShowTaskForm(true);
  };

  const handleCloseTaskForm = () => {
    setShowTaskForm(false);
  };

  const handleSaveTask = () => {
    // Simpan data form ke server atau lakukan aksi lainnya
    // Setelah berhasil, Anda bisa menutup form dengan handleCloseTaskForm
    handleCloseTaskForm();
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
                  <img src={logo} alt="" style={{ width: "150px", height: "auto" }} />
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
        <div className="pt-1 pb-4">
          <div className="body-penugasan">
            <section id="penugasan">
              <p className="title-penugasan">Penugasan</p>
            </section>
            <section id="cards-penugasan">
              <div className="card-penugasan-1 green-penugasan">
                <p>Jumlah Tugas Aktif: {activeTasks}</p>
              </div>
              <div className="card-penugasan-1 red-penugasan" style={{ display: 'flex', alignItems: 'center' }}>
                <button
                  onClick={handleShowTaskForm}
                  style={{
                    backgroundColor: 'red',
                    border: 'none',
                    color: 'white',
                  }}
                >
                  Tambah Tugas
                </button>
              </div>
              <div className="card-penugasan-2 green-penugasan-2">
                <p id="date-time">{currentTime.toLocaleString()}</p>
              </div>
            </section>
            <section id="informasi-penugasan">
              <div className="container-penugasan left">
                <h2>Informasi Tugas Aktif</h2>
                <ul>
                  <li>Tugas 1</li>
                  <li>Tugas 2</li>
                  <li>Tugas 3</li>
                  {/* Tambahkan lebih banyak item sesuai kebutuhan */}
                </ul>
              </div>
              <div className="container-penugasan right">
                <h2>Detail Penugasan</h2>
                <div>
                  <h3>Siswa yang sudah mengisi:</h3>
                  <ul>
                    <li>Siswa 1</li>
                    <li>Siswa 2</li>
                    {/* Tambahkan lebih banyak item sesuai kebutuhan */}
                  </ul>
                </div>
                <div>
                  <h3>Siswa yang belum mengisi:</h3>
                  <ul>
                    <li>Siswa 3</li>
                    <li>Siswa 4</li>
                    {/* Tambahkan lebih banyak item sesuai kebutuhan */}
                  </ul>
                </div>
              </div>
            </section>
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
          <Modal.Title>Form Penugasan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTaskTitle">
              <Form.Label>Judul</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan judul"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formTaskDescription">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Masukkan deskripsi"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formTaskDeadline">
              <Form.Label>Deadline</Form.Label>
              <Form.Control
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTaskForm}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleSaveTask}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Penugasan;