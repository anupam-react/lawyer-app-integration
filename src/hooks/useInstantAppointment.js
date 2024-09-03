import {useState } from "react";
import { createApiData } from "../utils";
import { successToast } from "../Component/Toast";

const useInstantAppointment = () => {
  const [appointmentType, setAppointmentType] = useState('')

  const handleInstantAppointment = async ()=>{
    try {
      const response = await createApiData(
        "https://flyweisgroup.com/api/api/v1/customer/instant/Appointment",
        { appointmentType: "Call"}
      );
      successToast("Send Instant Appointment Successfully");
    } catch (error) {
      console.log(error);
      return error;
    }

  }


  return {
    setAppointmentType,
    handleInstantAppointment
  };
};

export default useInstantAppointment;