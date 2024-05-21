import {useState } from "react";
import { createApiData } from "../utils";

const useInstantAppointment = () => {
  const [appointmentType, setAppointmentType] = useState('')

  const handleInstantAppointment = async ()=>{
    try {
      const response = await createApiData(
        "https://shlok-mittal-lawyer-backend.vercel.app/api/v1/customer/instant/Appointment",
        {appointmentType}
      );
      successToast("Instant Appointment Successfully");
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