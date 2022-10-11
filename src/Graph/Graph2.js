import ReactApexChart from "react-apexcharts";
import React from 'react'

const Graph2 = () => {

    const config = {
        series: [{
          name: "Performance",
          data: [10, 21, 35, 41, 59, 62, 79, 81, 98]
        }],
        options: {
          chart: {
            toolbar: {
              show: true
            },
          },
      
          dataLabels: {
            enabled: true
          },   
        
          stroke: {
            curve: "smooth"
          },
         
          title: {
            text: 'A Line Chart',
            align: 'left'
          },  
        
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct'],
            title: {
              text: 'Month'
            }
          },
      
          yaxis: {
            title: {
              text: 'Performance'
            }
          }
        }
      }
    return (
        <ReactApexChart options={config.options} series={config.series} type="line" />
      )
    }

export default Graph2

