import React from "react";
import Strategy from "./Strategy";
import '../styles/Retairement.css'

const Reteirement = () => {
  return (
    <div className="reteirement-main">
      <div className="retirement">
        <div className="retirement-ptg">
          <h3 className="rtmt-heading">Retirement Strategy</h3>
          <div className="set-ptg">
            <Strategy />
          </div>
          <div className="disp-ptg">
            <div className="emp-contribution">
              <h4 className="em-c-head">Employer contribution</h4>
              <h4 className="em-c-head">8.4%</h4>
            </div>
            <div className="emp-contribution">
              <h4 className="em-c-head">Intrest Rate</h4>
              <h4 className="em-c-head">5%</h4>
            </div>
          </div>
          <div className="buttons">
            <button className="update-ptg">Update</button>
            <p className="viewDoc">View New docs</p>
          </div>
        </div>
        <div className="more"></div>
      </div>
    </div>
  );
};

export default Reteirement;
