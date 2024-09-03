import { useEffect, useState } from "react";
import { fetchApiData } from "../utils";

const useMyLawyers = () => {
  const [UserInfo, setUserInfo] = useState([])

  const getUserInfo = async ()=>{
    const userData = await fetchApiData('https://flyweisgroup.com/api/api/v1/customer/getmyLawyer')
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
