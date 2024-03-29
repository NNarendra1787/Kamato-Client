import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

function Chart5() {
  const [chartData, setChartData] = useState([]);
  const [count, setCount] = useState(0);

  const RandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const GenrateRandom = () => {
    setCount(RandomNumber(3.2, 5));
  };

  useEffect(() => {
    const url = "https://newtaskkamtobackend.onrender.com/data/takedata";
    axios.get(url).then((res) => {
      setChartData(res.data);
      console.log(res.data);
    });

    GenrateRandom();
  }, []);

  return (
    <div className="Chart5FullPart">
      <section>
        <h4>Reviews an Rating</h4>
        <div>
          <h6>Current Rating</h6>
          <h4><span>
            <i className="fas fa-star"></i></span>{count}</h4>
        </div>
        <ResponsiveContainer width="100%" aspect={4}>
          <LineChart
            data={chartData.filter((data)=> data.CharteTime === "Last 3 Months" && data.ChartNo === 5)} margin={{right: 5, left: 0, bottom: 0, top: 0}}
          >
            <CartesianGrid />
            <XAxis dataKey="Date" interval={"preserveStartEnd"} />
            <YAxis></YAxis>
            <Legend />
            <Tooltip />
            <Line dataKey="CurrentPeriod" stroke="blue" activeDot={{ r: 4 }} />
            <Line dataKey="PreviousPeriod" stroke="red" activeDot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
}

export default Chart5;
