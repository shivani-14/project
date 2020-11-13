
import React, { useState, useEffect } from "react";
import axios from "axios";

import App9 from "./App9";

const App8 = () => {
  const [chart, setChart] = useState({});

  useEffect(() => {
    getData();
  },
   []
   );

  const getData = async () => {
    try {
      const res = await axios.get(
        'http://localhost:3001/dataset'
        //'https://corona.lmao.ninja/v2/historical/india'
        //'https://tradingeconomics.com/india/rating'
        
      );

      setChart({
        labels: [Object.keys(res.data.dataset)],
        datasets: [
          {
            data: Object.values(res.data.dataset)
          }
        ]
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <App9 data={chart} />
    </div>
  );
};

export default App8;

