/** @format */

import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useFooter from "../hooks/useFooter";

function ServiceModal(props) {
  const navigate = useNavigate();
  const {  
     legal,
    government } = useFooter()

  function handler() {
    props.onHide();
    // navigate("/seven");
  }

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      className="newModal"
      centered
    >
      <Modal.Body>
        <div className="ServiceModalTwo" onClick={() => handler()} style={{cursor : 'pointer'}}>
          <div className="main">
            <p className="head"> Legal Services</p>
            <p className="desc">
              Legal cases with fixed pricing, standardized processes, and firm
              timelines
            </p>

            <div className="two-sec">
              {legal?.map((d, i)=>(
                <p onClick={()=> navigate(`/service-info/${d?._id}`)} key={i}>{">"}{d?.category}</p>

              ))}
               
             
            </div>
          </div>
          <div className="main secondMain">
            <p className="head">Government Registrations</p>
            <p className="desc">
              Hassle free government services at affordable prices
            </p>

            <div className="two-sec">
              {government?.map((d, i)=>(
                <p onClick={()=> navigate(`/service-info/${d?._id}`)} key={i}>{">"}{d?.category}</p>

              ))}
               
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ServiceModal;
