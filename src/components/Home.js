import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="mainlockup">
        <div className="header">
          <p> Access curated courses worth </p>
          <p className="subheader">
            <span className="money" style={{ textDecoration: "line-through" }}>
              ₹18500
            </span>{" "}
            at just <span>₹99</span> per year!
          </p>
        </div>
        <div className="pointers">
          <h6>
            <p className="topic">100+</p> Job relevant courses
          </h6>
          <h6>
            <p className="topic">20,000+ </p>Hours of content
          </h6>
          <h6>
            <p className="topic">Exclusive</p> webinar access
          </h6>
          <h6>
            Scholarship worth <p className="topic">₹94,500</p>
          </h6>
          <h6>
            <p className="topic">Ad Free</p> learning experience
          </h6>
        </div>
      </div>

      <div className="form">
        <h3>Select your subscription plan</h3>
        <section className="programme">
          <input type="checkbox" />
          <p>12 Months Subscription</p>
          <div className="rate">
            <p> Total ₹999</p>
            <p>₹8/mo</p>
          </div>
        </section>
        <section className="programme">
          <input type="checkbox" />
          <p>12 Months Subscription</p>
          <div className="rate">
            <p> Total ₹179</p>
            <p>₹15/mo</p>
          </div>
        </section>
        <section className="programme">
          <input type="checkbox" />
          <p>6 Months Subscription</p>
          <div className="rate">
            <p> Total ₹149</p>
            <p>₹25/mo</p>
          </div>
        </section>
        <section className="programme">
          <input type="checkbox" />
          <p>3 Months Subscription</p>
          <div className="rate">
            <p> Total ₹99</p>
            <p>₹33/mo</p>
          </div>
        </section>

        <div className="checkout">
          <section className="fee">
            <p>Subscription Fee</p>
            <p>₹ 18,500</p>
          </section>
          <section className="limited">
            <p>Limited Time Offer</p>
            <p>- ₹18,401</p>
          </section>
          <section className="fee">
            <p>Total(Incl. of 18% GST)</p>
            <p>
              {" "}
              <strong>₹ 149</strong>
            </p>
          </section>
        </div>
        <div className="buttons">
          <button className="cancel">CANCEL</button>
          <button className="pay">PROCEED TO PAY</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
