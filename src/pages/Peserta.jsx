import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Peserta.css'; 
import { Link } from 'react-router-dom';

export const Peserta = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/admin/peserta');
      setUsers(response.data.peserta_magang);
    } catch (error) {
      console.error('Error fetching data:', error);
      console.error('Response:', error.response);
    }
  };

  const deleteUser = async (id) =>{
    try {
      await axios.delete(`http://localhost:3000/admin/peserta/${id}/delete`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  }

  return (
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
                  <button onClick={()=> deleteUser(user.id)} className="button is-small is-danger">Delete</button>
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