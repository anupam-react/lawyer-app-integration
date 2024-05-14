/** @format */

import React, { useState } from "react";
import ServiceModal from "../Modals/ServiceModal";
import CunsultationModal from "../Modals/ConsultationModal";
import { useNavigate } from "react-router-dom";
import SignInModal from "../Modals/SignInModal";
import Offcanvas from "react-bootstrap/Offcanvas";

const Navbar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const [off, setOff] = useState(false);

  const handleClose = () => setOff(false);
  const handleShow = () => setOff(true);

  return (
    <>
      <ServiceModal show={modalShow} onHide={() => setModalShow(false)} />
      <CunsultationModal show={open} onHide={() => setOpen(false)} />
      <SignInModal show={show} onHide={() => setShow(false)} />

      <div className="nav">
        <div className="left">
          <img
            src="./Images/logo.png"
            alt="logo"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
          <ul>
            <li onClick={() => setModalShow(true)}>Services</li>
            <li onClick={() => setOpen(true)}>Consultation</li>
            <li className="specialNavList" onClick={() => navigate("/second")}>
              For Lawyers
            </li>
            <li onClick={() => navigate("/third")}>Businesses</li>
          </ul>

          <div className="search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="search"
              placeholder="Search for Lawyer, Services etc."
            />
          </div>
        </div>

        <div className="right">
          <button onClick={() => setShow(true)}>Sign In</button>
          <i class="fa-solid fa-bars" onClick={handleShow}></i>
        </div>
      </div>

      <Offcanvas show={off} onHide={handleClose} className="sideOff">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="sidebar">
            <ul>
              <li
                onClick={() => {
                  handleClose();
                  setModalShow(true);
                }}
              >
                Services
              </li>
              <li
                onClick={() => {
                  handleClose();
                  setOpen(true);
                }}
              >
                Consultation
              </li>
              <li onClick={() => navigate("/second")}>For Lawyers</li>
              <li onClick={() => navigate("/third")}>Businesses</li>
            </ul>

            <div className="search">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input
                type="search"
                placeholder="Search for Lawyer, Services etc."
              />
            </div>

            <button
              onClick={() => {
                handleClose();
                setShow(true);
              }}
            >
              Sign In
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar;
