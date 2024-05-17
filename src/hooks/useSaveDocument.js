import { useEffect, useState } from "react";
import { fetchApiData } from "../utils";

const useSaveDocument = () => {
  const [allDocuments, setAllDocuments] = useState([])
  const [singleDocument, setSingleDocument] = useState([])

  const getAllDocumnt = async ()=>{
    const documentData = await fetchApiData('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/lawyer/document/all')
    setAllDocuments(documentData?.data)
  }

  const getDocumentInfo = async (id)=>{
    const document = await fetchApiData(`https://shlok-mittal-lawyer-backend.vercel.app/api/v1/lawyer/document/get/${id}`)
    setSingleDocument(document?.data)
  }

  useEffect(()=>{
    getAllDocumnt()
  },[])

  return {
    allDocuments,
    singleDocument,
    getDocumentInfo
  };
};

export default useSaveDocument;
