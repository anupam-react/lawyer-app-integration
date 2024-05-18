/** @format */

import React, { useEffect, useState } from "react";
import LawyerHOC from "./LawyerHOC";
import "./style.scss";
import ConsultationCard from "./ConsultationCard";
import HearingCard from "./HearingCard";
import { fetchApiData } from "../../utils";

const HearingLawyer = () => {
  const [allUpcomingConsult, setAllUpcomingConsult] = useState([])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getAllUpcomingConsult = async ()=>{
    const consultData = await fetchApiData('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/lawyer/Appointment/upcomingAppointment')
    setAllUpcomingConsult(consultData?.data)
  }

  useEffect(() => {
    getAllUpcomingConsult()
  }, []);

  return (
    <>
      <div className="case-container">
        <div className="case-left">
          <h4 className="heading">Upcoming Cases</h4>
          <div className="box-container">
            {allUpcomingConsult?.map((d,i)=>(
              <HearingCard data={d}/>
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

export default LawyerHOC(HearingLawyer);
