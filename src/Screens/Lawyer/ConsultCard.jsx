import React from 'react'
import "./style.scss";

const ConsultCard = () => {
  return (
    <div className="consult-container">
    <img
      src="./Ellipse 14.png"
      alt=""
      style={{ borderRadius: "50%", width: "90px", height: "90px" }}
    />
    <div className="consult-main">
        <div className="consult-name">Yash Gupta</div>
      <div className="consult-title">
        <div className="consult-booked">Real estate consults </div>
        <div className="consult-booked">30 min Booked</div>
      </div>
     
      <div className="consult-bottom">
        <div className="consult-language">
          <div>English, hindi</div>
        </div>
        <div style={{ color:"#0F2C64" }}>Time: 12:00</div>
      </div>

      <div className="consult-Reason">
        <div  style={{ fontWeight:"normal" }}>Reason:</div>
        <div>Real estate Consult</div>
      </div>
    </div>
  </div>
  )
}

export default ConsultCard