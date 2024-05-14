/** @format */
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ClockModal from "./ClockModal";

function RemModal(props) {
  const [date, setDate] = useState(new Date());
  const [clockModal, setClockModal] = useState(false);

  const [on, setOn] = useState(true);
  const onChange = (date) => {
    setDate(date);
  };

  const handleClick = () => {
    setOn(!on);
  };

  return (
    <>
      <ClockModal show={clockModal} onHide={() => setClockModal(false)} />
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="newModal"
      >
        <Modal.Body style={{ padding: "0" }}>
          <div className="RemiderModal">
            <p className="head">Reminder</p>

            <div className="two-btns">
              <button
                onClick={() => handleClick()}
                className={`${on === true ? "on" : ""} `}
              >
                General
              </button>
              <button
                onClick={() => handleClick()}
                className={`${on === true ? "" : "on"} `}
              >
                Urgent
              </button>
            </div>

            <div>
              <Calendar
                onChange={onChange}
                value={date}
                showNeighboringMonth={false}
                prev2Label={null}
                next2Label={null}
              />
            </div>

            <button
              className="lastBtn"
              onClick={() => {
                props.onHide();
                setClockModal(true);
              }}
            >
              Hearing Date
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RemModal;
