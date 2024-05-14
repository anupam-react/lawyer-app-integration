/** @format */

import { useState } from "react";
import { Modal } from "react-bootstrap";
import "react-clock/dist/Clock.css";
import Clock from "react-clock";
import Note from "./Note";

function ClockModal(props) {
  const [NoteOpen, setNoteOpen] = useState(false);
  return (
    <>
      <Note show={NoteOpen} onHide={() => setNoteOpen(false)} />

      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="newModal"
      >
        <Modal.Body style={{ padding: "0" }}>
          <div className="clockModal">
            <p className="head">Set Reminder</p>

            <div className="two-btns">
              <button>Hourly</button>
              <button>Daily</button>
            </div>
            <div className="two-btns">
              <button>Weekly</button>
              <button>Monthly</button>
            </div>

            <p className="head2">Set Reminder Time</p>

            <div className="clock">
              <Clock
                value={new Date()}
                size={200}
                renderNumbers={true}
                style={{ color: "white" }}
              />
            </div>

            <button
              className="lastBtn"
              onClick={() => {
                props.onHide();
                setNoteOpen(true);
              }}
            >
              Save
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ClockModal;
