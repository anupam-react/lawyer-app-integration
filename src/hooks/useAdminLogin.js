import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { successToast, warnToast } from "../Component/Toast";
import { fetchApiData } from "../utils";

const useAdminLogin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [firstLineAddress, setFirstLineAddress] = useState("");
  const [secondLineAddress, setSecondLineAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [languages, setLanguages] = useState([]);
  const [skills, setSkills] = useState("");
  const [categoryId, setCategoryId] = useState([]);
  const [barCertificateNo, setBarCertificateNo] = useState("");
  const [barRegistrationNo, setBarRegistrationNo] = useState("");
  const [experiance, setExperiance] = useState("");
  const [barRegistrationImage, setBarRegistrationImage] = useState("");
  const [barCertificateImage, setBarCertificateImage] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [category, setCategory] = useState()
  const [language, setLanguage] = useState()
  const [selectedLang, setSelectedLang] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  async function fetchCategory() {
    const data = await fetchApiData('https://flyweisgroup.com/api/api/v1/category');
    setCategory(data?.data);
  }
  async function fetchLanguage() {
    const data = await fetchApiData('https://flyweisgroup.com/api/api/v1/admin/Language/All');
    setLanguage(data?.data);
  }

  useEffect(()=>{
    fetchCategory()
    fetchLanguage()
  },[])

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleBarRegistrationImageChange = (e) => {
    const file = e.target.files[0];
    setBarRegistrationImage(file);
  };

  const handleBarCertificateImageChange = (e) => {
    const file = e.target.files[0];
    setBarCertificateImage(file);
  };

  const handleAadharChange = (e) => {
    const file = e.target.files[0];
    setAadhar(file);
  };
  const handleLanguage = (option) => {
    console.log(option)
    setSelectedLang(option)
    setLanguages(option?.map((d)=> d?.value))
  
  };
  const handleCategory = (option) => {
   setSelectedCategory(option)
   setCategoryId(option?.map((d)=> d?.value))
  };


  const handleRegister = async (event) => {
    event.preventDefault();
    if (!email || !password || !name || !phone) {
      return warnToast("Fill all the fields");
    }
    if (!isChecked) {
      return warnToast("Please Agree all terms & conditions");
    }
    console.log(email, password);
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("fullName", name);
    formData.append("phone", phone);
    formData.append("firstLineAddress", firstLineAddress);
    formData.append("secondLineAddress", secondLineAddress);
    formData.append("country", country);
    formData.append("state", state);
    formData.append("district", district);
    formData.append("pincode", pincode);
    // formData.append("skills[0]", skills);
    categoryId?.map((d,i)=>(
      formData.append(`categoryId[${i}]`, d)

    ))
    formData.append("barCertificateNo", barCertificateNo);
    formData.append("barRegistrationNo", barRegistrationNo);
    formData.append("barRegistrationImage", barRegistrationImage);
    formData.append("barCertificateImage", barCertificateImage);
    formData.append("aadhar", aadhar);
    formData.append("experiance", experiance);
    languages?.map((d,i)=>(
      formData.append(`languages[${i}]`, d)

    ))
    console.log(formData)
    try {
      const response = await axios.post(
        "https://flyweisgroup.com/api/api/v1/lawyer/registration",
        formData
      );
      successToast("Regsiter Successfully");
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
    password,
    setPassword,
    phone,
    setPhone,
    firstLineAddress,
    setFirstLineAddress,
    secondLineAddress,
    setSecondLineAddress,
    country,
    setCountry,
    state,
    setState,
    district,
    setDistrict,
    pincode,
    setPincode,
    languages,
    setLanguages,
    barCertificateNo,
    setBarCertificateNo,
    experiance,
    setExperiance,
    skills,
    setSkills,
    categoryId,
     setCategoryId,
    barRegistrationImage,
    barCertificateImage,
    aadhar,
    barRegistrationNo,
    setBarRegistrationNo,
    isChecked,
    category,
    selectedLang,
    selectedCategory,
    language,
    handleLanguage,
    handleCategory,
    handleCheckboxChange,
    handleRegister,
    handleBarRegistrationImageChange,
    handleBarCertificateImageChange,
    handleAadharChange,
  };
};

export default useAdminLogin;
