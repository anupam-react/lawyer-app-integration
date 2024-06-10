import { useEffect, useState } from "react";
import { fetchApiData } from "../utils";

const useFooter = () => {
  const [policy, setPolicy] = useState([])

  const getPolicy = async ()=>{
    const userData = await fetchApiData('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/privacy/all')
    setPolicy(userData)
  }


  useEffect(()=>{
    getPolicy()
  },[])

  return {
    policy
  };
};

export default useFooter;
