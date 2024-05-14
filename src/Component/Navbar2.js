/** @format */

import React, { useState } from "react";
import SignInModal from "../Modals/SignInModal";
import { useNavigate } from 'react-router-dom'
import Offcanvas from "react-bootstrap/Offcanvas";

const Navbar2 = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  const [off, setOff] = useState(false);

  const handleClose = () => setOff(false);
  const handleShow = () => setOff(true);

  return (
    <>
      <SignInModal show={show} onHide={() => setShow(false)} />

      <div className="Navbar2">
        <div className="left">
          <img src={"./Images/logo2.png"} alt="" onClick={() => navigate('/')} />
        </div>
        <div className="mid">
          <ul>
            <li onClick={() => navigate('/fourth')} >Blog</li>
            <li onClick={() => navigate('/fifth')}>Support</li>
            <li  onClick={() => navigate('/sixth')}>About</li>
          </ul>
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
            <li onClick={() => navigate('/fourth')} >Blog</li>
            <li onClick={() => navigate('/fifth')}>Support</li>
            <li  onClick={() => navigate('/sixth')}>About</li>
            </ul>
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

export default Navbar2;
