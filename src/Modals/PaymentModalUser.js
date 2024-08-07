/** @format */

import { Modal } from "react-bootstrap";
import useTransaction from "../hooks/useTransaction";
import { getDateFromISOString } from "../utils";
import useSaveDocument from "../hooks/useSaveDocument";
import { useState } from "react";
import BillModal from "./BillModal";
import Withdrawal from "./Withdrawal";

import AddMoney from "./AddMoney";

function PaymentModalUser(props) {
  const { transaction } = useTransaction();
  const [withdrawal, setWithdrawal] = useState(false)
  const [add, setAdd] = useState(false)

  return (
    <>
  
    <Withdrawal show={withdrawal} onHide={() => setWithdrawal(false)} />
    <AddMoney show={add} onHide={() => setAdd(false)} />
    <>
      <Modal
        {...props}
        size="sl"
        aria-labelledby="contained-modal-title-vcenter"
        className="newModal"
        centered
      >
        <Modal.Body>
          <div className="paymentModal">
            <p className="head">My Payments</p>
            <i class="fa-solid fa-x" onClick={() => props.onHide()}></i>

            <div className="payment1">
              <p className="first">Add Money to Wallet</p>
              <div>
                <p className="second">Total Balance</p>
                <p className="third">₹{transaction?.[0]?.user?.wallet || 0}</p>
              </div>
            </div>

            <div className="payment2">
              <button onClick={() => {
                props.onHide();
                setAdd(true);
              }}>Add Money</button>
              <button onClick={() => {
                props.onHide();
                setWithdrawal(true);
              }}> Withdrawal </button>
            </div>

            <hr />

            <p className="head2">My Previous payments</p>
            <div style={{height:"40vh" , overflow:"scroll"}}>
            {transaction?.map((d, i) => (
              <>
                <div className="payment3">
                  <div>
                    <p className="head">{d?.type}</p>
                    <p className="desc">{getDateFromISOString(d?.date)}</p>
                  </div>
                  <p
                    className="last"
                    style={{
                      color: `${d?.type === "Credit" ? "#0F2C64" : "#ED1E24"}`,
                    }}
                  >
                  {d?.type === "Credit" ? "+₹" : "-₹"} {d?.amount}
                  </p>
                </div>
                <hr />
              </>
            ))}

            </div>

            {/* <button>View All</button> */}
          </div>
        </Modal.Body>
      </Modal>
    </>
    </>
  );
}

export default PaymentModalUser;
