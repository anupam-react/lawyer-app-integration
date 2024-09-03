import { useEffect, useState } from "react";
import { createApiData, fetchApiData } from "../utils";
import { successToast } from "../Component/Toast";

const useDocument = () => {
  const [allDocuments, setAllDocuments] = useState([])
  const [singleDocument, setSingleDocument] = useState([])
  const [allUsers, setAllUsers] =  useState([])
  const [caseId, setCaseId] = useState("")
  const [desc , setDesc] = useState("")
  const [image , setImage] = useState({})

  const getAllDocumnt = async ()=>{
    const documentData = await fetchApiData('https://flyweisgroup.com/api/api/v1/lawyer/document/all')
    setAllDocuments(documentData?.data)

  }

  const getAllCase = async ()=>{
    const caseData = await fetchApiData('https://flyweisgroup.com/api/api/v1/customer/getCase')
    setAllUsers(caseData?.data)

  }

  const getDocumentInfo = async (id)=>{
    const document = await fetchApiData(`https://flyweisgroup.com/api/api/v1/customer/document/get/${id}`)
    setSingleDocument(document?.data)
  }



  useEffect(()=>{
    getAllDocumnt()
    getAllCase()
  },[])

  const handleSeveDocument = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("caseId", caseId);
    formData.append("desc", desc);
    formData.append("image", image);

    try {
      const response = await createApiData(
        'https://flyweisgroup.com/api/api/v1/lawyer/document/add',
        formData
      );
      successToast("Add Document");
      getAllDocumnt()
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return {
    allDocuments,
    singleDocument,
    allUsers,
    caseId, setCaseId,

    desc , setDesc,
    image , setImage,
    handleSeveDocument,
    getDocumentInfo
  };
};

export default useDocument;
