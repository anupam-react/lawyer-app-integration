/** @format */

import React, { useEffect, useState } from "react";
import LawyerHOC from "./LawyerHOC";
import "./style.scss";
import CaseCard from "./CaseCard";
import ConsultationCard from "./ConsultationCard";
import { fetchApiData } from "../../utils";

const MyCasesLawyer = () => {
  const [allCases , setAllCases] = useState([])
  const [allUpcomingConsult, setAllUpcomingConsult] = useState([])

  const getAllCase = async ()=>{
    const caseData = await fetchApiData('https://flyweisgroup.com/api/api/v1/lawyer/case/all')
    setAllCases(caseData?.data)
  }

  const getAllUpcomingConsult = async ()=>{
    const consultData = await fetchApiData('https://flyweisgroup.com/api/api/v1/lawyer/Appointment/upcomingAppointment')
    setAllUpcomingConsult(consultData?.data)
  }

  useEffect(() => {
    getAllCase()
    getAllUpcomingConsult()
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(allCases)

  return (
    <>
      <div className="case-container">
        <div className="case-left">
          <h4 className="heading">My Cases</h4>
          <div className="box-container">
            {allCases?.map((d, i)=>(
              <div key={i}>
              <CaseCard data={d}/>
              </div>
            ))}
          </div>
        </div>

        <div className="case-right">
        <h4 className="heading">Upcoming<br />
       <p style={{fontSize:"30px" , marginTop:"26px"}}>Consultation</p> 
        </h4>
        <div>
        <ConsultationCard data={allUpcomingConsult?.[0]}/>
        </div>
        </div>
      </div>
    </>
  );
};

export default LawyerHOC(MyCasesLawyer);
