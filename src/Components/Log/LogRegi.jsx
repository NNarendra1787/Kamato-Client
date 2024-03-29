import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function LogRegi() {
  const Name = localStorage.getItem("name");
  const lName = localStorage.getItem("lname")
  const [show, setShow] = useState(localStorage.getItem("loggedIn"));
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  };
  console.log(show, click);

  const handleLogout = () => {
    localStorage.clear();
    setShow(!show);
  };

  const RenderProfile = () => {
    if (show) {
      return (
        <div className="dropdown Name-links">
          <label className="name">
            <span className="Name">{Name.slice(0, 1).toUpperCase()}</span> Hi{" "}
            {Name.slice(0,13)}
          </label>
          <div className="dropdown-content">
            <div className="nav-item">
              <NavLink
                exact
                to="/dashboard"
                onClick={handleClick}
                className="nav-links"
              >
                {Name}{lName}
              </NavLink>
              <NavLink
                exact
                to="/login"
                className="nav-links"
                onClick={handleLogout}
              >
                Logout
              </NavLink>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="dropdown">
          <Link
            className="btn btn-secondary dropdown-toggle"
            to="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-user-circle"></i>
          </Link>

          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/">
                Signup
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div>
      <RenderProfile />
    </div>
  );
}

export default LogRegi;
