import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaThList
} from "react-icons/fa";
import logo from "../../Assets/diskominfo.png";
import { NavLink } from 'react-router-dom';
import "../SideBar/Style.css";

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "homepage",
            name: "Homepage",
            icon: <FaTh />
        },
        {
            path: "peserta",
            name: "Peserta",
            icon: <FaUserAlt />
        },
        {
            path: "presensi",
            name: "Presensi",
            icon: <FaRegChartBar />
        },
        {
            path: "penugasan",
            name: "Penugasan",
            icon: <FaCommentAlt />
        },
        {
            path: "statistik",
            name: "Statistik",
            icon: <FaThList />
        }
    ];

    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <div style={{ display: isOpen ? "block" : "none" }} className="logo">
                        <img src={logo} alt="Logo" style={{ width: '100px' }} />
                    </div>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="link" activeClassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                    </NavLink>
                ))}
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;