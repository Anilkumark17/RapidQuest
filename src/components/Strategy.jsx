import React from "react";
import { Progress } from "antd";
import '../styles/strategy.css'

const Strategy = () => {
  const percent = 78;
  const age = 65;

  return (
    <div className="strategy-main">
      <span className="employee">Employee Contribution</span>
      <Progress percent={percent} showInfo={true} />
      <span className="employee">Retirement age:</span>
      <span className="age">
      <Progress percent={age} showInfo={false} /> 
      <span className="age-disp">{age}</span>
      </span>
    </div>
  );
};

export default Strategy;
