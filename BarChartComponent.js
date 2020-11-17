import React from 'react'
import PropTypes from 'prop-types'
import { Bar as BarChart } from 'react-chartjs-2'

export const Chart = ({datasets}) => {
  return (
    <div style={{ position: "relative", margin: "auto", width: "50vw", height: '50vh' }}>
    <BarChart
      data={datasets}
      width={5}
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
    labels: ['Savings', 'Credit', 'Current'],
    datasets: [
      {
        labels: ['Savings', 'Credit', 'Current'],
        data: [1116000, 165000, 1700003],
        backgroundColor: '#74B649',
        borderColor: '#36404D',
        borderWidth: 2,
        hoverBackgroundColor: '#75D9FD',
        hoverBorderColor: '#75D9FD',
      }
    ]
  }
}

export default Chart;