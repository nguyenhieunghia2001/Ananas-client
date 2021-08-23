import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    ,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
  ],
  datasets: [
    {
      label: "Doanh thu ",
      data: [
        520000, 490000, 1200000, 500000, 152000, 3000000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        630000, 0, 0, 10, 0, 0, 0,
      ],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const RevenueChart = () => (
  <>
    <Bar data={data} options={options} />
  </>
);

export default RevenueChart;
