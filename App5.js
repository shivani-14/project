// src/components/line.rechart.js

import React from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const data1 = [
    {
        "name": "Jan 2019",
        "Debit": 3432,
        "Credit": 2342
    },
    {
        "name": "Feb 2019",
        "Debit": 2342,
        "Credit": 3246
    },
    {
        "name": "Mar 2019",
        "Debit": 4565,
        "Credit": 4556
    },
    {
        "name": "Apr 2019",
        "Debit": 6654,
        "Credit": 4465
    },
    {
        "name": "May 2019",
        "Debit": 8765,
        "Credit": 4553
    }
];

class LineRechartComponent extends React.Component {



    render() {
        return (
            <LineChart width={730} height={250} data={data1}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Debit" stroke="#0095FF" />
                <Line type="monotone" dataKey="Credit" stroke="#FF0000" />
            </LineChart>
        )
    };
}

export default LineRechartComponent;