/** @format */

import { Modal } from "react-bootstrap";
import useAddCase from "../hooks/useAddCase";

function Note(props) {
  const { casedata, setCaseData } = useAddCase();
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="newModal"
    >
      <Modal.Body style={{ padding: "0" }}>
        <div className="NoteModal">
          <p>
            You Reminder is set on <br /> {casedata?.remainderTime} {casedata?.remainderType} 
          </p>
          <button onClick={() => {
             setCaseData((prevForm) => ({
              ...prevForm,
              setRemainder : true
            }));
            props.onHide()
            }}>Top to Start</button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Note;
