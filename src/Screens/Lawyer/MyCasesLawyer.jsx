/** @format */

import React, { useEffect } from "react";
import LawyerHOC from "./LawyerHOC";
import "./style.scss";
import CaseCard from "./CaseCard";
import ConsultationCard from "./ConsultationCard";

const MyCasesLawyer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="case-container">
        <div className="case-left">
          <h4 className="heading">My Cases</h4>
          <div className="box-container">
            <CaseCard />
            <CaseCard />
            <CaseCard />
            <CaseCard />
            <CaseCard />
          </div>
        </div>

        <div className="case-right">
        <h4 className="heading">Upcoming<br />
       <p style={{fontSize:"30px" , marginTop:"26px"}}>Consultation</p> 
        </h4>
        <div>
        <ConsultationCard />
        </div>
        </div>
      </div>
    </>
  );
};

export default LawyerHOC(MyCasesLawyer);
