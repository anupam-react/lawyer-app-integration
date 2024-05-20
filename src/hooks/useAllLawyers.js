import { useEffect, useState } from "react";
import { fetchApiData } from "../utils";

const useAllLawyers = () => {
  const [UserInfo, setUserInfo] = useState([])

  const getUserInfo = async ()=>{
    const userData = await fetchApiData(' /v1/admin/lawyer')
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
