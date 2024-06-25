/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterModal from "../../Modals/FilterModal";
import RemModal from "../../Modals/RemModal";
import Offcanvas from "react-bootstrap/Offcanvas";
import PaymentModal from "../../Modals/PaymentModal";
import { fetchApiData } from "../../utils";

const UserNav = () => {
  const [filterModal, setFilterModal] = useState(false);
  const [RemModalOpen, setRemModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const handleLogOut = ()=> {
    sessionStorage.removeItem("token");
    navigate('/')
  }

  const handleInputChange = async(event) => {
    setSearchTerm(event.target.value);
    let item = event.target.value;
   let  rating=2;
    let location="kolkata"
    try {
      const response = await fetchApiData(`https://shlok-mittal-lawyer-backend.vercel.app/api/v1/user/getLawyersWithFilter?${item}&rating=${rating}&location=${location}`);
      setSearchResults(response.results); // Assuming the API returns an array of results
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <PaymentModal show={paymentModal} onHide={() => setPaymentModal(false)} />
      <FilterModal show={filterModal} onHide={() => setFilterModal(false)} />
      <RemModal show={RemModalOpen} onHide={() => setRemModal(false)} />

      <div className="UserNav">
        <div className="left">
          <i class="fa-solid fa-bars" onClick={handleShow}></i>
          <img src="./Images/logo.png" alt="" onClick={() => navigate("/")} />
        </div>

        <div className="mid">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="search" placeholder="search" value={searchTerm}
        onChange={handleInputChange}/>
          <i
            className="fa-solid fa-filter"
            onClick={() => setFilterModal(true)}
            style={{ cursor: "pointer" }}
          ></i>
          <button onClick={() => setRemModal(true)}>Set Reminder</button>
        </div>

        <div className="right" style={{cursor:"pointer"}} onClick={() => navigate("/notification")}>
          <img src="./Images/98.png" alt="" />
        </div>
      </div>

      {/* OffCanvas */}
      <Offcanvas show={show} onHide={handleClose} className="ProfileOffcanvas">
        <Offcanvas.Header closeButton style={{ color: "#fff" }}>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="UserSideBar">
            <div className="two-Sec">
              <div className="left" style={{ cursor:"pointer"}} onClick={handleLogOut}>
                <i class="fa-solid fa-right-from-bracket"></i>
                <p>Log out</p>
              </div>

              <div
                className="right"
                onClick={() => {
                  handleClose();
                  setPaymentModal(true);
                }}
                style={{ cursor: "pointer" }}
              >
                <img src="./Images/95.png" alt="" />
                <p>₹5,000</p>
              </div>
            </div>

            <div className="center">
              <img src="./Images/97.png" alt="" />
              <p>Suhani Shukla</p>
              <div className="empty"></div>
            </div>

            <button onClick={() => navigate("/ten")}>My Lawyers</button>
            <button onClick={() => navigate("/ninth")}>
              Upcoming Consultation
            </button>
            <button onClick={() => navigate("/eleven")}>
              Instant Appointment
            </button>
            <button onClick={() => navigate("/twelve")}>
              {" "}
              Saved Documents
            </button>
            <button onClick={() => navigate("/ten")}>Book Appointment</button>
            <button onClick={() => navigate("/thirteen")}>
              Legal Services
            </button>
            <button className="lastOne">
              {" "}
              <i class="fa-solid fa-play"></i> Download our app now
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default UserNav;
