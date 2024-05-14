/** @format */

import { Modal } from "react-bootstrap";

function PaymentModal(props) {
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
              <p className='first'>Add Money to Wallet</p>
              <div>
                <p className="second">Total Balance</p>
                <p className="third">₹5,000</p>
              </div>
            </div>

            <div className="payment2">
              <button>Send Bill</button>
              <button> Withdrawal </button>
            </div>

            <hr />

            <p className='head2'>My Previous payments</p>

            <div className="payment3">
              <div>
                <p className="head">Added From Bank Account</p>
                <p className="desc">6 Days ago</p>
              </div>
              <p className='last' style={{color : '#0F2C64'}}>+₹500</p>
            </div>
            <hr />
            <div className="payment3">
              <div>
                <p className="head">Transfer to Micheal </p>
                <p className="desc">6 Days ago</p>
              </div>
              <p className='last' style={{color : '#ED1E24'}}>-₹150</p>
            </div>

            <hr />

            <div className="payment3">
              <div>
                <p className="head">Added From Bank Account</p>
                <p className="desc">6 Days ago</p>
              </div>
              <p className='last' style={{color : '#0F2C64'}}>+₹500</p>
            </div>
            <hr />
            <div className="payment3">
              <div>
                <p className="head">Transfer to Micheal </p>
                <p className="desc">6 Days ago</p>
              </div>
              <p className='last' style={{color : '#ED1E24'}}>-₹150</p>
            </div>

            <button>View All</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PaymentModal;
