/** @format */

import React from "react";
import HOC from "./User/HOC";
import useAllLawyers from "../hooks/useAllLawyers";
import LawyerCard from "./LawyerCard";
import AppoinmentCustomer from "./User/AppoinmentCustomer";

const Appointment = () => {
  const { UserInfo , singleLawyer , setSingleLawyer } = useAllLawyers()
  return (
    <>
      <h4 className="centerNinthHeading">Lawyers</h4>

      <div className="NinthFirst">
        <div className="left">
          {UserInfo?.map((d, i)=>(
         <LawyerCard unique={i} data={d} setSingleLawyer={setSingleLawyer}/>
          ))}
        
        </div>

       <AppoinmentCustomer data={singleLawyer} />
      </div>
    </>
  );
};

export default HOC(Appointment);
