/** @format */

import React from "react";
import HOC from "./User/HOC";
import useDocument from "../hooks/useDocument";
import { Link } from "react-router-dom";

const TwelveScreen = () => {
  const { 
    allDocuments,
    singleDocument,
    allUsers,
    caseId, setCaseId,
    desc , setDesc,
    image , setImage,
    handleSeveDocument,
    getDocumentInfo
  } = useDocument();
  return (
    <>
      <div className="twelveFirst">
        <div className="left" style={{height:"100vh" , overflow:"scroll"}}>
          <p className="head">Saved Documents</p>

          {allDocuments?.map((d, i) => (
            <Link to={`${d?.image}`}>
            <div
              className="two-sec"
              style={{ cursor: "pointer" }}
              onClick={() => getDocumentInfo(d?._id)}
              key={i}
            >
              <p>Case name:{d?.casesId}</p>
              <img src="./Images/100.png" alt="" />
            </div>
            </Link>
          ))}
        </div>

        <div className="right">
          <p className="head">Case notes</p>
          <div style={{display:"flex", flexDirection:"column", gap:"5px" , padding:"10px 20px"}}>
                <label style={{color:"#1D1D1D" , fontWeight:500}}>Select Case</label>
              <select name="" id=""  value={caseId} onChange={(e)=> setCaseId(e.target.value)}>
                {allUsers?.map((d, i)=>(
                    <option value={d?._id}>{d?.caseTitle}</option>

                ))}
              </select>
            </div>

          <div className="desc">
 
            <input type="text" placeholder="description" value={desc} onChange={(e)=> setDesc(e.target.value)}/>
          </div>

          <div className="two-sec">
            <p style={{ width: "300px", overflow: "hidden" }}>
              {image?.name}
            </p>
            <label htmlFor="image-file">
            <img src="./Images/100.png" alt="" />
            </label>
            <input id="image-file"  type="file" style={{display:"none"}}  onChange={(e)=> setImage(e.target.files[0])}/>
          </div>
          <button onClick={handleSeveDocument}>Save</button>
        </div>
      </div>
    </>
  );
};

export default HOC(TwelveScreen);
