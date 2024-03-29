import React from "react";
import person from "../IMG/user.png";
import LogRegi from "../Log/LogRegi";

function NavbarTop() {
  return (
    <>
      <nav className="navbarTop">
        <section className="NavPart">
          <div className="Market">
            <i className="fas fa-light fa-store"></i>
            <p>Marketplace</p>
          </div>
          <div className="dollers">$0</div>
          <div>
            <i className="fas fa-bell"></i>
          </div>
          <div className="person">
            <img src={person} alt="/" />
            <LogRegi />
          </div>
        </section>
      </nav>
    </>
  );
}

export default NavbarTop;
