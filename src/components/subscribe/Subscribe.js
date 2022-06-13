import "./Subscribe.css";
import React from "react";

const Suscribe = () => {
  return (
    <div className="subscribe">
      <div className="content">
        <h2>Join Our DeFi Community</h2>
        <form
          action="https://getform.io/f/77fbb036-7744-4eb7-920c-56e24af8fec2"
          method="POST"
        >
          <div className="form-container display-col">
            <input type="email" name="email" placeholder="Enter your email" />
            <button className="btn">Sign Up</button>
          </div>
          <div className="form-container">
            <input type="checkbox" />{" "}
            <p>Yes, I agree to receive email communications from DeFi.</p>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Suscribe;
