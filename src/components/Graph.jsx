import React from 'react';
import Chart from 'chart.js/auto';

import '../styles/graph.css'

const Graph = () => {
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const height = 250; 
    const width = 500; 
    ctx.canvas.style.height = `${height}px`;
    ctx.canvas.style.width = `${width}px`;

    const gradientHeight = height;

    const gradientEmployer = ctx.createLinearGradient(0, 0, 0, gradientHeight);
    gradientEmployer.addColorStop(0, 'rgb(28, 28, 167)');
    gradientEmployer.addColorStop(1, 'rgb(28, 28, 167)');

    const gradientEmployee = ctx.createLinearGradient(0, 0, 0, gradientHeight);
    gradientEmployee.addColorStop(0, 'rgb(59, 59, 228)');
    gradientEmployee.addColorStop(1, 'rgb(59, 59, 228)');

    const gradientTotalInterest = ctx.createLinearGradient(0, 0, 0, gradientHeight);
    gradientTotalInterest.addColorStop(0, 'rgb(82, 82, 252)');
    gradientTotalInterest.addColorStop(1, 'rgb(82, 82, 252)');

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['20', '25', '30', '35', '40', '60', '65'],
        datasets: [
          {
            label: 'Employer',
            data: [10, 20, 30, 40, 50, 60, 70],
            backgroundColor: gradientEmployer,
            borderWidth: 1,
          },
          {
            label: 'Employee',
            data: [15, 25, 35, 45, 55, 65, 75],
            backgroundColor: gradientEmployee,
            borderWidth: 1,
          },
          {
            label: 'Total Interest',
            data: [5, 10, 15, 20, 25, 30, 35],
            backgroundColor: gradientTotalInterest,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'category',
            position: 'bottom',
            title: {
              display: true,
              text: 'Age',
            },
          },
          y: {
            type: 'linear',
            position: 'left',
            stacked: true,
            title: {
              display: true,
              text: 'Contribution ($)',
            },
            ticks: {
              min: 0,
              max: 300,
              stepSize: 100,
              callback: function (value, index, values) {
                return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
              }
            },
          },
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              usePointStyle: false,
              boxWidth: 20,
            },
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: {
              label: function(context) {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null) {
                  label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                }
                return label;
              }
            }
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default Graph;
