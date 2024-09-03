import { useEffect, useState } from "react";
import { fetchApiData } from "../utils";

const useReview = () => {
  const [review, setReview] = useState([])

  const getReview = async ()=>{
    const userData = await fetchApiData('https://flyweisgroup.com/api/api/v1/user/allRating' )
    setReview(userData?.data)
  }


  useEffect(()=>{
    getReview()
  },[])

  return {
    review
  };
};

export default useReview;