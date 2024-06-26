/** @format */

import { Modal } from "react-bootstrap";
import useCity from "../hooks/useCity";
import ServiceModal from "./ServiceModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LocationModal(props) {

  const {  popularCity,
    city,} = useCity()
    const [modalShow, setModalShow] = useState(false);

    const navigate = useNavigate()
  return (
    <>
     <ServiceModal show={modalShow} onHide={() => setModalShow(false)} />
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="newModal"
    >
      <Modal.Body style={{ padding: "10px" }}>
        <div className="LocationModal">

          <div className="search">

          <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="search"
              placeholder="Search for Lawyer, Services etc."
              onClick={() => setModalShow(true)}
            />
          </div>

          <p className='Populas'>Popular Cities</p>

          <div className='sixSec'>
            {popularCity?.map((d, i)=>(
            <div style={{cursor:"pointer"}} onClick={()=> navigate(`/city/${d?.city}`)} key={i}>
                <img src={d?.image} alt='' />
                <p>{d?.city}</p>
            </div>

            ))}
        
          </div>

          <hr className="LocationHr" />

          <div className="fourSec">
          {city?.map((d, i)=>(

                <p key={i}>{'>'}{d?.city}</p>
            ))}
            {/* <ul>
                <li>{'>'}Lucknow</li>
                <li>{'>'}Noida</li>
                <li>{'>'}Jaipur</li>
                <li>{'>'}Patna</li>
                <li>{'>'}Chandigarh</li>
            </ul>
            <ul>
                <li>{'>'}Indore</li>
                <li>{'>'}Ahmedabad</li>
                <li>{'>'}Kochi</li>
                <li>{'>'}Agra</li>
                <li>{'>'}Bhubaneswar</li>
            </ul>
            <ul>
                <li>{'>'}Guwahati</li>
                <li>{'>'}Ludhiana</li>
                <li>{'>'}Navi Mumbai</li>
                <li>{'>'}Panipat</li>
                <li>{'>'}Faridabad</li>
            </ul>
            <ul>
                <li>{'>'}Surat</li>
                <li>{'>'}Thane</li>
                <li>{'>'}Dehradun</li>
                <li>{'>'}Bhopal</li>
                <li>{'>'}Nagpur</li>
            </ul> */}
          </div>
        </div>
      </Modal.Body>
    </Modal>
    </>
  );
}

export default LocationModal;
