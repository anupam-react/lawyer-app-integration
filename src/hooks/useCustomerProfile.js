import { useEffect, useState } from "react";
import { fetchApiData } from "../utils";

const useCustomerProfile = () => {
  const [UserInfo, setUserInfo] = useState([])
  const [WalletInfo, setWalletInfo] = useState([])

  const getUserInfo = async ()=>{
    const userData = await fetchApiData('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/customer/getProfile')
    setUserInfo(userData?.data)
  }

  const getWalletInfo = async ()=>{
    const wallet = await fetchApiData('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/user/getWallet')
    setWalletInfo(wallet?.data)
  }

  useEffect(()=>{
    getUserInfo()
    getWalletInfo()
  },[])

  return {
    UserInfo,
    WalletInfo
  };
};

export default useCustomerProfile;
