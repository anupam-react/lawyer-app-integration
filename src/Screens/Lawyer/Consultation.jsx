import React from 'react'
import LawyerHOC from './LawyerHOC'
import ConsultCard from './ConsultCard'
import ConsultCarousel from './ConsultCarousel'
import useConsultation from '../../hooks/useConsultation'

const Consultation = () => {
  const {allUpcomingConsult,
    allPastConsult,
    allCancelConsult} = useConsultation()
  return (
    <div className='consultation-container'> 
        <h4 className="consultation-heading">Upcoming</h4>
        <div className='Upcoming-container'>
        <ConsultCarousel>
          {allUpcomingConsult?.map((d, i)=>(
            <ConsultCard data={d}/>
          ))}
        </ConsultCarousel>
        </div>
        <h4 className="consultation-heading">Past</h4>
        <div className='Upcoming-container'>
        <ConsultCarousel>
        {allPastConsult?.map((d, i)=>(
            <ConsultCard data={d}/>
          ))}
        </ConsultCarousel>
        
        </div>
        <h4 className="consultation-heading">Cancelled</h4>
        <div className='Upcoming-container'>
        <ConsultCarousel>
        {allCancelConsult?.map((d, i)=>(
            <ConsultCard data={d}/>
          ))}
        </ConsultCarousel>
        
        </div>
    </div>
  )
}

export default LawyerHOC(Consultation)