import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosJWT from '../../config/axiosJWT';
import ListTable from '../../Components/User/ListTable';


function Data(props) {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosJWT.get(`http://localhost:3000/user/presensi/${id}`);
        setData(response.data.presensi);
        const dataWithKosong = response.data.presensi.map((item) => ({
          ...item,
          check_in: item.check_in === null ? "Belum absen" : item.check_in,
          check_out: item.check_out === null ? "Belum absen" : item.check_out,
          image_url_in: item.image_url_in === null ? "Belum absen" : item.image_url_in,
          image_url_out: item.image_url_out === null ? "Belum absen" : item.image_url_out,
        }));
        setData(dataWithKosong);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Daftar data Absen</h1>
      <ListTable data={data} />
    </div>
  );
}

export default Data;
