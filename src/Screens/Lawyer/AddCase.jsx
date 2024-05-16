import React from "react";
import LawyerHOC from "./LawyerHOC";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useAddCase from "../../hooks/useAddCase";

const AddCase = () => {
  const {
    caseTitle,
    setCaseTitle,
    caseNumber,
    setCaseNumber,
    courtName,
    setCourtName,
    courtNumber,
    setCourtNumber,
    judge,
    setJudge,
    nextHearingDate,
    setNextHearingDate,
    lastDateOfHearing,
    setLastDateOfHearing,
    remainderDate,
    setRemainderDate,
    hearingTime,
    setHearingTime,
    remainderType,
    setRemainderType,
    remainderTime,
    setRemainderTime,
    type,
    setType,
    userId,
    setUserId,
    allUsers,
    handleAddCase,
  } = useAddCase();
  const navigate = useNavigate("");

  console.log(allUsers);
  return (
    <div className="addcase-container">
      <h4 className="addcase-heading">Add Cases</h4>
      <div className="addcase-form">
        <input
          type="text"
          placeholder="Case Title"
          value={caseTitle}
          onChange={(e) => setCaseTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Case Number"
          value={caseNumber}
          onChange={(e) => setCaseNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Court Name"
          value={courtName}
          onChange={(e) => setCourtName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Court Number"
          value={courtNumber}
          onChange={(e) => setCourtNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name of the Judge"
          value={judge}
          onChange={(e) => setJudge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Hearing Time"
          value={hearingTime}
          onChange={(e) => setHearingTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Reminder Time"
          value={remainderTime}
          onChange={(e) => setRemainderTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Next date of hearing"
          value={nextHearingDate}
          onChange={(e) => setNextHearingDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last date of hearing"
          value={lastDateOfHearing}
          onChange={(e) => setLastDateOfHearing(e.target.value)}
        />
        <select value={userId} onChange={(e) => setUserId(e.target.value)}>
          {allUsers?.map((d, i) => (
            <option value={d?._id}>{d?.fullName || d?.firstName}</option>
          ))}
        </select>
      </div>
      <div className="save-button">
        <button onClick={handleAddCase}>Save</button>
      </div>
      <div className="reminder-button">
        <button onClick={() => navigate("/reminder")}>
          <img
            src="./Group 9745.png"
            alt=""
            style={{ width: "28px", height: "28px", marginRight: "8px" }}
          />
          Set Reminder
        </button>
      </div>
    </div>
  );
};

export default LawyerHOC(AddCase);
