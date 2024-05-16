import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { successToast, warnToast } from "../Component/Toast";

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
  const [languages, setLanguages] = useState("");
  const [skills, setSkills] = useState("");
  const [barCertificateNo, setBarCertificateNo] = useState("");
  const [barRegistrationNo, setBarRegistrationNo] = useState("");
  const [experiance, setExperiance] = useState("");
  const [barRegistrationImage, setBarRegistrationImage] = useState("");
  const [barCertificateImage, setBarCertificateImage] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

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
    formData.append("skills[0]", skills);
    formData.append("barCertificateNo", barCertificateNo);
    formData.append("barRegistrationNo", barRegistrationNo);
    formData.append("barRegistrationImage", barRegistrationImage);
    formData.append("barCertificateImage", barCertificateImage);
    formData.append("aadhar", aadhar);
    formData.append("experiance", experiance);
    formData.append("languages[0]", languages);
    try {
      const response = await axios.post(
        "https://shlok-mittal-lawyer-backend.vercel.app/api/v1/lawyer/registration",
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
    barRegistrationImage,
    barCertificateImage,
    aadhar,
    barRegistrationNo,
    setBarRegistrationNo,
    isChecked,
    handleCheckboxChange,
    handleRegister,
    handleBarRegistrationImageChange,
    handleBarCertificateImageChange,
    handleAadharChange,
  };
};

export default useAdminLogin;
