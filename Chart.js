import React from "react";
import { Line,Bar,Pie } from "react-chartjs-2";

const Chart = ({ data }) => {
  
  console.log(data);

  return <Bar data={data} options={{ responsive: true, height: '600px', width: "600px" }} />;
};

export default Chart;