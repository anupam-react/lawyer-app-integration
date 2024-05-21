import {useState } from "react";
import { createApiData } from "../utils";
import { useRecoilState } from "recoil";
import { BookAppoint } from "../Component/Atoms/caseAtom";
import { successToast } from "../Component/Toast";

const useBookAppointment = () => {
  const [appointmentType, setAppointmentType] = useRecoilState(BookAppoint)


  const handleChange = (event) => {
    const { name, value } = event.target;
    setAppointmentType((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };


  const handleBookAppointment = async ()=>{
    try {
      const response = await createApiData(
        "https://shlok-mittal-lawyer-backend.vercel.app/api/v1/customer/createAppointment",
        {appointmentType}
      );
      successToast("Book Appointment Successfully");
    } catch (error) {
      console.log(error);
      return error;
    }

  }


  return {
    appointmentType,
    setAppointmentType,
    handleBookAppointment,
    handleChange,

  };
};

export default useBookAppointment;