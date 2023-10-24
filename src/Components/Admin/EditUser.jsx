import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const EditUser = () => {
    const [nama, setNama] = useState("");
    const [asal_univ, setUniversitas] = useState("");
    const [asal_jurusan, setJurusan] = useState("");
    const [tanggal_mulai, setMulai] = useState(new Date());
    const [tanggal_selesai, setSelesai] = useState(new Date()); 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status_aktif, setStatusAktif] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getUserById();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:3000/admin/peserta/${id}/edit`, {
                nama,
                asal_univ,
                asal_jurusan,
                tanggal_mulai,
                tanggal_selesai,
                status_aktif,
                username,
                password,
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:3000/admin/peserta/${id}`);
        setNama(response.data.peserta_magang.nama);
        setUniversitas(response.data.peserta_magang.asal_univ);
        setJurusan(response.data.peserta_magang.asal_jurusan);
        setMulai(new Date(response.data.peserta_magang.tanggal_mulai));
        setSelesai(new Date(response.data.peserta_magang.tanggal_selesai));
        setStatusAktif(response.data.peserta_magang.status_aktif);
        setUsername(response.data.peserta_magang.username);
        setPassword(response.data.peserta_magang.password);
    }

    return (
        <div className="colums mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={updateUser}>
                    <div className="field">
                        <label className="label">Nama</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                placeholder="Nama"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Universitas</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={asal_univ}
                                onChange={(e) => setUniversitas(e.target.value)}
                                placeholder="Universitas"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Jurusan</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={asal_jurusan}
                                onChange={(e) => setJurusan(e.target.value)}
                                placeholder="Jurusan"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Tanggal Mulai</label>
                    </div>
                    <DatePicker
                        selected={tanggal_mulai}
                        onChange={(date) => setMulai(date)}
                        dateFormat={'yyyy/MM/dd'}
                        showYearDropdown
                        scrollableMonthYearDropdown
                    />
                    <div className="field">
                        <label className="label">Tanggal Selesai</label>
                    </div>
                    <DatePicker
                        selected={tanggal_selesai}
                        onChange={(date) => setSelesai(date)}
                        dateFormat={'yyyy/MM/dd'}
                        showYearDropdown
                        scrollableMonthYearDropdown
                    />
                    <div className="field">
                        <label className="label">Status Aktif</label>
                        <div className="control">
                            <div className="select">
                                <select
                                    value={status_aktif}
                                    onChange={(e) => setStatusAktif(e.target.value === "true")}
                                >
                                    <option value="true">Aktif</option>
                                    <option value="false">Tidak Aktif</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <button type="submit" className="button is-success">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUser;
