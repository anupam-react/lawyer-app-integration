import { useEffect, useState } from "react";
import { fetchApiData } from "../utils";

const useConsultation = () => {
  const [allUpcomingConsult, setAllUpcomingConsult] = useState([])
  const [allPastConsult, setAllPastConsult] = useState([])
  const [allCancelConsult, setAllCancelConsult] = useState([])


  const getAllUpcomingConsult = async ()=>{
    const consultData = await fetchApiData('https://flyweisgroup.com/api/api/v1/lawyer/Appointment/upcomingAppointment')
    setAllUpcomingConsult(consultData?.data)
  }

  const getAllPastConsult = async ()=>{
    const document = await fetchApiData('https://flyweisgroup.com/api/api/v1/lawyer/pastAppointment')
    setAllPastConsult(document?.data)
  }

  const getAllCancelConsult = async ()=>{
    const document = await fetchApiData('https://flyweisgroup.com/api/api/v1/lawyer/allCancelAppointment')
    setAllCancelConsult(document?.data)
  }

  useEffect(()=>{
    getAllUpcomingConsult()
    getAllPastConsult()
    getAllCancelConsult()
  },[])

  return {
    allUpcomingConsult,
    allPastConsult,
    allCancelConsult
  };
};

export default useConsultation;