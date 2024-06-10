import { useEffect, useState } from "react";
import { fetchApiData } from "../utils";

const useHome = () => {
  const [trusted, setTrusted] = useState([])
  const [userLove, setUserLove] = useState([])
  const [legal, setLegal] = useState([])
  const [government, setGovernment] = useState([])

  const getTrusted = async ()=>{
    const data = await fetchApiData('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/Blog/getTrusted')
    setTrusted(data?.data)
  }

  const getUserLove = async ()=>{
    const data = await fetchApiData('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/Blog/getWhyUserLove')
    setUserLove(data?.data)
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
    getTrusted()
    getUserLove()
    getLegal()
    getGovernment()
  },[])

  return {
    trusted,
    legal,
    government,
    userLove
  };
};

export default useHome;