import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,PieChart, Pie, Sector, Cell,
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

const data1 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


export default class Example extends React.Component {
  //static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';


  render() {
    return (
      <div>
      <LineChart
      width={600}
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
    <h2>Expense</h2>
    <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
      <Pie
        data={data1}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
      >
        {
          data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>
      <Pie
        data={data1}
        cx={420}
        cy={200}
        startAngle={360}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
      >
        {
          data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>
    </PieChart>
      <div>
      </div>
      </div>
      
      
    );
  }
}
