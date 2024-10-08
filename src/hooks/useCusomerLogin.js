import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { successToast, warnToast } from "../Component/Toast";

const useCusomerLogin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      return warnToast("Fill all the fields");
    }

    console.log(email, password);
    const formData = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        "https://flyweisgroup.com/api/api/v1/customer/signin",
        formData
      );
      console.log(response?.data);
      sessionStorage.setItem("token", response?.data?.accessToken);
      navigate("/ninth");
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const handleGoogleLoginUser = async (data) => {
    console.log(data);
    const formData = {
      email: data?.email,
      phone: data?.phoneNumber,
      fullName: data?.displayName,
      socialType: "Google",
    };
    try {
      const response = await axios.post(
        "https://flyweisgroup.com/api/api/v1/customer/socialLogin",
        formData
      );
      console.log(response?.data);
      sessionStorage.setItem("token", response?.data?.accessToken);
      navigate("/ninth");
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const handleGoogleLoginLawyer = async (data) => {
    console.log(data);
    const formData = {
      email: data?.email,
      phone: data?.phoneNumber,
      fullName: data?.displayName,
      socialType: "Google",
    };
    try {
      const response = await axios.post(
        "https://flyweisgroup.com/api/api/v1/lawyer/socialLogin",
        formData
      );
      console.log(response?.data);
      sessionStorage.setItem("token", response?.data?.accessToken);
      navigate("/mycase");
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const handleAdminLogin = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      return warnToast("Fill all the fields");
    }

    console.log(email, password);
    const formData = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        "https://flyweisgroup.com/api/api/v1/lawyer/signin",
        formData
      );
      console.log(response?.data);
      sessionStorage.setItem("token", response?.data?.accessToken);
      navigate("/mycase");
    } catch (error) {
      console.log(error);
      navigate("/mycase");
      return error;
    }
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
    const formData = {
      fullName: name,
      email,
      phone,
      password,
    };
    try {
      const response = await axios.post(
        "https://flyweisgroup.com/api/api/v1/customer/registration",
        formData
      );
      successToast("Regsiter Successfully");
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
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
    otp,
    setOtp,
    newPass,
    setNewPass,
    confirmPass,
    setConfirmPass,
    isChecked,
    handleCheckboxChange,
    handleRegister,
    handleAdminLogin,
    handleLogin,
    handleGoogleLoginUser,
    handleGoogleLoginLawyer,
  };
};

export default useCusomerLogin;
