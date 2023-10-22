import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Sidebar from './Components/SideBar/Sidebar';
// import Homepage from './pages/Homepage';
// import Peserta from './pages/Peserta';
// import PresensiMagang from './pages/PresensiMagang';
// import Penugasan from './pages/Penugasan';
// import Statistik from './pages/Statistik';
// import AddUser from './Components/Admin/AddUser';
// import EditUser from './Components/Admin/EditUser';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Homepage from './pages/Homepage';
// import Homepage from './pages/Homepage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginSignup />}/>
        <Route path="/homepage" element={<Homepage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;