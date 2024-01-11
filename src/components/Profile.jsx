import React from "react";
import "../styles/profile.css";

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="main">
        <div className="profile">
          <div className="image">
            <img src={require("../Assets/db.jpg")} alt="" className="dp" />
          </div>
          <div className="user-details">
            <h2 className="user-name">Hi mike</h2>
            <p className="welcome">welcome-back</p>
          </div>
        </div>
        <div className="profile-detailes">
          <h2 className="today">Today</h2>
          <div className="balance">
            <h2 className="amount">$19,892</h2>
            <p className="amount-cap">Amount balance</p>
          </div>

          <div className="contributions">
            <h3 className="contribution">$4000</h3>
            <p className="cont-cap">year to year contribution</p>
          </div>

          <div className="contributions">
            <h3 className="contribution">$1892</h3>
            <p className="cont-cap">Total intrest</p>
          </div>
          <div className="i-want">
            <button className="iwant">I want to</button>
          </div>
        </div>
        <div className="transactions">
          <div className="heading">
            <h2 className="t-heading">Transactions</h2>
          </div>
          <div className="transaction">
            <p className="date">2020-08-07</p>
            <h4 className="account">Withdraw Transfer to Bank--XXX11 </h4>
          </div>
          <div className="transaction">
            <p className="date">2020-08-07</p>
            <h4 className="account">Withdraw Transfer to Bank--XXX11</h4>
          </div>
          <div className="transaction">
            <p className="date">2020-08-07</p>
            <h4 className="account">Withdraw Transfer to Bank--XXX11</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
