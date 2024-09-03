import { useEffect, useState } from "react";
import { fetchApiData } from "../utils";

const useTransaction = () => {
  const [transaction, setTransaction] = useState([])

  const getTransaction = async ()=>{
    const userData = await fetchApiData('https://flyweisgroup.com/api/api/v1/user/allTransactionUser')
    setTransaction(userData?.data?.reverse())
  }


  useEffect(()=>{
    getTransaction()
  },[])

  return {
    transaction
  };
};

export default useTransaction;
