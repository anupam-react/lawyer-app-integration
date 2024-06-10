import { useEffect, useState } from "react";
import { fetchApiData } from "../utils";

const useAbout = () => {
  const [about, setAbout] = useState([])

  const getAbout = async ()=>{
    const userData = await fetchApiData('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/aboutUs/all')
    setAbout(userData?.data)
  }


  useEffect(()=>{
    getAbout()
  },[])

  return {
    about
  };
};

export default useAbout;
