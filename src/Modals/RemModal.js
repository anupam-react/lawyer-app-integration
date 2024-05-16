/** @format */
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ClockModal from "./ClockModal";
import useAddCase from "../hooks/useAddCase";

function RemModal(props) {
  const {
    remainderDate,
    setRemainderDate,
    hearingTime,
    setHearingTime,
    remainderType,
    setRemainderType,
    type,
    setType,
  } = useAddCase();
  const [date, setDate] = useState();
  const [clockModal, setClockModal] = useState(false);

  const [on, setOn] = useState(true);
  const onChange = (date) => {
    setRemainderDate(date);
  };

  const handleClick = () => {
    
    setOn(!on);
  };


  return (
    <>
      <ClockModal remainderType={remainderType} setRemainderType={setRemainderType}  show={clockModal} onHide={() => setClockModal(false)} />
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
                onClick={() => {
                  handleClick()
                  setType("General")
                }}
                className={`${on === true ? "on" : ""} `}
              >
                General
              </button>
              <button
                onClick={() => {
                  handleClick()
                  setType("Urgent")

                } }
                className={`${on === true ? "" : "on"} `}
              >
                Urgent
              </button>
            </div>

            <div>
              <Calendar
                onChange={onChange}
                value={remainderDate}
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
