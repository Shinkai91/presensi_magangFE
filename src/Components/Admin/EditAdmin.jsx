import React, { useState, useEffect } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import axiosJWT from "../../config/axiosJWT";

const EditAdmin = ({ adminId, handleCloseModal, showEditAdminModal, updateAdminData }) => {
    const [adminData, setAdminData] = useState({
        id: null,
        nama: "",
        username: "",
        password: "",
    });

    useEffect(() => {
        getAdminById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [adminId]);

    const updateAdmin = async (e) => {
        e.preventDefault();
        try {
            await axiosJWT.patch(`http://localhost:3000/admin/edit-admin/${adminId}`, {
                nama: adminData.nama,
                username: adminData.username,
                password: adminData.password
            });
            handleCloseModal()
            updateAdminData(adminData);
        } catch (error) {
            console.log(error);
        }
    }

    const getAdminById = async () => {
        try {
            const response = await axiosJWT.get(`http://localhost:3000/admin/show-admin-id/${adminId}`);
            if (response.data) {
                if (response.data.admin) {
                    const admin = response.data.admin;
                    setAdminData({
                        id: admin.id,
                        nama: admin.nama,
                        username: admin.username
                    });
                } else {
                    console.error("Admin data is missing in the response.");
                }
            } else {
                console.error("Response data is missing.");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Modal
                show={showEditAdminModal}
                onHide={handleCloseModal}
                backdrop="static"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1050 }}
                dialogClassName="modal-dialog-centered"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Admin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={updateAdmin}>
                        <Form.Group controlId="nama">
                            <Form.Label>Nama</Form.Label>
                            <Form.Control
                                type="text"
                                value={adminData.nama}
                                onChange={(e) => setAdminData({ ...adminData, nama: e.target.value })}
                                placeholder="Nama"
                            />
                        </Form.Group>
                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                value={adminData.username}
                                onChange={(e) => setAdminData({ ...adminData, username: e.target.value })}
                                placeholder="Username"
                            />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="text"
                                value={adminData.password}
                                onChange={(e) => setAdminData({ ...adminData, password: e.target.value })}
                                placeholder="Password"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" type="submit" onClick={updateAdmin}>
                        Update
                    </Button>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default EditAdmin;