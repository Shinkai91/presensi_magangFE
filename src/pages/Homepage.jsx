import React from 'react';
import imageCon from "../Assets/balaikota.jpg";
import user from "../Components/Assets/person.png";
import penugasan from "../Assets/image_Buat Penugasan.svg"
import peserta from "../Assets/image_Peserta magang.svg"
import statistik from "../Assets/image_Statistik.svg"
import './Homestyle.css';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="image-container">
        <img src={imageCon} alt='' />
      </div>
      <div className="account-info-container">
        <div className="info-box">
          <div className="user-info">
            <h2>Nama: John Doe</h2>
            <div className="contact-info">
              <p>Nomor Telepon: 123-456-7890</p>
              <p>Email: john.doe@example.com</p>
            </div>
          </div>
        </div>
        <div className='space'></div>
        <div className="user-image">
          <img src={user} alt="" />
        </div>
      </div>
      <div className="action-buttons">
        <a href="/peserta">
          <img src={peserta} alt="Peserta" />
          <span>Peserta</span>
        </a>
        <a href="/penugasan">
          <img src={penugasan} alt="Penugasan" />
          <span>Penugasan</span>
        </a>
        <a href="/statistik">
          <img src={statistik} alt="Statistik" />
          <span>Statistik</span>
        </a>
      </div>

    </div>
  );
}

export default Homepage;