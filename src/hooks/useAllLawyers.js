import { useEffect, useState } from "react";
import { fetchApiData } from "../utils";

const useAllLawyers = () => {
  const [UserInfo, setUserInfo] = useState([])

  const getUserInfo = async ()=>{
    const userData = await fetchApiData('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/admin/lawyer')
    setUserInfo(userData?.data)
  }


  useEffect(()=>{
    getUserInfo()
  },[])

  return {
    UserInfo
  };
};

export default useAllLawyers;
