import React from 'react'
import PropTypes from 'prop-types'
import { Bar as BarChart } from 'react-chartjs-2'

export const Chart = ({datasets}) => {
  return (
    <div style={{ position: "relative", margin: "auto", width: "80vw", height: '50vh' }}>
    <BarChart
      data={datasets}
      width={10}
      height={10}
      options={{
        maintainAspectRatio: false
      }}
    />
    </div>
  )
}
    
Chart.propTypes = {
  datasets: PropTypes.object,
}
  
Chart.defaultProps = {
  datasets: {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Savings Account',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: '#36404D',
        borderColor: '#36404D',
        borderWidth: 2,
        hoverBackgroundColor: '#75D9FD',
        hoverBorderColor: '#75D9FD',
      },
      {
        label: 'Credit Account',
        data: [5, 30, 3, 8, 14, 2],
        backgroundColor: '#74B649',
        borderColor: '#74B649',
        borderWidth: 2,
        hoverBackgroundColor: '#75FDB5',
        hoverBorderColor: '#75FDB5',
      },
      {
        label: 'Current Account',
        data: [15, 3, 13, 18, 4, 20],
        backgroundColor: '#ff6347',
        borderColor: '#ff6347',
        borderWidth: 2,
        hoverBackgroundColor: '#ff99ff',
        hoverBorderColor: '#ff99ff',
      },
    ]
  }
}

export default Chart;