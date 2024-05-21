import { useEffect, useState } from "react";
import { fetchApiData } from "../utils";

const useMyLawyers = () => {
  const [UserInfo, setUserInfo] = useState([])

  const getUserInfo = async ()=>{
    const userData = await fetchApiData('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/customer/getmyLawyer')
    setUserInfo(userData?.data)
  }


  useEffect(()=>{
    getUserInfo()
  },[])

  return {
    UserInfo
  };
};

export default useMyLawyers;
