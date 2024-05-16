/** @format */

import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import "react-clock/dist/Clock.css";
import Clock from "react-clock";
import Note from "./Note";

function ClockModal(props) {
  const [NoteOpen, setNoteOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  
  useEffect(() => {
    const interval = setInterval(() =>setSelectedTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime.toLocaleTimeString());
  };

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
              <button onClick={()=> props.setRemainderType('Hourly')}>Hourly</button>
              <button onClick={()=> props.setRemainderType('Daily')}>Daily</button>
            </div>
            <div className="two-btns">
              <button onClick={()=> props.setRemainderType('Weekly')}>Weekly</button>
              <button onClick={()=> props.setRemainderType('Monthly')}>Monthly</button>
            </div>

            <p className="head2">Set Reminder Time</p>

            <div className="clock">
              <Clock
                value={selectedTime}
                onChange={handleTimeChange}
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
