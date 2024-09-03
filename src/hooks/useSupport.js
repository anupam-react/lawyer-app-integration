import { useEffect, useState } from "react";
import { fetchApiData } from "../utils";

const useSupport = () => {
  const [support, setSupport] = useState([])

  const getSupport = async ()=>{
    const userData = await fetchApiData('https://flyweisgroup.com/api/api/v1/viewContactDetails')
    setSupport(userData?.data)
  }


  useEffect(()=>{
    getSupport()
  },[])

  return {
    support
  };
};

export default useSupport;
