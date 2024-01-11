import React from "react";
import "../styles/navbar.css";
import {
  HomeOutlined,
  SearchOutlined,
  ProfileOutlined,
  BellOutlined,
  ExportOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-main">
        <div className="logo">
          <img src={require("../Assets/logo.png")} alt="" />
        </div>
        <div className="icons">
          <div className="first">
            <div className="search-icon">
              <SearchOutlined style={{ fontSize: "20px" }} />
            </div>
            <div className="icon">
              <div className="i">
                <HomeOutlined style={{ fontSize: "20px" }} />
              </div>
              <div className="i">
                <ProfileOutlined style={{ fontSize: "20px" }} />
              </div>
            </div>
          </div>
          <div className="icons-2">
            <div className="i">
              <BellOutlined style={{ fontSize: "20px" }} />
            </div>
            <div className="i">
              <ExportOutlined style={{ fontSize: "20px" }} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
