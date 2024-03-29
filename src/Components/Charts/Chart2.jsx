import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {LineChart, ResponsiveContainer, Legend, Tooltip, Line, XAxis, YAxis, CartesianGrid} from "recharts"

function Chart2() {
    const [chartData, setChartData] = useState([]);
    const [num, setNum] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);

    const RandomNumber = (min, max)=>{
        return Math.floor(Math.random()* (max - min + 1)) + min;
    }

    const GenrateRandom = ()=>{
        setNum(RandomNumber(1.15, 30))
    }

    const GenrateRandom1 = ()=>{
        setNum1(RandomNumber(75, 600))
    }
    const GenrateRandom2 = ()=>{
        setNum2(RandomNumber(30, 1000))
    }
    const GenrateRandom3 = ()=>{
        setNum3(RandomNumber(100, 500))
    }

    useEffect(()=>{
        const url = "https://newtaskkamtobackend.onrender.com/data/takedata";
        axios.get(url).then((res)=>{
            setChartData(res.data)
            console.log(res.data);
        })
        GenrateRandom();
        GenrateRandom1();
        GenrateRandom2();
        GenrateRandom3();
    },[])


  return (
    <div className='Chart2'>
        <p>API Requests</p>
        <p>Successful: <span>{num}</span>  Failed: <span>{num1}.00</span></p>
        <p>Previous</p>
        <p>Successful: <span>{num2}.00</span>  Failed:<span>{num3}.00</span></p>
        <ResponsiveContainer width="100%" aspect={1.2}>
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
                stroke='yellowgreen'
                activeDot={{r:4}} />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart2