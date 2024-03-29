import React from "react";
import NavbarTop from "./Navbars/NavbarTop";
import NavbarSide from "./Navbars/NavbarSide";
import AllCharts from "./AllCharts";

function Dashboard() {
  return (
    <div>
      <section className="Dashboard">
        <div>
          <NavbarSide />
        </div>
        <section className="RightSide">
          <NavbarTop />
          <div className="Dashbord-name">
            <h4>Dashboard</h4>
            <p>Home-Dashboard</p>
          </div>
          <div className="Chodna">
            {/* <div> */}
              <select name="" id="Timing">
                <option value="">Last 7 Days</option>
                <option value="">Last 4 Weeks</option>
                <option value="">Last 3 Months</option>
              </select>
              <div>
                <input
                  type="date"
                  name="data"
                  id="date"
                  placeholder="31 Dec 2023 - 30 Mar 2024"
                />
              </div>
              Previous Period
              <select name="" id="Optional"> 
                <option value="">Previous Period</option>
              </select>
            {/* </div> */}
          </div>
          <AllCharts />
        </section>
      </section>
    </div>
  );
}

export default Dashboard;

{
  /* <section className='Dashboard'>
        <NavbarTop />
        <NavbarSide />
        <div className='Chodna'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor, placeat rerum architecto, eaque doloribus quae minus voluptatum quidem pariatur ipsa minima repudiandae et ullam iure fugit aliquam veritatis praesentium? Beatae quaerat sapiente fuga facilis expedita suscipit illo porro inventore.
        </div>
        <AllCharts />
      </section> */
}
