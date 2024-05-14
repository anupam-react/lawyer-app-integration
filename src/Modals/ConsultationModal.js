/** @format */

import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CunsultationModal(props) {

  const navigate = useNavigate()

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="newModal"
    >
      <Modal.Body style={{ padding: "0" }}>
        <div className="consultationModal">
          <div className="left">
            <p className="head">How it Works?</p>
            <div class="container">
              <div class="step completed">
                <div class="v-stepper">
                  <div class="circle"></div>
                  <div class="line"></div>
                </div>

                <div class="content">Select the issue category</div>
              </div>
              <div class="step completed">
                <div class="v-stepper">
                  <div class="circle"></div>
                  <div class="line"></div>
                </div>

                <div class="content">Click “Book a Consultation”</div>
              </div>
              <div class="step completed">
                <div class="v-stepper">
                  <div class="circle"></div>
                  <div class="line"></div>
                </div>

                <div class="content">
                  Choose Lawyer Experience, Time Slot, Mode of Communication
                </div>
              </div>
              <div class="step completed">
                <div class="v-stepper">
                  <div class="circle"></div>
                  <div class="line"></div>
                </div>

                <div class="content">Consult with the Lawyer</div>
              </div>
            </div>
          </div>

          <div className="right consultationRight">
            <i class="fa-solid fa-x" onClick={() => props.onHide()}></i>
            <p className="head">Select Category</p>

            <div className="threeSec">
              <div onClick={() => navigate('/seven')}  style={{cursor : 'pointer'}}>
                <img src={"./Images/20.png"} alt="" />
                <p>Property Possession Delay - RERA</p>
              </div>
              <div onClick={() => navigate('/seven')}  style={{cursor : 'pointer'}}>
                <img src={"./Images/22.png"} alt="" />
                <p>Possession Delay - <br /> NCLT</p>
              </div>
              <div onClick={() => navigate('/seven')}  style={{cursor : 'pointer'}}>
                <img src={"./Images/23.png"} alt="" />
                <p>Mutual Consent <br /> Divorce</p>
              </div>
              <div onClick={() => navigate('/seven')}  style={{cursor : 'pointer'}}>
                <img src={"./Images/24.png"} alt="" />
                <p>Trademark <br /> Registration</p>
              </div>
              <div onClick={() => navigate('/seven')}  style={{cursor : 'pointer'}}>
                <img src={"./Images/25.png"} alt="" />
                <p>Cheque Bounce <br /> Complaint</p>
              </div>
              <div onClick={() => navigate('/seven')}  style={{cursor : 'pointer'}}>
                <img src={"./Images/26.png"} alt="" />
                <p>Wrongful Termination - <br /> Legal Notice</p>
              </div>
             
              <div onClick={() => navigate('/seven')}  style={{cursor : 'pointer'}}>
                <img src={"./Images/20.png"} alt="" />
                <p>Property Possession Delay - RERA</p>
              </div>
              <div onClick={() => navigate('/seven')}  style={{cursor : 'pointer'}}>
                <img src={"./Images/22.png"} alt="" />
                <p>Possession Delay - <br /> NCLT</p>
              </div>
              <div onClick={() => navigate('/seven')}  style={{cursor : 'pointer'}}>
                <img src={"./Images/23.png"} alt="" />
                <p>Mutual Consent <br /> Divorce</p>
              </div>
              <div onClick={() => navigate('/seven')}  style={{cursor : 'pointer'}}>
                <img src={"./Images/24.png"} alt="" />
                <p>Trademark <br /> Registration</p>
              </div>
              <div onClick={() => navigate('/seven')}  style={{cursor : 'pointer'}}>
                <img src={"./Images/25.png"} alt="" />
                <p>Cheque Bounce <br /> Complaint</p>
              </div>
              <div onClick={() => navigate('/seven')}  style={{cursor : 'pointer'}}>
                <img src={"./Images/26.png"} alt="" />
                <p>Wrongful Termination - <br /> Legal Notice</p>
              </div>
             
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CunsultationModal;
