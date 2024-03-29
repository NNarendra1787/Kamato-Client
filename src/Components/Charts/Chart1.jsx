import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {LineChart, ResponsiveContainer, Legend, Tooltip, Line, XAxis, YAxis, CartesianGrid} from "recharts"

function Chart1() {
  const [chartData, setChartData] = useState([]);
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0)

  const RandomeNumber = (min, max)=>{
    return Math.floor(Math.random()*(max-min+1)) + min;
  }

  const GenrateRandom = ()=>{
    setNum(RandomeNumber(1.17, 40.99))
  }

  const Regenrate = ()=>{
    setNum1(RandomeNumber(1.13, 300.00))
  }



  useEffect(()=>{
      const url = "https://newtaskkamtobackend.onrender.com/data/takedata";
      axios.get(url).then((res)=>{
          setChartData(res.data)
          console.log(res.data);
      })

      GenrateRandom();
      Regenrate();
  },[])
  return (
    <div className='Chart1'>
      <p>Gross Revenue</p>
        <p className='num1'>${num}K</p>
        <p>${num1}K Previous Months</p>
      <ResponsiveContainer width='100%' aspect={1.5}>
            <LineChart data={chartData.filter((data)=> data.CharteTime === "Last 3 Months" && data.ChartNo === 2)} margin={{right: 5, left: 0, bottom: 0, top: 0}}>
                <CartesianGrid />
                <XAxis dataKey="Date" interval={"preserveStartEnd"}/>
                <YAxis></YAxis>
                <Legend />
                <Tooltip />
                <Line 
                dataKey="CurrentPeriod"
                stroke='blue'
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

export default Chart1