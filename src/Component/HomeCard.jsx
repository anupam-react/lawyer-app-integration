import React from "react";
import "./home.scss";
const HomeCard = ({ title, desc }) => {
  return (
    <div className="homeContainer">
      <p className="title">{title}</p>
      <div className="desc-container">
        <p className="desc">{desc}</p>
        <div>
          <img src="../Rectangle 3262.png" alt="" style={{ width: "100px" }} />
          <p
            style={{
              fontWeight: "700",
              textAlign: "center",
              fontSize: "18px",
              width: "200px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
            volutpat sit aenean varius tempor, commodo facilisi.{" "}
            <span style={{ color: "#0F2C64" }}> Read more...</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
