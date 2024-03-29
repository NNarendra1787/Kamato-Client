import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {LineChart, ResponsiveContainer, Legend, Tooltip, Line, XAxis, YAxis, CartesianGrid} from "recharts"

function Chart3() {
    const [chartData, setChartData] = useState([]);
    const [num, setNum] = useState(1);

    const RandomNumberFunction = (min, max)=>{
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const GenrateRandom = ()=>{
        setNum(RandomNumberFunction(1, 100))
    }
  
    useEffect(()=>{
        const url = "https://newtaskkamtobackend.onrender.com/data/takedata";
        axios.get(url).then((res)=>{
            setChartData(res.data)
            console.log(res.data);
        })

        GenrateRandom();
    },[])
    return (
      <div className='Chart3'>
        <h6>Feedbacks</h6>
        <h5>{num}</h5>
        <ResponsiveContainer width='100%'  aspect={1.2}>
              <LineChart data={chartData.filter((data)=> data.CharteTime === "Last 3 Months" && data.ChartNo === 3)} margin={{right: 5, left: 0, bottom: 0, top: 0}}>
                  <CartesianGrid />
                  <XAxis dataKey="Date" interval={"preserveStartEnd"}/>
                  <YAxis></YAxis>
                  <Legend />
                  <Tooltip />
                  <Line 
                  dataKey="CurrentPeriod"
                  stroke='yellowgreen'
                  activeDot={{r:4}} />
                  <Line 
                  dataKey="PreviousPeriod"
                  stroke='red'
                  activeDot={{r:4}} />
              </LineChart>
          </ResponsiveContainer>
      </div>
    )
  }
  
  export default Chart3