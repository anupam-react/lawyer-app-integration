import { useEffect, useState } from "react";
import { fetchApiData } from "../utils";

const useLawyerProfile = () => {
  const [UserInfo, setUserInfo] = useState([])
  const [cusomerInfo, setCustomerInfo] = useState([])
  const [WalletInfo, setWalletInfo] = useState([])

  const getUserInfo = async ()=>{
    const userData = await fetchApiData('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/lawyer/getProfile')
    setUserInfo(userData?.data)
  }
  const getCustomerInfo = async ()=>{
    const userData = await fetchApiData('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/customer/getProfile')
    setCustomerInfo(userData?.data)
  }

  const getWalletInfo = async ()=>{
    const wallet = await fetchApiData('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/user/getWallet')
    setWalletInfo(wallet?.data)
  }

  useEffect(()=>{
    getUserInfo()
    getCustomerInfo()
    getWalletInfo()
  },[])

  return {
    UserInfo,
    WalletInfo,
    cusomerInfo
  };
};

export default useLawyerProfile;
