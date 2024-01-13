import React from "react";

import Reteirement from "../components/Reteirement";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Profile from "../components/Profile";
import "../styles/home.css";
import Navbardown from "../components/Navbardown";

const Home = () => {
  return (
    <div className="home">
      <div className="home-main">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="for-res">
        <div className="profile">
          <Profile />
        </div>
        <div className="main-container">
          <Main />
        </div>
        <div className="Retirement">
          <Reteirement />
        </div>
        </div>
      </div>
      <div className="nav">
        <Navbardown/>
      </div>
    </div>
  );
};

export default Home;
