// src/components/area.rechart.js

import React from "react";
//import { AreaChart, Area, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Tracker from "./Tracker";
import BarChartComponent from './BarChartComponent';


class App17 extends React.Component {

    

    render() { 
        return (
            <div>
            <BarChartComponent />
            <div >
            <Tracker />
            </div>
            </div>
        )
    };
}

export default App17;