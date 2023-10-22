import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Sidebar from '../Components/SideBar/Sidebar';
import Homepage from '../pages/Homepage';
import Peserta from '../pages/Peserta';
import PresensiMagang from '../pages/PresensiMagang';
import Penugasan from '../pages/Penugasan';
import Statistik from '../pages/Statistik';
import AddUser from '../Components/Admin/AddUser';
import EditUser from '../Components/Admin/EditUser';

const Routing = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Sidebar />
                <main className="main-content">
                    <Routes>
                        <Route path="homepage" element={<Homepage />} />
                        <Route path="peserta" element={<Peserta />} />
                        <Route path="add" element={<AddUser />} />
                        <Route path="edit/:id" element={<EditUser />} />
                        <Route path="presensi" element={<PresensiMagang />} />
                        <Route path="penugasan" element={<Penugasan />} />
                        <Route path="statistik" element={<Statistik />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default Routing