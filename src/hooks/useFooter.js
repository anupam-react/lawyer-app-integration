import { useEffect, useState } from "react";
import { fetchApiData } from "../utils";

const useFooter = () => {
  const [policy, setPolicy] = useState([])
  const [legal, setLegal] = useState([])
  const [government, setGovernment] = useState([])
  const [catInfo, setCatInfo] = useState([])
  

  
  async function fetchCategory() {
    const data = await fetchApiData('https://flyweisgroup.com/api/api/v1/category');
    setCatInfo(data?.data);
  }


  const getPolicy = async ()=>{
    const userData = await fetchApiData('https://flyweisgroup.com/api/api/v1/privacy/all')
    setPolicy(userData)
  }
  const getLegal = async ()=>{
    const data = await fetchApiData('https://flyweisgroup.com/api/api/v1/category?type=legal')
    setLegal(data?.data)
  }
  const getGovernment = async ()=>{
    const data = await fetchApiData('https://flyweisgroup.com/api/api/v1/category?type=government')
    setGovernment(data?.data)
  }

  useEffect(()=>{
    getPolicy()
    getLegal()
    getGovernment()
    fetchCategory()
  },[])

  return {
    policy,
    legal,
    government,
    catInfo
  };
};

export default useFooter;
