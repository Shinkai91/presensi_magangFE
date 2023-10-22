import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PresensiMagang.css';
import { Link } from 'react-router-dom';

export const Peserta = () => {
  const [users, setUsers] = useState([]);
  const [totalAttendance, setTotalAttendance] = useState(0);

  useEffect(() => {
    getUsers('http://localhost:3000/admin/presensi');
  }, []);

  const getUsers = async (endpoint) => {
    try {
      const response = await axios.get(endpoint);
      setUsers(response.data.presensi);

      // Calculate total attendance
      const totalHadir = response.data.filter((user) => user.check_in !== null).length;
      setTotalAttendance(totalHadir);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
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
            onClick={() => getUsers('http://localhost:3000/admin/presensi/negatif')}
            className="button is-small is-danger"
          >
            Peserta Belum Absen
          </button>
          <button
            onClick={() => getUsers('http://localhost:3000/admin/presensi')}
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
                <tr key={user.p_id}>
                  <td>{index + 1}</td>
                  <td>{user.nama}</td>
                  <td>{user.check_in}</td>
                  <td>{user.check_out}</td>
                  <td>{user.image_url_in}</td>
                  <td>{user.image_url_out}</td>
                  <td>
                    <Link to={`/edit/${user.p_id}`} className="button is-small is-info">
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Peserta;