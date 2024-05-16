import React from 'react'
import LawyerHOC from './LawyerHOC'
import ConsultCard from './ConsultCard'
import ConsultCarousel from './ConsultCarousel'

const Consultation = () => {
  return (
    <div className='consultation-container'> 
        <h4 className="consultation-heading">Upcoming</h4>
        <div className='Upcoming-container'>
        <ConsultCarousel>
             <ConsultCard />
            <ConsultCard />
            <ConsultCard />
            <ConsultCard />
        </ConsultCarousel>
        </div>
        <h4 className="consultation-heading">Past</h4>
        <div className='Upcoming-container'>
        <ConsultCarousel>
             <ConsultCard />
            <ConsultCard />
            <ConsultCard />
            <ConsultCard />
        </ConsultCarousel>
        
        </div>
        <h4 className="consultation-heading">Cancelled</h4>
        <div className='Upcoming-container'>
        <ConsultCarousel>
             <ConsultCard />
            <ConsultCard />
            <ConsultCard />
            <ConsultCard />
        </ConsultCarousel>
        
        </div>
    </div>
  )
}

export default LawyerHOC(Consultation)