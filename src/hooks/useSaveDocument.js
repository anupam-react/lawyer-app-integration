import { useEffect, useState } from "react";
import { createApiData, fetchApiData } from "../utils";
import { successToast } from "../Component/Toast";

const useSaveDocument = () => {
  const [allDocuments, setAllDocuments] = useState([])
  const [singleDocument, setSingleDocument] = useState([])
  const [allUsers, setAllUsers] =  useState([])
  const [caseId, setCaseId] = useState("")
  const [desc , setDesc] = useState("")
  const [image , setImage] = useState({})


  const getAllDocumnt = async ()=>{
    const documentData = await fetchApiData('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/lawyer/document/all')
    setAllDocuments(documentData?.data)
  }

  const getAllCase = async ()=>{
    const caseData = await fetchApiData('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/lawyer/case/all')
    setAllUsers(caseData?.data)

  }

  const getDocumentInfo = async (id)=>{
    const document = await fetchApiData(`https://shlok-mittal-lawyer-backend.vercel.app/api/v1/lawyer/document/get/${id}`)
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
        'https://shlok-mittal-lawyer-backend.vercel.app/api/v1/lawyer/document/add',
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
    handleSeveDocument,
    getDocumentInfo,
    caseId, setCaseId,
    desc , setDesc,
    image , setImage,
    allUsers
  };
};

export default useSaveDocument;
