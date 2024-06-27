/** @format */

import { Modal } from "react-bootstrap";
import useTransaction from "../hooks/useTransaction";
import { getDateFromISOString } from "../utils";
import useSaveDocument from "../hooks/useSaveDocument";
import { useState } from "react";
import BillModal from "./BillModal";
import Withdrawal from "./Withdrawal";

function PaymentModalUser(props) {
  const { transaction } = useTransaction();
  const [billModal, setBillModal] = useState(false)
  const [withdrawal, setWithdrawal] = useState(false)
  return (
    <>
    <BillModal show={billModal} onHide={() => setBillModal(false)} />
    <Withdrawal show={withdrawal} onHide={() => setWithdrawal(false)} />
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
              <button o onClick={() => {
                props.onHide();
                setBillModal(true);
              }}>Add Money</button>
              <button onClick={() => {
                props.onHide();
                setWithdrawal(true);
              }}> Withdrawal </button>
            </div>

            <hr />

            <p className="head2">My Previous payments</p>
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
                    +₹{d?.amount}
                  </p>
                </div>
                <hr />
              </>
            ))}

            <button>View All</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
    </>
  );
}

export default PaymentModalUser;
