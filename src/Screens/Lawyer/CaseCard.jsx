import React from 'react'
import './style.scss'
const CaseCard = () => {
  return (
    <div className='casebox-container'>
        <img src="./Ellipse 14.png" alt="" style={{ borderRadius:"50%" , width:"90px" , height:"90px"}}/>
        <div>
            <div className='case-name'>Yash Gupta</div>
            <div className='case-body'>
                <div>
                <div>Case Title:</div>
                <div>Upcoming Hearing:</div>
                <button>Notes</button>
                </div>
                <div className='case-value'>
                <div>Real estate Case</div>
                <div>2nd Hearing</div>
                <div>(Monday)</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CaseCard