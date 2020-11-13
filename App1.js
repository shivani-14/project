import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Sector, Cell,
  } from 'recharts';

  const data = [
    {
      name: 'jan', debit: 4000, credit: 2400, amt: 2400,
    },
    {
      name: 'feb', debit: 3000, credit: 1398, amt: 2210,
    },
    {
      name: 'march', debit: 2000, credit: 9800, amt: 2290,
    },
    {
      name: 'april', debit: 2780, credit: 3908, amt: 2000,
    },
    {
      name: 'may', debit: 1890, credit: 4800, amt: 2181,
    },
    {
      name: 'june', debit: 2390, credit: 3800, amt: 2500,
    },
    {
      name: 'july', debit: 3490, credit: 4300, amt: 2100,
    },
  ];

  
const state = {
  labels: ['EXPENSE LIMIT EXCEEDED', 'Just started', 'good to go',
           'medium', 'close to expense limit'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4',
        '#B21F00'
        
      ],
      hoverBackgroundColor: [
        
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F',
        '#501800'
      
      ],
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (
      <div>
      <LineChart
      width={1000}
      height={300}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="debit" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="credit" stroke="#82ca9d" />
    </LineChart>

        <Doughnut
          data={state}
          width={600}
          options={{
            title:{
              display:true,
              text:'expense list',
              fontSize:40
            },
            legend:{
              display:true,
              position:'right',
              height:400
            }
          }}
        />
      </div>
    );
  }
}