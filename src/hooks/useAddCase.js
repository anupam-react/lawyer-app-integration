import { useEffect, useState } from "react";
import { successToast } from "../Component/Toast";
import { createApiData, fetchApiData } from "../utils";
import { useRecoilState } from "recoil";
import { formState } from "../Component/Atoms/caseAtom";

const useAddCase = () => {
  const [casedata, setCaseData] = useRecoilState(formState)
  const [allUsers, setAllUsers] = useState([])

  const getAllUsers = async ()=>{
    const userData = await fetchApiData('https://flyweisgroup.com/api/api/v1/admin/users')
    setAllUsers(userData?.data)
  }
 
  useEffect(()=>{
    getAllUsers()
  },[])


  const handleChange = (event) => {
    const { name, value } = event.target;
    setCaseData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleAddCase = async (event) => {
    event.preventDefault();
    const formData = {
      userId: casedata?.userId,
      caseTitle: casedata?.caseTitle,
      caseNumber: casedata?.caseNumber,
      courtName: casedata?.courtName,
      courtNumber: casedata?.courtNumber,
      judge: casedata?.judge,
      nextHearingDate: casedata?.nextHearingDate,
      lastDateOfHearing: casedata?.lastDateOfHearing,
      remainderDate: casedata?.remainderDate,
      hearingTime: casedata?.hearingTime,
      remainderType: casedata?.remainderType,
      remainderTime: casedata?.remainderTime,
      type: casedata?.type,
      setRemainder: casedata?.setRemainder
    };
console.log(formData)
    try {
      const response = await createApiData(
        "https://flyweisgroup.com/api/api/v1/lawyer/case/add",
        formData
      );
      successToast("Add Case Successfully");
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return {
    allUsers,
    casedata,
    setCaseData,
    handleChange,
    handleAddCase,
  };
};

export default useAddCase;
