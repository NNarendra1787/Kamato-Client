import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logimg from "../IMG/Login.png"
import "./LoginRe.css"

function LoginP() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseData, setResponseData] = useState(null);

  const navi = useNavigate();

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const LoginUser = async(clientData)=>{
    const url = "https://newtaskkamtobackend.onrender.com/data/auth0/login";
    const res = await axios.post(url, clientData);
    setResponseData(res.data);
    console.log(res.data);
    
    if(res.data.token){
      console.log(res.data.token);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("name", res.data.userData.name);
      localStorage.setItem("userId", res.data.userData._id);
      
      navi("/dashboard");
      console.log(responseData);
    }else{
      window.alert("Invalid Credential");
      navi("/");
    }
  };
 

  const submitHandler = (e) => {
    e.preventDefault();
    const clientData = {
      email: email,
      password: password,
    };
    setEmail("");
    setPassword("");
    LoginUser(clientData);
  };
  return (
    <div>
      <section className="RegisterMain">
        <section id="leftImgg">
          <img src={logimg} alt="/" loading="lazy" />
        </section>
        <section id="RightPart">
          <div className="rightLogo">
            {/* <img src={logo} alt="/" /> */}
          </div>
          <div className="TextSection">
            <h4>Welcome to Hubspot! 👋🏻</h4>
            <p>Please sign-in to your account and start the adventure</p>
          </div>
          <div className="info">
            <p>Admin Email:jiodan.com/Pass:jio123</p>
            <p>Client Email:client@demo.com/Pass:client123</p>
            <p>But i suggest you to gothorugh register</p>
          </div>
          <section className="Form">
            <div>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="@gmail.com"
                  autoCorrect="email"
                  required="required"
                  value={email}
                  onChange={handleEmail}
                  placeholder="admin@demo.com"
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
                  required="required"
                  autoComplete="password"
                  autoCorrect="true"
                  value={password}
                  onChange={handlePassword}
                  placeholder="...."
                />
              </label>
            </div>
            <div className="mid-center">
              <label>
                <input type="checkbox" name="check" id="check" />
                Remember Me
              </label>
              <Link to="/forgot">Forgot Password</Link>
            </div>
            <button
              type="submit"
              value="submit"
              onClick={submitHandler}
              id="btn"
            >
              Login
            </button>
          </section>
          <div className="link">
            <p className="linkk">
              Not have an account? <Link to="/">Sign in now</Link>
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

export default LoginP;
