/** @format */

import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fetchApiData } from "../utils";
import { useEffect, useState } from "react";

function CunsultationModal(props) {
  const [data , setData] = useState([])

  const navigate = useNavigate()

  async function fetchCategory() {
    const data = await fetchApiData('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/category');
    setData(data?.data);
  }

  useEffect(()=>{
    fetchCategory()
  },[])

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
              {data?.length && data?.map((item,i)=>(
              <div onClick={() => navigate('/seven')} key={i}  style={{cursor : 'pointer'}}>
                <img src={item?.image} alt="" className="w-[60px] h-[40px]" />
                <p>{item?.name}</p>
              </div>

              ))}
             
             
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CunsultationModal;
