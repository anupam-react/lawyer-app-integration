import React from 'react'
import './style.scss'
import { getDateFromISOString } from '../../utils'
const CaseCard = ({data}) => {
  return (
    <div className='casebox-container'>
        <img src={data?.userId?.image} alt="" style={{ borderRadius:"50%" , width:"90px" , height:"90px"}}/>
        <div>
            <div className='case-name'>{data?.userId?.fullName || data?.userId?.firstName}</div>
            <div className='case-body'>
                <div>
                <div>Case Title:</div>
                <div>Upcoming Hearing:</div>
                <button>Notes</button>
                </div>
                <div className='case-value'>
                <div>{data?.caseTitle}</div>
                <div>{data?.hearing} Hearing</div>
                <div>{getDateFromISOString(data?.nextHearingDate)}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CaseCard