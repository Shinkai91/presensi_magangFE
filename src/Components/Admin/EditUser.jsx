import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import axiosJWT from "../../config/axiosJWT";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const EditUser = () => {
    const [nama, setNama] = useState("");
    const [asal_univ, setUniversitas] = useState("");
    const [asal_jurusan, setJurusan] = useState("");
    const [tanggal_mulai, setMulai] = useState(new Date().toISOString());
    const [tanggal_selesai, setSelesai] = useState(new Date().toISOString());
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status_aktif, setStatusAktif] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        getUserById();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const showSuccessNotification = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
        });
    };

    const showErrorNotification = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
        });
    };

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axiosJWT.patch(`http://localhost:3000/admin/peserta/${id}/edit`, {
                nama,
                asal_univ,
                asal_jurusan,
                tanggal_mulai,
                tanggal_selesai,
                status_aktif,
                username,
                password,
            });
            showSuccessNotification("Peserta berhasil diperbarui.");
            navigate("/peserta");
        } catch (error) {
            showErrorNotification("Gagal memperbarui peserta.");
            console.log(error);
        }
    };

    const getUserById = async () => {
        const response = await axiosJWT.get(`http://localhost:3000/admin/peserta/${id}`);
        setNama(response.data.peserta_magang.nama);
        setUniversitas(response.data.peserta_magang.asal_univ);
        setJurusan(response.data.peserta_magang.asal_jurusan);
        setMulai(response.data.peserta_magang.tanggal_mulai);
        setSelesai(response.data.peserta_magang.tanggal_selesai);
        setStatusAktif(response.data.peserta_magang.status_aktif);
        setUsername(response.data.peserta_magang.username);
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <p style={{ fontSize: 25, textAlign: "center", fontFamily: "Poppins, sans-serif" }}>
                    Edit Peserta
                </p>
                <Button variant="primary" onClick={handleShowModal}>
                    Edit User
                </Button>
            </div>
            <Modal 
                show={showModal}
                onHide={handleCloseModal}
                backdrop="static"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1050 }}
                dialogClassName="modal-dialog-centered">
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={updateUser}>
                        <Form.Group controlId="nama">
                            <Form.Label>Nama</Form.Label>
                            <Form.Control
                                type="text"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                placeholder="Nama"
                            />
                        </Form.Group>

                        <Form.Group controlId="asal_univ">
                            <Form.Label>Universitas</Form.Label>
                            <Form.Control
                                type="text"
                                value={asal_univ}
                                onChange={(e) => setUniversitas(e.target.value)}
                                placeholder="Universitas"
                            />
                        </Form.Group>

                        <Form.Group controlId="asal_jurusan">
                            <Form.Label>Jurusan</Form.Label>
                            <Form.Control
                                type="text"
                                value={asal_jurusan}
                                onChange={(e) => setJurusan(e.target.value)}
                                placeholder="Jurusan"
                            />
                        </Form.Group>

                        <Form.Group controlId="formTaskDeadline">
                            <Form.Label>Tanggal Mulai</Form.Label>
                            <Form.Control
                                type="date"
                                value={tanggal_mulai}
                                onChange={(e) => setMulai(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formTaskDeadline">
                            <Form.Label>Tanggal Selesai</Form.Label>
                            <Form.Control
                                type="date"
                                value={tanggal_selesai}
                                onChange={(e) => setSelesai(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="status_aktif">
                            <Form.Label>Status Aktif</Form.Label>
                            <Form.Control
                                as="select"
                                value={status_aktif ? "true" : "false"}
                                onChange={(e) => setStatusAktif(e.target.value === "true")}
                            >
                                <option value="true">Aktif</option>
                                <option value="false">Tidak Aktif</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                            />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="text"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </Form.Group>

                        <Button style={{ marginTop: 10 }} variant="success" type="submit">
                            Update
                        </Button>

                        <Button style={{ marginTop: 10, marginLeft: 10 }} variant="secondary" onClick={handleCloseModal}>
                            Cancel
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            {/* End of Modal */}
        </div>
    );
};

export default EditUser;