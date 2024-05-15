import React from 'react'
import './style.scss'

const ConsultationCard = () => {
  return (
    <div className='Consultation-container'>
        <div className='Consultation-main'>
            <div className='file-button'>
            <button >View File</button>
            </div>
            <img src="./Ellipse 14 (2).png" alt="" style={{ borderRadius:"50%" , width:"100px" , height:"100px"}}/>
            <div className='consult-name'>Adv. Yash</div>
            <div className='consult-casename'>Real estate Case</div>
            <div  className='consult-info'>Lorem ipsum dolor sit amet. At totam mollitia rem magni voluptate aut dolor delectus ut deleniti dolor eum exercitationem</div>
            <div className='consult-otherinfo'>
                <div className='consult-lang'>
                English, hindi
                </div>
                <div className='consult-location'>
               <div>Location:</div> 
                <span style={{fontWeight:700 , fontSize:"20px"}}>5 Km Away</span> 
                </div>
            </div>
            <div className='consult-buttons'>
                <button>
                    <img src="./Group.png" alt="" />
                    <span>Voice Call</span>
                </button>
                <button>
                    <img src="./Group (1).png" alt="" />
                    <span>Chat</span>
                </button>
                <button>
                    <img src="./Group 831.png" alt="" />
                    <span>Video Call</span>
                </button>
            </div>
            <div className='consult-time'>
                <div>10 min Booked</div>
                <span>Time: 12:00</span>
            </div>
        </div>
    </div>
  )
}

export default ConsultationCard