import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Peserta from './pages/Peserta';
import PresensiMagang from './pages/PresensiMagang';
import Penugasan from './pages/Penugasan';
import Statistik from './pages/Statistik';
import EditUser from './Components/Admin/EditUser';
import LoginSignup from './Components/LoginSignup/LoginSignup';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginSignup />}/>
        <Route path="homepage" element={<Homepage />}/>
        <Route path='peserta' element={<Peserta />}/>
        <Route path='presensi' element={<PresensiMagang />}/>
        <Route path='penugasan' element={<Penugasan />}/>
        <Route path='statistik' element={<Statistik />}/>
        <Route path='/edit' element={<EditUser />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;