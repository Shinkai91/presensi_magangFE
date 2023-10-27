import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Peserta from './pages/Peserta';
import PresensiMagang from './pages/PresensiMagang';
import Penugasan from './pages/Penugasan';
import Statistik from './pages/Statistik';
import EditUser from './Components/Admin/EditUser';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Data from './pages/user/Data'
import Presensi from './pages/user/Presensi';
import Tugas from './pages/user/Tugas';
import UserPages from './pages/user/UserPages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginSignup />}/>
        <Route path="user/presensi/riwayat" element={<Data/>}/>
        <Route path="user/presensi" element={<Presensi/>}/>
        <Route path="user/tugas" element={<Tugas/>}/>
        <Route path="user/homepage" element={<UserPages />}/>
        <Route path="homepage" element={<Homepage />}/>
        <Route path='admin/peserta' element={<Peserta />}/>
        <Route path='admin/presensi' element={<PresensiMagang />}/>
        <Route path='admin/penugasan' element={<Penugasan />}/>
        <Route path='admin/statistik' element={<Statistik />}/>
        <Route path='/edit' element={<EditUser />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;