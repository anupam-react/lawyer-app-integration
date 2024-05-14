/** @format */

import { Modal } from "react-bootstrap";

function ThankYouModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="newModal"
    >
      <Modal.Body style={{ padding: "0" }}>
        <div className="thankYouModal">
          <img src="./Images/94.png" alt="" />

          <p className="head">Thank You</p>
          <p className="desc">You will be Get Notified</p>

          <button onClick={() => props.onHide()}>Back</button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ThankYouModal;
