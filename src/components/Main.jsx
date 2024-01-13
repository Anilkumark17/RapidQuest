import React from "react";
import Graph from "./Graph";
import CompareChart from "./CompareChart";
import "../styles/main.css";

// const amounts = [
//   { id: 1, money: "$300,000", goal: "My goal" },
//   { id: 2, money: "59%", goal: "Goal Achieved" },
//   { id: 3, money: "$300", goal: "Est. Monthly income" },
// ];

const cat = [
  {
    id: 1,
    heading: "Age",
    categ: "Under 30",
  },
  {
    id: 2,
    heading: "Salary",
    categ: "K 20 - K 30",
  },
  {
    id: 3,
    heading: "Gender",
    categ: "Male",
  },
];

const Main = () => {
  return (
    <div className="mainContainer">
      <div className="mc-main">
        <div className="heading">
          <h4 className="heading-text">Retirement income</h4>
          <h3 className="start">Starting year 2056</h3>
        </div>
        {/* <div className="amount-strategy">
          {amounts.map((amount) => (
            <div key={amount.id}>
              <div className="am-s">
                <h2 className="money-am">{amount.money}</h2>
                <p className="tag">{amount.goal}</p>
                <u className="main-u"></u>
              </div>
            </div>
          ))}
        </div> */}
        <div className="amount-strategy">
          <div className="am-s-a">
            <h2 className="money-am"> $300,000</h2>
            <p className="tag">My-goal</p>
          </div>
          <div className="ams-g">
          <div className="am-s">
            <h2 className="money-am">59%</h2>
            <p className="tag">Goal achieved</p>
            <u className="main-u"></u>
          </div>
          <div className="am-s">
                <h2 className="money-am">$300</h2>
                <p className="tag">Est.monthly income</p>
                <u className="main-u"></u>
              </div>
          </div>
        
        </div>
        <div className="chart">
          <h2 className="chart-head">Contributions Overtime</h2>
          <div className="graph">
            <Graph />
          </div>
        </div>
        <div className="comparision">
          <div className="compare">
            <div className="compare-heading">
              <h3 className="ch">How do i compare to my peers?</h3>
              <p className="tag">
                These numbers represent current goal achievement
              </p>
            </div>
            <div className="catgories">
              <div className="cat">
                {cat.map((cat) => {
                  return (
                    <div key={cat.id}>
                      <div className="cat-table">
                        <h4 className="t-c">{cat.heading}:</h4>
                        <p className="t-con">{cat.categ}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="cat-graph">
                <CompareChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
