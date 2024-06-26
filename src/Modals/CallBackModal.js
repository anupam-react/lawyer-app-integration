/** @format */

import { Modal } from "react-bootstrap";
import useQuery from "../hooks/useQuery";

function CallBackModal(props) {
  const {  
    name,
    setName,
    email,
    setEmail,
    mobile,
    setMobile,
    query,
    setQuery,
    handleRequest
  } = useQuery()

  return (
    <Modal
      {...props}
      size="lg"
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

                <div class="content">
                  Tell us your legal  requirements
                </div>
              </div>
              <div class="step completed">
                <div class="v-stepper">
                  <div class="circle"></div>
                  <div class="line"></div>
                </div>

                <div class="content">
                  Get best suitable  lawyer profile with price,
                  experience &
                  location
                </div>
              </div>
              <div class="step completed">
                <div class="v-stepper">
                  <div class="circle"></div>
                  <div class="line"></div>
                </div>

                <div class="content">
                Filing of Complaint
                </div>
              </div>
            
            </div>
          </div>

          <div className="right" style={{backgroundColor : 'transparent'}}>
            <i class="fa-solid fa-x" onClick={() => props.onHide()}></i>
            <p className="head">Schedule a callback</p>

                <div className="CallBackForm">
                    <form>
                        <div className="main">
                        <i class="fa-solid fa-user"></i>
                        <div className="empty"></div>
                        <input type='text' placeholder="Full Name" value={name} onChange={(e)=> setName(e.target.value)} />
                        </div>
                        <div className="main">
                        <i class="fa-solid fa-envelope"></i>
                        <div className="empty"></div>
                        <input type='email' placeholder=" Email Id" value={email} onChange={(e)=> setEmail(e.target.value)} />
                        </div>
                        <div className="main">
                        <i class="fa-solid fa-phone"></i>
                        <div className="empty"></div>
                        <input type='tel' pattern="[0-9]{10}" placeholder="Phone Number" value={mobile} onChange={(e)=> setMobile(e.target.value)} />
                        </div>
                        <div className="Bigmain">
                        <textarea placeholder="Write your query...." value={query} onChange={(e)=> setQuery(e.target.value)}/>
                        </div>
                        <button onClick={handleRequest}>Give Me a Call Back</button>
                    </form>
                </div>

          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CallBackModal;
