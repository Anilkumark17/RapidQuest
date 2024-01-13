import React, { useState } from "react";
import "../styles/Navbardown.css";
import {
  HomeOutlined,
  SearchOutlined,
  ProfileOutlined,
  BellOutlined,
  ExportOutlined,
} from "@ant-design/icons";

const Navbardown = ({ onItemClick }) => {
  const [selectedItem, setSelectedItem] = useState("home");

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onItemClick && onItemClick(item);
  };

  return (
    <nav>
      <div className="nav-main2">
       
        <div className={`i ${selectedItem === "search" ? "selected" : ""}`} onClick={() => handleItemClick("search")}>
          <SearchOutlined style={{ fontSize: "20px" }} />
        </div>
        <div className={`i ${selectedItem === "home" ? "selected" : ""}`} onClick={() => handleItemClick("home")}>
          <HomeOutlined style={{ fontSize: "20px" }} />
        </div>
        <div className={`i ${selectedItem === "profile" ? "selected" : ""}`} onClick={() => handleItemClick("profile")}>
          <ProfileOutlined style={{ fontSize: "20px" }} />
        </div>
        <div className={`i ${selectedItem === "bell" ? "selected" : ""}`} onClick={() => handleItemClick("bell")}>
          <BellOutlined style={{ fontSize: "20px" }} />
        </div>
        <div className={`i ${selectedItem === "export" ? "selected" : ""}`} onClick={() => handleItemClick("export")}>
          <ExportOutlined style={{ fontSize: "20px" }} />
        </div>
      </div>
    </nav>
  );
};

export default Navbardown;
