import { useEffect, useState } from "react";
import { fetchApiData } from "../utils";

const useFooter = () => {
  const [policy, setPolicy] = useState([])
  const [legal, setLegal] = useState([])
  const [government, setGovernment] = useState([])

  const getPolicy = async ()=>{
    const userData = await fetchApiData('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/privacy/all')
    setPolicy(userData)
  }
  const getLegal = async ()=>{
    const data = await fetchApiData('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/category?type=legal')
    setLegal(data?.data)
  }
  const getGovernment = async ()=>{
    const data = await fetchApiData('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/category?type=government')
    setGovernment(data?.data)
  }

  useEffect(()=>{
    getPolicy()
    getLegal()
    getGovernment()
  },[])

  return {
    policy,
    legal,
    government
  };
};

export default useFooter;
