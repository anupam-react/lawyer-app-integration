import { useState } from "react";
import { createApiData, } from "../utils";
import { successToast } from "../Component/Toast";

const useQuery = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [query, setQuery] = useState("");

  const handleRequest = async (e) => {
    e.preventDefault();
    
    const formData = {
      name,
      email,
      mobile,
      query,
    };

    try {
      const response = await createApiData(
        "https://flyweisgroup.com/api/api/v1/help/createQuery",
        formData
      );
      successToast("Request Successfully");
      setName('')
      setEmail('')
      setMobile('')
      setQuery('')
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    mobile,
    setMobile,
    query,
    setQuery,
    handleRequest,
  };
};

export default useQuery;
