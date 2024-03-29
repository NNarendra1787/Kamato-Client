import React from "react";
import { useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { add } from "../Redux/CartSlice";
import { NavLink, useNavigate } from "react-router-dom";

function AddToCart(item) {
  const { CurrentPlan, Amount, NextBilingAmt, NextBilingDate } = item;
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("userId");
  const navi = useNavigate();

  const makePayment = async (
    CurrentPlan,
    Amount,
    NextBilingAmt,
    NextBilingDate
  ) => {
    const stripe = await loadStripe(
      "pk_test_51O9gy5SEFOzonOOAGqAqnOEOCndCTqEGO47tUrynni8khJTBlLUxfPMbeQGKMkYozcEhkSWmIdLRf9buJ6X5ce8o00ZWsdfGOC"
    );

    const body = {
      products: [
        {
          id: id,
          name: CurrentPlan,
          price: 1500,
          Amount: Amount,
          NextBilingAmt: NextBilingAmt,
          NextBilingDate: NextBilingDate,
          quantity: 1,
        },
      ],
    };

    const headers = {
      "content-type": "application/json",
    };

    const response = await fetch(
      // "https://prepbytesserverbackend.onrender.com/api/create-checkout-session",
      "https://newtaskkamtobackend.onrender.com/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error);
    }
  };

  const handleCart = (CurrentPlan, Amount, NextBilingAmt, NextBilingDate) => {
    if (token) {
      dispatch(
        add({
          CurrentPlan: CurrentPlan,
          Amount: Amount,
          NextBilingAmt: NextBilingAmt,
          NextBilingDate: NextBilingDate,
        })
      );
    } else {
      window.alert("Please Login First");
      navi("/login");
    }
  };

  return (
    <div>
      <section className="MainBox">
        <h4>Biling</h4>
        <h6>Home - Biling</h6>
        <div className="TopLinks">
          <NavLink
            to="/subscription"
            style={({ isActive }) => {
              return {
                color: isActive ? "yellowgreen" : "black",
                borderBottom: isActive
                  ? "1px solid yellowgreen"
                  : "1px solid black",
              };
            }}
          >
            Subscription
          </NavLink>
          <NavLink
            to="/biling"
            style={({ isActive }) => {
              return {
                color: isActive ? "yellowgreen" : "black",
                borderBottom: isActive
                  ? "1px solid yellowgreen"
                  : "1px solid black",
              };
            }}
          >
            User Quests
          </NavLink>
        </div>
        <section className="BilingOrder">
          <div className="upperPart">
            <p className="Biling">Biling</p>
            <button
              className="bottom--button"
              onClick={() => {
                makePayment(CurrentPlan, Amount, NextBilingAmt, NextBilingDate);
                handleCart(CurrentPlan, Amount, NextBilingAmt, NextBilingDate);
              }}
            >
              Claim Subscription
            </button>
          </div>
          <section className="BilingDataBox">
            <div>
              <p className="one">Current Plan</p>
              <p className="two1">{CurrentPlan}</p>
            </div>
            <hr />
            <div>
              <p className="one">Amount</p>
              <p className="two2">INR ${Amount}.00</p>
            </div>
            <hr />
            <div>
              <p className="one">Next Biling Amount</p>
              <p className="two3">INR ${Amount}.00</p>
            </div>
            <hr />
            <div>
              <p className="one">Subscription Id</p>
              <p className="two4">{id}</p>
            </div>
            <hr />
            <div>
              <p className="one">Next Biling Date</p>
              <p className="two5">{NextBilingDate}</p>
            </div>
          </section>
          <div className="Databata">
            <p className="h6">
              You can manage your subscription, payment menthod, and download
              invoices from your billing portal.
            </p>
          </div>
          <section className="lastBtn">
            <button
              className="bottom--button-1"
              onClick={() => {
                makePayment(CurrentPlan, Amount, NextBilingAmt, NextBilingDate);
                handleCart(CurrentPlan, Amount, NextBilingAmt, NextBilingDate);
              }}
            >
              Update Subscription
            </button>
            <button
              className="bottom--button-2"
              onClick={() => {
                makePayment(CurrentPlan, Amount, NextBilingAmt, NextBilingDate);
                handleCart(CurrentPlan, Amount, NextBilingAmt, NextBilingDate);
              }}
            >
              Access Biling Protal
            </button>
          </section>
        </section>
      </section>
      {/* <button
        className="bottom--button"
        onClick={() => {
          makePayment(CurrentPlan,Amount, NextBilingAmt, NextBilingDate);
          handleCart(CurrentPlan,Amount, NextBilingAmt, NextBilingDate);
        }}
      >
        Test Now
      </button> */}
    </div>
  );
}

export default AddToCart;
