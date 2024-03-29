import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import emoji from "../IMG/emoji.png";

function NavbarSide() {
  const [click, setClick] = useState(false);
  const Name = localStorage.getItem("name");
  const LastName = localStorage.getItem("lname");

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="SideBar">
      {/* <section className={click ? "nav-menu active" : "nav-menu"}> */}
      <nav className="NavbarSide">
        <section>
          <div>
            <div className="EmoPart">
              <img src={emoji} alt="/" className="emoji" />
              <div className="TwoPara">
                <p>
                  <span>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    {Name}
                    &nbsp;
                    {LastName}
                  </span>
                   
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                  AI Personality
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="dop">
          <div className="no1 nav-item">
            <i class="fa-solid fa-table-list"></i>
            <p>Dashboard</p>
          </div>
          <div className="no2 nav-item">
            <i className="fa-regular fa-user"></i>
            <p>My AI Personality</p>
          </div>
          <div className="no3 dropdown nav-item">
            <i class="fa-solid fa-user-pen"></i>
            <label
              className="btn dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Edit AI Personality
            </label>
            <ul className="dropdown-menu">
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Behavior & Traits
                </NavLink>
              </li>
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Avtar and Visuals
                </NavLink>
              </li>
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Voice & Audio
                </NavLink>
              </li>
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Knowledge & Base
                </NavLink>
              </li>
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Settings and Teams
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="no4 dropdown nav-item">
            <i class="fa-solid fa-layer-group"></i>
            <lable
              className="btn dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Train AI Personalitys
            </lable>
            <ul className="dropdown-menu">
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Train by Charts
                </NavLink>
              </li>
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Train by Public Links
                </NavLink>
              </li>
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Train by Privet Data
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="no5 dropdown nav-item">
            <i className="fas fa-store"></i>
            <label
              className="btn dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Monotize and Distributs
            </label>
            {/* <div className="dropdown-content"> */}
            <ul className="dropdown-menu">
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Overview
                </NavLink>
              </li>
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Listninng & Monotize
                </NavLink>
              </li>
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Erning and Report
                </NavLink>
              </li>
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Feedback and Rating
                </NavLink>
              </li>
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Widgets
                </NavLink>
              </li>
            </ul>
            {/* </div> */}
          </div>
          <div className="no6 dropdown nav-item">
            <i class="fa-regular fa-face-grin-hearts"></i>
            <lable
              className="btn  dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Communcate and Enggege
            </lable>
            <ul className="dropdown-menu">
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Social Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  <li>Social Media Account</li>
                </NavLink>
              </li>
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  <li>Messenger Bots</li>
                </NavLink>
              </li>
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  <li>Your Inbox</li>
                </NavLink>
              </li>
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  <li>AI Interation Histroy</li>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="no7 dropdown nav-item">
            <i className="fas fa-server"></i>
            <lable
              className="btn dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Apis and Logs
            </lable>
            <ul className="dropdown-menu">
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  <li>Overview</li>
                </NavLink>
              </li>
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  <li>Apis Keys</li>
                </NavLink>
              </li>
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  <li>Event</li>
                </NavLink>
              </li>
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  <li>Logs</li>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="no8 dropdown nav-item">
            <i class="fa-solid fa-wallet"></i>
            <lable
              className="btn dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Billing & Querts
            </lable>
            <ul className="dropdown-menu">
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  <li>Subcription</li>
                </NavLink>
              </li>
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  <li>User Quets</li>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="no9 dropdown nav-item">
            <i class="fa-solid fa-gear"></i>
            <lable
              className="btn dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              User Setting
            </lable>
            <ul className="dropdown-menu">
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  <li>Profiles</li>
                </NavLink>
              </li>
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  <li>Refels</li>
                </NavLink>
              </li>
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  <li>Locals</li>
                </NavLink>
              </li>
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  <li>Notifications</li>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="no10 dropdown nav-item">
            <i class="fa-regular fa-money-bill-1"></i>
            <lable
              className="btn dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Chat Credit
            </lable>
            <ul className="dropdown-menu">
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  <li>Overview and Recharge</li>
                </NavLink>
              </li>
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  <li>Usage and History</li>
                </NavLink>
              </li>
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  <li>API Subscription</li>
                </NavLink>
              </li>
              <li>
                <NavLink
                  extact
                  to="/"
                  className="dropdown-item"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  <li>Fan Club Subscription</li>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="no11 nav-item">
            <i class="fa-regular fa-newspaper"></i>
            <p>Feed</p>
          </div>
          <div className="no12 nav-item">
            <i class="fa-solid fa-phone"></i>
            <p>Call</p>
          </div>
          <div className="no13 nav-item">
            <i class="fa-solid fa-headphones"></i>
            <p>Support</p>
          </div>
          <div className="no14 nav-item">
            <i class="fa-solid fa-globe"></i>
            <p>AI Personality Page</p>
            <i class="fa-solid fa-arrow-up-right-from-square right-icon"></i>
          </div>
          <div className="no15 nav-item">
            <i class="fa-solid fa-store"></i>
            <p>Open AI MarketPlace</p>
            <i class="fa-solid fa-arrow-up-right-from-square right-icon"></i>
          </div>
        </section>
      </nav>
      {/* <div className="nav-icon" onClick={handleClick}>
          {click ? <FaAngleDoubleLeft />  : <FaAngleDoubleRight /> }
        </div> */}
      {/* </section> */}
    </div>
  );
}

export default NavbarSide;
