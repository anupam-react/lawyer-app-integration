/** @format */

import { Modal } from "react-bootstrap";

import { updateApiData } from "../utils";

import { useState } from "react";
import { successToast } from "../Component/Toast";

function UpdateExpertises(props) {
  const [expertises, setExpertises] = useState("");
 

  const handleUpdate = async (event) => {
    event.preventDefault();

    const formData = {
      expertise: expertises
    };


    try {
      const response = await updateApiData(
        "https://flyweisgroup.com/api/api/v1/lawyer/addExpertise",
        formData
      );
      successToast("Update Successfully");
    } catch (error) {
      console.log(error);
      return error;
    }
    props.onHide()
  };

  return (
    <>
      <Modal
        {...props}
        size="sl"
        aria-labelledby="contained-modal-title-vcenter"
        className="newModal"
        centered
      >
        <Modal.Body>
          <div className="paymentModal">
            <p className="head">Update Expertises</p>
            <i class="fa-solid fa-x" onClick={() => props.onHide()}></i>

            <div className="">
              <div>
                <input
                  type="text"
                  placeholder="Expertises"
                  value={expertises}
                  style={{ borderRadius: "8px", padding: "5px" , width:"100%" }}
                  onChange={(e) => setExpertises(e.target.value)}
                />
              </div>

            
            </div>
            <button onClick={handleUpdate}>Update</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateExpertises;
