import React from "react";

import Reteirement from "../components/Reteirement";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Profile from "../components/Profile";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-main">
        <div className="navbar">
          <Navbar />
        </div>
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
      <div className="nav">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
