
import React, { useState, useEffect } from "react";
import axios from "axios";

import Chart from "./Chart";

const App4 = () => {
  const [chart, setChart] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get(
        'https://corona.lmao.ninja/v2/historical/india'
        //'https://tradingeconomics.com/india/rating'
      );

      setChart({
        labels: [Object.keys(res.data.timeline.cases)],
        datasets: [
          {
            label: "Expenses",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "red",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: Object.values(res.data.timeline.cases)
          }
        ]
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <Chart data={chart} />
    </div>
  );
};

export default App4;

