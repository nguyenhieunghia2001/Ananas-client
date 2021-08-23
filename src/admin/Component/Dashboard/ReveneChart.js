import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { BiMenuAltLeft } from "react-icons/bi";
import { getRevenueDay, getRevenueMonth } from "../../../api/orderApi";

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

const RevenueChart = () => {
  const [valueRevenue, setValueRevenue] = useState({
    labels: [],
    datasets: [],
  });

  const setRevenueFromApi = (value) => {
    console.log(value);
    setValueRevenue((pre) => {
      return {
        ...pre,
        labels: value?.labels,
        datasets: [
          {
            label: value?.label,
            data: value?.data,
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
          },
        ],
      };
    });
  };
  useEffect(() => {
    async function fetch() {
      const res = await getRevenueDay();
      await setRevenueFromApi(res);
    }
    fetch();
  }, []);
  const handleChangeRevenue = async (e) => {
    const targetApi = e.target.getAttribute("data");
    let res;
    if (targetApi === "day") res = await getRevenueDay();
    else if (targetApi === "month") res = await getRevenueMonth();
    else res = await getRevenueDay();
    await setRevenueFromApi(res);
  };
  return (
    <>
      <div className="header">
        <h5 className="title">Doanh thu</h5>
        <div className="options">
          <div className="icon">
            <BiMenuAltLeft />
          </div>
          <ul className="options-list">
            <li data="day" onClick={handleChangeRevenue}>
              Hôm nay
            </li>
            <li data="month" onClick={handleChangeRevenue}>Tuần này</li>
            <li>Tháng này</li>
          </ul>
        </div>
      </div>
      <Bar data={valueRevenue} options={options} />
    </>
  );
};

export default RevenueChart;
