import axios from 'axios';
import { id } from 'date-fns/locale';
import React , {Component,useState} from 'react'
import { useEffect } from 'react';
import Chart from "react-apexcharts";
import { YAxis } from 'recharts';

const App = () => {
    

      const [open,setOpen] = useState();
      const [close,setClose] = useState();
      const [high,setHigh] = useState();
      const [low,setLow] = useState();

      const [options,setObject] = useState({
    xaxis: {
      categories: [],
      title:
      {
        // text:"Days",
      }
    },

    yaxis: {
      title: {
        text: 'Close'
      }
    }
  })
  const [series,setSeries] = useState([{
    data : [] ,
  }])

  useEffect(() => {
      const userId = [];
      const id = [{}];
      const id1 = [] ;
      
      axios.get('https://api.marketstack.com/v1/eod?access_key=1b5080d618bd02eafcf5ef657c6ae249&symbols=DJI.INDX&limit=40').then(response => {
      (response.data.data.reverse().map((item,index) => {
          userId.push(item.date.slice(0,10));
          id.push({ c : item.close, o: item.open,h: item.high,l: item.low})

        }))
        id.shift() ;
        setClose(id[id.length-1].c);
        setOpen(id[id.length-1].o);
        setHigh(id[id.length-1].h);
        setLow(id[id.length-1].l);
        id.map((item) =>
        {
            id1.push(item.c);
        })
        console.log(id1);
        id1.shift();
        setObject({ 
          chart: {
                type: 'area',
                events: {
                  click(event, chartContext, config) {   
                  },

                
              }
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 90, 100]
            },

          title : {
              display : true ,
              text : "fors"
          }
      
          },
          dataLabels: {
            enabled: false
          },
          colors: ["#277BC0"],
          stroke: {
            width: 3
          },
          markers: {
            size: 1,
            colors: ["#000524"],
            strokeColor: "#00BAEC",
            strokeWidth: 3
          },
          tooltip: {
            theme : "dark",
            style: {
              fontSize: '15px',
              border : "2px solid blue"
            },
          },
          legend: {
            show: true,
          },
          xaxis: {
            categories: userId
          },
        })
        setSeries([{
          
          name : "Close",
          data : id1,
          
        },
      
      ])
        
    
      }).catch((e) =>{
        alert(e);
      })

      
     
      
  },[])
  
  return (

        <div className='m-0 flex-col bcbr h-auto p-2 pr-10 ml-2'>

                  <div className='flex flex-row justify-evenly'>
                          <button>
                          <div className='' style={{"color":"#36A5F4"}} >DOW</div>
                          </button>
                          <button>
                          <div className='' >NASDAQ</div>
                          </button>
                          <button>
                          <div className=''>S&P500</div>
                          </button>
                  </div>
                  
                  <div className='flex justify-center'>
                          <div>$33,309.51</div>
                  </div>

                  <div className='flex justify-center'>
                          <div className='' style={{"color":"rgb(75, 180, 12)"}}>+535.10 (+1.63%)</div>
                  </div>
                
                <div>
                  <Chart
                  options = {options}
                  series = {series} 
                  type="area"  
                  width={500} 
                  height={300}
                  />

                     <div className='flex flex-row ml-auto' 
                     style={{"fontSize":"18px","fontWeight":"700"}}
                     >
                     <p className='mx-auto'> Close : {close} </p>
                     <p className='mx-auto '>  Open : {open} </p>
                     </div>

                      <div className='flex flex-row mx-auto'
                     style={{"fontSize":"18px","fontWeight":"700"}}
                      >
                      <p className='mx-auto '> High : {high} </p>
                      <p className='mx-auto '>  Low : {low} </p>
                      </div>
                </div>
            </div>
 
       
  )
}

export default App