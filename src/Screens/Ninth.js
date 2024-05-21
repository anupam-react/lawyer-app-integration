/** @format */

import React, { useEffect } from "react";
import HOC from "./User/HOC";
import useAllLawyers from "../hooks/useAllLawyers";
import LawyerCard from "./LawyerCard";
import ConsultCustomer from "./User/ConsultCustomer";
import useUpcomingAppointment from "../hooks/useUpcomingAppointment";

const Ninth = () => {
 const { upcomingAppointment } = useUpcomingAppointment() 
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  
  return (
    <>
      <h4 className="centerNinthHeading">Upcoming Consultation</h4>

      <div className="NinthFirst">
        <div className="left">
          {upcomingAppointment?.map((d, i)=>(
           <LawyerCard unique={i} data={d?.lawyer}/>
          ))}
        </div>
          <ConsultCustomer data={upcomingAppointment?.[0]}/>
      
      </div>
    </>
  );
};

export default HOC(Ninth);
