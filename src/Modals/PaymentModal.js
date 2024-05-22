/** @format */

import { Modal } from "react-bootstrap";
import useTransaction from "../hooks/useTransaction";
import { getDateFromISOString } from "../utils";

function PaymentModal(props) {
  const { transaction } = useTransaction();
  return (
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
                <p className="third">₹{transaction?.[0]?.user?.wallet}</p>
              </div>
            </div>

            <div className="payment2">
              <button>Send Bill</button>
              <button> Withdrawal </button>
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
  );
}

export default PaymentModal;
