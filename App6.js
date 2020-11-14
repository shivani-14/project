// src/components/area.rechart.js

import React from "react";
import { AreaChart, Area, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Trackerchart from "./trackerChart";

const data = [
    {
        "name": "Jan 2020",
        "Debit": 3432,
        "Credit": 2342
    },
    {
        "name": "Feb 2020",
        "Debit": 2342,
        "Credit": 3246
    },
    {
        "name": "Mar 2020",
        "Debit": 4565,
        "Credit": 4556
    },
    {
        "name": "Apr 2020",
        "Debit": 6654,
        "Credit": 4465
    },
    {
        "name": "May 2020",
        "Debit": 8765,
        "Credit": 4553
    }
];

class App6 extends React.Component {

    

    render() { 
        return (
            <div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
            <AreaChart width={900} height={400} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="Debit" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="Credit" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
            <Trackerchart/>
            </div>
        )
    };
}

export default App6;