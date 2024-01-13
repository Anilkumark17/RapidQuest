import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

import "../styles/compare.css";

const CompareChart = () => {
  const chartRef = useRef(null);
  const chart = useRef(null);
  const chartMe = useRef(null);
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        // labels: ["Average"],
        datasets: [
          {
            data: [78, 22],
            backgroundColor: ["rgb(137, 245, 149", "rgb(196, 196, 196)"],
          },
        ],
      },
      options: {
        radius: "60%",
        cutout: "80%",
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            type: "category",
            position: "bottom",
            title: {
              display: true,
              text: "Average",
            },
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  useEffect(() => {
    const ctx = chart.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        // labels: ["Average"],
        datasets: [
          {
            data: [95, 5],
            backgroundColor: ["rgb(137, 245, 149", "rgb(196, 196, 196)"],
          },
        ],
      },
      options: {
        radius: "60%",
        cutout: "80%",
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            type: "category",
            position: "bottom",
            title: {
              display: true,
              text: "Top",
            },
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  useEffect(() => {
    const ctx = chartMe.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        // labels: ["Average"],
        datasets: [
          {
            data: [59, 41],
            backgroundColor: ["rgb(137, 245, 149", "rgb(196, 196, 196)"],
          },
        ],
      },
      options: {
        radius: "60%",
        cutout: "80%",
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            type: "category",
            position: "bottom",
            title: {
              display: true,
              text: "Me",
            },
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="user-am-comp">
      <div className="comp-avg">
        <canvas ref={chartRef} width={150} height={150} className="pie-gh"/>
      </div>
      <div className="comp-top">
        <canvas ref={chart} width={150} height={150} className="pie-gh"/>
      </div>
      <div className="comp-me">
        <canvas ref={chartMe} width={150} height={150} className="pie-gh"/>
      </div>
    </div>
  );
};

export default CompareChart;
