import React from "react";
import LawyerHOC from "./LawyerHOC";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useAddCase from "../../hooks/useAddCase";

const AddCase = () => {
  const {
    // caseTitle,
    // setCaseTitle,
    // caseNumber,
    // setCaseNumber,
    // courtName,
    // setCourtName,
    // courtNumber,
    // setCourtNumber,
    // judge,
    // setJudge,
    // nextHearingDate,
    // setNextHearingDate,
    // lastDateOfHearing,
    // setLastDateOfHearing,
    // remainderDate,
    // setRemainderDate,
    // hearingTime,
    // setHearingTime,
    // remainderType,
    // setRemainderType,
    // remainderTime,
    // setRemainderTime,
    // type,
    // setType,
    // userId,
    // setUserId,
    casedata,
    handleChange,
    allUsers,
    handleAddCase,
  } = useAddCase();
  const navigate = useNavigate("");

  console.log(casedata);
  return (
    <div className="addcase-container">
      <h4 className="addcase-heading">Add Cases</h4>
      <div className="addcase-form">
        <input
          type="text"
          placeholder="Case Title"
          name="caseTitle"
          value={casedata?.caseTitle}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Case Number"
          name="caseNumber"
          value={casedata?.caseNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Court Name"
          name="courtName"
          value={casedata?.courtName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Court Number"
          name="courtNumber"
          value={casedata?.courtNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Name of the Judge"
          name="judge"
          value={casedata?.judge}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Hearing Time"
          name="hearingTime"
          value={casedata?.hearingTime}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Reminder Time"
          name="remainderTime"
          value={casedata?.remainderTime}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Next date of hearing"
          name="nextHearingDate"
          value={casedata?.nextHearingDate}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last date of hearing"
          name="lastDateOfHearing"
          value={casedata?.lastDateOfHearing}
          onChange={handleChange}
        />
        <select value={casedata?.userId}  name="userId" onChange={handleChange}>
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
