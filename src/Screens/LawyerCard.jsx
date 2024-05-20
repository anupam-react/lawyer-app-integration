import React from 'react'

const LawyerCard = ({unique, data}) => {
  return (
    <div className="two-sec" key={unique}>
    <div>
      <img
        src=""
        alt=""
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "20px",
        }}
      />
      <div style={{ position: "relative" }}>
        <img
          src="./Group 9457.png"
          alt=""
          style={{ width: "90px", height: "60px", marginTop: "-40px" }}
        />
        <div
          style={{
            position: "absolute",
            top: "-15px",
            right: "14%",
            color: "white",
            fontSize: "10px",
            fontWeight: 600,
          }}
        >
          Legal Advisor
        </div>
      </div>
    </div>
    <div className="mid">
      <p style={{
           fontSize:"20px",
            fontWeight:900,
          }}>Advocate. {data?.fullName || data?.firstName + ' ' + data?.lastName}</p>
      <span  style={{ fontWeight: 700 }}>Legal Property Lawyer</span>
      <br />
      {data?.languages?.map((d, i)=>(
          <span key={i} style={{ fontWeight: 500 , fontSize:"12px" }}>{d +  ', '}</span>

      ))}
      <div className="two">
        <span style={{ fontWeight: 700 }}>Exp: {data?.experiance}</span>
        <div style={{ position: "relative" }}>
          <img src="./Group (2).png" alt="" />
          <div
            style={{
              position: "absolute",
              top: "5px",
              left: "18%",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <img
              src="./Star 2.png"
              alt=""
              style={{ height: "12px", width: "10px" }}
            />
            <div style={{ color: "white", fontSize: "12px" }}>{data?.rating}</div>
          </div>
        </div>
      </div>

      <h6>30 min. consultation</h6>
    </div>

    <div className="right">
      <div style={{ color: "#FF0808", fontSize: "14px" }}>consultation fee</div>
      <div style={{ color: "#FF0808", fontSize: "20px" , fontWeight:900 }}>₹{data?.hearingFee}</div>

      <button style={{ fontSize: "14px", fontWeight:700 , width:"120px" }}>Consult now</button>
    </div>
  </div>
  )
}

export default LawyerCard