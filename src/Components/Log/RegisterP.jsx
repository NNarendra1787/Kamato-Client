import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import RegisterImg from "../IMG/Register2.png";
import "./LoginRe.css";

function RegisterP() {
  const [name, setName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const [responseData, setResponseData] = useState(null);

  const navi = useNavigate();

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleLastName = (e) => {
    e.preventDefault();
    setLName(e.target.value);
  };

  const handleContact = (e) => {
    e.preventDefault();
    setContact(e.target.value);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const RegisterUser = async(clientData)=>{
    const url = "https://newtaskkamtobackend.onrender.com/data/auth0/register";
    const res = await axios.post(url, clientData);
    setResponseData(res.data);
    console.log(res.data);

    if(res.data.token){
      console.log(res.data.token);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("name", res.data.name);
      localStorage.setItem("lname", res.data.lname);
      localStorage.setItem("email", res.data.email);
      localStorage.setItem("contact", res.data.contact);

      navi("/dashboard");
      console.log(responseData);
    }
    else{
      window.alert("Already Register User")
      navi("/login")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const clientData = {
      name: name,
      lname: lname,
      email: email,
      contact: contact,
      password: password,
    };
    setName("");
    setEmail("");
    setLName("");
    setContact("");
    setPassword("");
    RegisterUser(clientData);
  };

  return (
    <div>
      <section className="RegisterMain">
        <section id="leftImg">
          <img src={RegisterImg} alt="/" loading="lazy" />
        </section>
        <section id="RightPart">
          <div className="rightLogo">{/* <img src={logo} alt="/" /> */}</div>
          <div className="TextSection">
            <h5>Adventure start hear 🚀</h5>
            <h6>Make your app mangement easy and fun!</h6>
          </div>
          <section className="Form">
            <div>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  id="user"
                  required="true"
                  autoComplete="username"
                  autoCorrect="username"
                  value={name}
                  onChange={handleName}
                  placeholder="Enter FirstName"
                />
              </label>
            </div>
            <div>
              <label>
                Last Name:
                <input
                  type="text"
                  name="name"
                  id="user"
                  required="true"
                  autoComplete="username"
                  autoCorrect="username"
                  value={lname}
                  onChange={handleLastName}
                  placeholder="Enter SurName"
                />
              </label>
            </div>
            <div>
              <label>
                Contact No:
                <input
                  type="text"
                  name="companyname"
                  id="user"
                  required="true"
                  autoComplete="username"
                  autoCorrect="username"
                  value={contact}
                  onChange={handleContact}
                  placeholder="Enter Company Name"
                />
              </label>
            </div>
            <div>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  id="email"
                  required="true"
                  autoComplete="@gmail.com"
                  autoCorrect="email"
                  value={email}
                  onChange={handleEmail}
                  placeholder="companyemail@gmail.com"
                />
              </label>
            </div>
            <div>
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  id="password"
                  required="true"
                  autoComplete="pass"
                  autoCorrect="pass"
                  value={password}
                  onChange={handlePassword}
                  placeholder="..........."
                />
              </label>
            </div>
            <div>
              <input type="checkbox" name="check" id="check" />I agree to{" "}
              <span>privacy policy and term</span>
            </div>
            <button
              type="submit"
              value="submit"
              onClick={handleSubmit}
              id="btn"
            >
              Sign Up
            </button>
          </section>
          <div className="link">
            <p className="linkk">
              Already have an account? <Link to="/login">Sign in instead</Link>
            </p>
          </div>
          <div className="line">
            <p className="or">or</p>
          </div>
          <section className="sponcers">
            <div>
              <i class="fab fa-facebook-f"></i>
            </div>
            <div>
              <i class="fab fa-google"></i>
            </div>
            <div>
              <i class="fab fa-twitter"></i>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default RegisterP;
