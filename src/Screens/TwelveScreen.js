/** @format */

import React from "react";
import HOC from "./User/HOC";
import useDocument from "../hooks/useDocument";

const TwelveScreen = () => {
  const { 
    allDocuments,
    singleDocument,
    getDocumentInfo
  } = useDocument();
  return (
    <>
      <div className="twelveFirst">
        <div className="left">
          <p className="head">Saved Documents</p>

          {allDocuments?.map((d, i) => (
            <div
              className="two-sec"
              style={{ cursor: "pointer" }}
              onClick={() => getDocumentInfo(d?._id)}
              key={i}
            >
              <p>Case name:{d?.casesId}</p>
              <img src="./Images/100.png" alt="" />
            </div>
          ))}
        </div>

        <div className="right">
          <p className="head">Case notes</p>

          <div className="desc">
          <p> {singleDocument?.desc}</p>
            <input type='text' />
          </div>

          <div className="two-sec">
            <p style={{ width: "300px", overflow: "hidden" }}>
              {singleDocument?.image}
            </p>
            <img src={"./Images/100.png"} alt="" />
          </div>
          <button>Download</button>
        </div>
      </div>
    </>
  );
};

export default HOC(TwelveScreen);
