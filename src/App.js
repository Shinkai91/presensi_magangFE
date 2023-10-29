import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Peserta from './pages/Peserta';
import PresensiMagang from './pages/PresensiMagang';
import Penugasan from './pages/Penugasan';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import EditUser from './Components/Admin/EditUser';
import Admin from './pages/Admin';
import EditAdmin from './Components/Admin/EditAdmin';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginSignup />}/>
        <Route path="homepage" element={<Homepage />}/>
        <Route path='admin' element={<Admin />} />
        <Route path='peserta' element={<Peserta />}/>
        <Route path='presensi' element={<PresensiMagang />}/>
        <Route path='penugasan' element={<Penugasan />}/>
        <Route path='edit/:id' element={<EditUser />}/>
        <Route path='edit-admin/:id' element={<EditAdmin />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;