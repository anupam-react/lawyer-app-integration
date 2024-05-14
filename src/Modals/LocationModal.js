/** @format */

import { Modal } from "react-bootstrap";

function LocationModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="newModal"
    >
      <Modal.Body style={{ padding: "10px" }}>
        <div className="LocationModal">

          <div className="search">

          <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="search"
              placeholder="Search for Lawyer, Services etc."
            />
          </div>

          <p className='Populas'>Popular Cities</p>

          <div className='sixSec'>
            <div>
                <img src='./Images/70.png' alt='' />
                <p>New Delhi</p>
            </div>
            <div>
                <img src='./Images/70.png' alt='' />
                <p>Mumbai</p>
            </div>
            <div>
                <img src='./Images/70.png' alt='' />
                <p>Chennai</p>
            </div>
            <div>
                <img src='./Images/70.png' alt='' />
                <p>Hyderabad</p>
            </div>
            <div>
                <img src='./Images/70.png' alt='' />
                <p>Kolkata</p>
            </div>
            <div>
                <img src='./Images/70.png' alt='' />
                <p>Bangalore</p>
            </div>
          </div>

          <hr className="LocationHr" />

          <div className="fourSec">
            <ul>
                <li>{'>'}Lucknow</li>
                <li>{'>'}Noida</li>
                <li>{'>'}Jaipur</li>
                <li>{'>'}Patna</li>
                <li>{'>'}Chandigarh</li>
            </ul>
            <ul>
                <li>{'>'}Indore</li>
                <li>{'>'}Ahmedabad</li>
                <li>{'>'}Kochi</li>
                <li>{'>'}Agra</li>
                <li>{'>'}Bhubaneswar</li>
            </ul>
            <ul>
                <li>{'>'}Guwahati</li>
                <li>{'>'}Ludhiana</li>
                <li>{'>'}Navi Mumbai</li>
                <li>{'>'}Panipat</li>
                <li>{'>'}Faridabad</li>
            </ul>
            <ul>
                <li>{'>'}Surat</li>
                <li>{'>'}Thane</li>
                <li>{'>'}Dehradun</li>
                <li>{'>'}Bhopal</li>
                <li>{'>'}Nagpur</li>
            </ul>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default LocationModal;
