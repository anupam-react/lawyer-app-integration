/** @format */

import { Modal } from "react-bootstrap";

function Note(props) {
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
            You Reminder is set on <br /> 12:00 am Daily till <br />
            9th April{" "}
          </p>
          <button onClick={() => props.onHide()}>Top to Start</button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Note;
