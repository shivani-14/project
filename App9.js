// src/components/area.rechart.js

import React from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const App9 =({data}) => {
    return (
        <LineChart width={730} height={250} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Debit" stroke="#0095FF" />
        <Line type="monotone" dataKey="Credit" stroke="#FF0000" />
    </LineChart>
    );

}
        

export default App9;