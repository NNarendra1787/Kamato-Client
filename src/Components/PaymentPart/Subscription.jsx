import React, { useEffect, useState } from "react";
import axios from "axios";
import AddToCart from "./AddToCart";
import NavbarTop from "../Navbars/NavbarTop";
import NavbarSide from "../Navbars/NavbarSide";

function Subscription() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://newtaskkamtobackend.onrender.com/data/askPay").then((res) => {
      setData(res.data);
      console.log("This is the response", res.data);
    });
  }, []);
  return (
    <div>
      <NavbarTop />
      <NavbarSide />
      <section>
        {data.slice(0, 1).map((item, ind) => (
          <AddToCart 
          CurrentPlan={item.CurrentPlan} 
          Amount={item.Amount}
          NextBilingAmt={item.NextBilingAmt}
          NextBilingDate={item.NextBilingDate}
          />
        ))}
      </section>
    </div>
  );
}

export default Subscription;
