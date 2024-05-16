import { useEffect, useState } from "react";
import { successToast } from "../Component/Toast";
import { createApiData, fetchApiData } from "../utils";

const useAddCase = () => {
  const [caseTitle, setCaseTitle] = useState("");
  const [caseNumber, setCaseNumber] = useState("");
  const [courtName, setCourtName] = useState("");
  const [courtNumber, setCourtNumber] = useState("");
  const [judge, setJudge] = useState("");
  const [nextHearingDate, setNextHearingDate] = useState("");
  const [lastDateOfHearing, setLastDateOfHearing] = useState("");
  const [remainderDate, setRemainderDate] = useState('');
  const [hearingTime, setHearingTime] = useState("");
  const [remainderType, setRemainderType] = useState("");
  const [remainderTime, setRemainderTime] = useState("");
  const [type, setType] = useState("");
  const [userId, setUserId] = useState("");
  const [allUsers, setAllUsers] = useState([])

  const getAllUsers = async ()=>{
    const userData = await fetchApiData('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/admin/users')
    setAllUsers(userData?.data)
  }

  useEffect(()=>{
    getAllUsers()
  },[])
  console.log(remainderType , type)

  const handleAddCase = async (event) => {
    event.preventDefault();
    console.log(remainderType , type)
    const formData = {
      userId,
      caseTitle,
      caseNumber,
      courtName,
      courtNumber,
      judge,
      nextHearingDate,
      lastDateOfHearing,
      remainderDate,
      hearingTime,
      remainderType,
      remainderTime,
      type
    };
console.log(formData)
    try {
      const response = await createApiData(
        "https://shlok-mittal-lawyer-backend.vercel.app/api/v1/lawyer/case/add",
        formData
      );
      successToast("Add Case Successfully");
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return {
    caseTitle,
    setCaseTitle,
    caseNumber,
    setCaseNumber,
    courtName,
    setCourtName,
    courtNumber,
    setCourtNumber,
    judge,
    setJudge,
    nextHearingDate,
    setNextHearingDate,
    lastDateOfHearing,
    setLastDateOfHearing,
    remainderDate,
    setRemainderDate,
    hearingTime,
    setHearingTime,
    remainderType,
    setRemainderType,
    remainderTime,
    setRemainderTime,
    type,
    setType,
    userId, 
    setUserId,
    allUsers,

    handleAddCase,
  };
};

export default useAddCase;
