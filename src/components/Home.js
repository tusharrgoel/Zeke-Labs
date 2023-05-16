import React from "react";
import "./Home.css";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import NoAdultContentIcon from "@mui/icons-material/NoAdultContent";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from '@mui/icons-material/LooksTwo';

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
            at just <span style={{ color: "#0096ff" }}>₹99</span> per year!
          </p>
        </div>
        <div className="pointers">
          <h6>
            <MenuBookIcon className="iconn" fontSize="large" />
            <p className="topic">100+</p> Job relevant courses
          </h6>
          <h6>
            <AccessTimeIcon className="iconn" fontSize="Large" />
            <p className="topic">20,000+ </p>Hours of content
          </h6>
          <h6>
            <LiveTvIcon className="iconn" fontSize="large" />
            <p className="topic">Exclusive</p> webinar access
          </h6>
          <h6>
            <SchoolIcon className="iconn" fontSize="large" />
            Scholarship worth <p className="topic">₹94,500</p>
          </h6>
          <h6>
            <NoAdultContentIcon className="iconn" fontSize="large" />
            <p className="topic">Ad Free</p> learning experience
          </h6>
        </div>
      </div>

      <div className="form">
        <section className="number">
          <LooksOneIcon className = "signinumber"fontSize="large"></LooksOneIcon>
          <LooksTwoIcon className = "signinumber"fontSize="large"></LooksTwoIcon>
        </section>
        <section className="number">
          <p>Signin</p>
          <p>Subscribe</p>
        </section>
        <h3>Select your subscription plan</h3>
        <section className="programmeic">
          <RadioButtonCheckedIcon fontSize="large"></RadioButtonCheckedIcon>
          <p>12 Months Subscription</p>
          <div className="rate">
            <p> Total <strong> ₹999</strong></p>
            <p>₹8/mo</p>
          </div>
        </section>
        <section className="programmesp">
          <CheckCircleIcon
            className="special"
            fontSize="large"
          />
          <p>12 Months Subscription</p>
          <div className="rate">
            <p>Total <strong>₹179</strong></p>
            <p>₹15/mo</p>
          </div>
        </section>
        <section className="programme">
          <RadioButtonUncheckedIcon fontSize="large" />
          <p>6 Months Subscription</p>
          <div className="rate">
            <p>  Total <strong> ₹149</strong></p>
            <p>₹25/mo</p>
          </div>
        </section>
        <section className="programme">
          <RadioButtonUncheckedIcon fontSize="large" />
          <p>3 Months Subscription</p>
          <div className="rate">
            <p>  Total <strong> ₹99</strong></p>
            <p>₹33/mo</p>
          </div>
        </section>

        <div className="checkout">
          <section className="fee">
            <p>Subscription Fee</p>
            <p>₹ 18,500</p>
          </section>
          <section className="limited">
            <p className="time">Limited Time Offer</p>
            <p><strong>- ₹18,401</strong></p>
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
        <img clasName = "payicon" src = "./src/images/razor.png" alt="Razorpay icon"/>
      </div>
    </div>
  );
}

export default Home;
