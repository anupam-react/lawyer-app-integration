import React from 'react'
import './style.scss'
import { getDateFromISOString } from '../../utils'
import { useNavigate } from 'react-router-dom'
const CaseCard = ({data}) => {
  const navigate = useNavigate()
  return (
    <div className='casebox-container'>
        <img src={data?.userId?.image} alt="" style={{ borderRadius:"50%" , width:"90px" , height:"90px"}}/>
        <div>
            <div className='case-name'>{data?.userId?.fullName || data?.userId?.firstName + " " + data?.userId?.lastName}</div>
            <div className='case-body'>
                <div>
                <div>Case Title:{data?.caseTitle}</div>
                <div>Upcoming Hearing: {getDateFromISOString(data?.nextHearingDate)}</div>
                <button onClick={()=> navigate('/documents')}>Notes</button>
                </div>
                <div className='case-value'>
                <div>{data?.caseTitle}</div>
                <div>{data?.hearing} Hearing</div>
                <div>{getDateFromISOString(data?.lastDateOfHearing)}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CaseCard