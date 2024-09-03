import { useEffect, useState } from "react";
import { fetchApiData } from "../utils";

const useCity = () => {
  const [city, setCity] = useState([])
  const [popularCity, setPopularCity] = useState([])


  const getPopularCity = async ()=>{
    const data = await fetchApiData('https://flyweisgroup.com/api/api/v1/City/getCityPopular')
    setPopularCity(data?.data)
  }
  const getCity = async ()=>{
    const data = await fetchApiData('https://flyweisgroup.com/api/api/v1/City/getCity')
    setCity(data?.data)
  }



  useEffect(()=>{
    getPopularCity()
    getCity()
  },[])

  return {
    popularCity,
    city,
  };
};

export default useCity;