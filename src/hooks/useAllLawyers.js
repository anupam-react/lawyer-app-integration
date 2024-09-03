import { useEffect, useState } from "react";
import { fetchApiData } from "../utils";
import { useRecoilState } from "recoil";
import { InstantsingleInfo, singleInfo } from "../Component/Atoms/caseAtom";

const useAllLawyers = () => {
  const [UserInfo, setUserInfo] = useState([])
  const [singleLawyer , setSingleLawyer] = useRecoilState(singleInfo)
  const [singleInstantLawyer , setSingleInstantLawyer] = useRecoilState(InstantsingleInfo)

  const getUserInfo = async ()=>{
    const userData = await fetchApiData('https://flyweisgroup.com/api/api/v1/admin/lawyer')
    setUserInfo(userData?.data)
    setSingleLawyer(userData?.data?.[0])
    setSingleInstantLawyer(userData?.data?.[0])
  }


  useEffect(()=>{
    getUserInfo()
  },[])

  return {
    UserInfo,
    singleLawyer,
    singleInstantLawyer,
    setSingleLawyer,
    setSingleInstantLawyer
  };
};

export default useAllLawyers;
