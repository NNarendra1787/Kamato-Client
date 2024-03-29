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

function Chart4() {
  const [chartData, setChartData] = useState([]);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const RandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const GenrateRandom = () => {
    setCount(RandomNumber(1.12, 20));
    setCount1(RandomNumber(10, 99));
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
    <div className="Chart4Main">
      <h4>Today</h4>
      <section className="Chart4UpPart">
        <div>
          <p>Gross Volumn</p>
          <h4>${count}K</h4>
        </div>
        <div>
            <p>Yesterday</p>
          <h4>${count1}.00</h4>
        </div>
      </section>
      <section>
        <ResponsiveContainer width="100%" aspect={4}>
          <LineChart
            data={chartData.filter((data)=> data.CharteTime === "Last 3 Months" && data.ChartNo === 4)} margin={{right: 5, left: 0, bottom: 0, top: 0}}
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

export default Chart4;
