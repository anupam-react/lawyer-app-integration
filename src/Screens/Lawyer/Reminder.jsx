import React, { useState } from "react";
import LawyerHOC from "./LawyerHOC";
import { Calendar } from "react-calendar";
import "./style.scss";
import Clock from "react-clock";
import Note from "../../Modals/Note";
import useAddCase from "../../hooks/useAddCase";

const Reminder = () => {
  const {casedata, setCaseData} = useAddCase();
  const [date, setDate] = useState(new Date());
  const [NoteOpen, setNoteOpen] = useState(false);

  const [on, setOn] = useState(true);
  const onChange = (date) => {
    setCaseData((prevForm) => ({
      ...prevForm,
      remainderDate : date
    }));
  };

  const handleClick = () => {
    setOn(!on);
  };
  return (
    <div className="Remider-main">
      <div className="Remider-container">
        <p className="head">Reminder</p>
        <div className="two-btns">
          <button
            onClick={() => {
              handleClick()
              setCaseData((prevForm) => ({
                ...prevForm,
                type : "General"
              }));
            }}
            className={`${on === true ? "on" : ""} `}
          >
            General
          </button>
          <button
             onClick={() => {
              handleClick()
              setCaseData((prevForm) => ({
                ...prevForm,
                type : "Urgent"
              }));
            }}
            className={`${on === true ? "" : "on"} `}
          >
            Urgent
          </button>
        </div>

        <div>
          <Calendar
            onChange={onChange}
            value={casedata?.remainderDate}
            showNeighboringMonth={false}
            prev2Label={null}
            next2Label={null}
          />
        </div>

        <button className="lastBtn">Hearing Date</button>
      </div>
      <div className="Remidertime-container">
        <div className="clockModal">
          <p className="head">Set Reminder</p>

          <div className="two-btns">
            <button  onClick={() => {
              setCaseData((prevForm) => ({
                ...prevForm,
                remainderType : "Hourly"
              }));
            }}>Hourly</button>
            <button onClick={() => {
              setCaseData((prevForm) => ({
                ...prevForm,
                remainderType : "Daily"
              }));
            }}>Daily</button>
          </div>
          <div className="two-btns">
            <button onClick={() => {
              setCaseData((prevForm) => ({
                ...prevForm,
                remainderType : "Weekly"
              }));
            }}>Weekly</button>
            <button onClick={() => {
              setCaseData((prevForm) => ({
                ...prevForm,
                remainderType : "Monthly"
              }));
            }}>Monthly</button>
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

          <button className="lastBtn" onClick={() => setNoteOpen(true)}>
            Save
          </button>
        </div>
      </div>
      <Note show={NoteOpen} onHide={() => setNoteOpen(false)} />
    </div>
  );
};

export default LawyerHOC(Reminder);
