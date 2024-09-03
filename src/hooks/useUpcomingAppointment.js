import { useEffect, useState } from "react";
import { fetchApiData } from "../utils";

const useUpcomingAppointment = () => {
  const [upcomingAppointment, setUpcomingAppointment] = useState([])

  const getUpcomingAppointmentInfo = async ()=>{
    const userData = await fetchApiData('https://flyweisgroup.com/api/api/v1/customer/upcomingAppointment')
    setUpcomingAppointment(userData?.data?.filter((d)=> d?.joinStatus !== "Pending"))
  }


  useEffect(()=>{
    getUpcomingAppointmentInfo()
  },[])

  return {
    upcomingAppointment
  };
};

export default useUpcomingAppointment;