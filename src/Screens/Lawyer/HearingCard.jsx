import React from "react";
import "./style.scss";
const HearingCard = () => {
  return (
    <div className="hearing-container">
      <img
        src="./Ellipse 14.png"
        alt=""
        style={{ borderRadius: "50%", width: "90px", height: "90px" }}
      />
      <div>
        <div className="hearing-title">
          <div className="hearing-name">Yash Gupta</div>
          <div className="hearing-booked">30 min Booked</div>
        </div>
        <div className="hearing-Reason">
          <div  style={{ fontWeight:"normal" }}>Reason:</div>
          <div>Discussion regarding hearing of Real estate Case on Monday</div>
        </div>
        <div className="hearing-bottom">
          <div className="hearing-Language">
            <div style={{ fontWeight:"normal" }}>Language:</div>
            <div>English, hindi</div>
          </div>
          <div style={{ color:"#0F2C64" }}>Time: 12:00</div>
        </div>
      </div>
    </div>
  );
};

export default HearingCard;
