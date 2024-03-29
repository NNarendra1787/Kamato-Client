import React, { useEffect, useState } from "react";
import Chart1 from "./Charts/Chart1";
import Chart2 from "./Charts/Chart2";
import Chart3 from "./Charts/Chart3";
import Chart4 from "./Charts/Chart4";
import Chart5 from "./Charts/Chart5";
// import reffer from "./IMG/reffers.png"
import reffer from "./IMG/reffer2.jpg";
import reuser from "./IMG/reuser.jpg";

function AllCharts() {
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const RandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const GenrateRandom = () => {
    setCount2(RandomNumber(1.2, 10));
    setCount3(RandomNumber(2.2, 10));
  };

  useEffect(() => {
    GenrateRandom();
  }, []);

  return (
    <div>
      <section className="AllChartPart">
        <section className="FirstThree">
          <Chart1 />
          <Chart2 />
          <Chart3 />
          <div className="Part4">
            <p>Refer and Earn</p>
            <img src={reffer} alt="/" />
          </div>
        </section>
        <hr />
        <section className="Chart4WalaPart">
          <Chart4 />
          <section className="Chart4SecondPart">
            <div className="Chart4Borderpart">
              <h4>{count2}K</h4>
              <p>Number of total API Requests received in selected period.</p>
            </div>
            <div>
              <p>Chat Prompt Received</p>
              <h4>{count3}K</h4>
              <p>Total Chat Prompts Received by your AI Personality today.</p>
            </div>
          </section>
        </section>
        <section className="Chart5MainPart">
          <Chart5 />
          <section className="Chart5MidPart">
            <h4>Review & Rating</h4>
            <div className="ReviewRight">
              <div className="Mainreuser">
                <img src={reuser} alt="/" className="reuser" />
                <h6>Jamie Williams</h6>
              </div>
              <div className="Mainreuser">
                <i className="fa fa-star mystar"></i>
                <i className="fa fa-star mystar"></i>
                <i className="fa fa-star mystar"></i>
                <i className="fa fa-star mystar"></i>
                <h6>4 Star</h6>
              </div>
            </div>
            <div>
              <p>
                I've been thoroughly captivated by my conversations with the AI
                personality of Queen Elizabeth II on Kamoto.AI. The attention to
                detail in her responses and the regal charm in every.....
              </p>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default AllCharts;
