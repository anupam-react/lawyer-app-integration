import React, { useState } from 'react'
import LawyerSidebar from './LawyerSidebar'
import UserNav from './UserNav'
import Footer from '../../Component/Footer'
import ReviewCarousel from '../../Component/ReviewCarousel'
import './style.scss'
const LawyerProfile = () => {
    const [hamb, setHamb] = useState(true);
  return (
    <div>
        <section className='HocSection' style={{height:"200vh"}} >
          <div className="HocSide">
            <LawyerSidebar hamb={hamb} setHamb={setHamb} />
          </div>

          <div  className="HocNav">
            <UserNav hamb={hamb} setHamb={setHamb} />
            <div>
            <ReviewCarousel>
   
<div className='review-container'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minus illum, voluptate amet consequuntur molestias, quam nobis veniam beatae eum culpa nulla unde ab, totam corrupti asperiores. Alias, dolore voluptate.</p>
<div className='reviwer-info'>
        <img src="" alt="" style={{width:"50px" , height:"50px" , borderRadius:"50%"}}/>
    <div className='reviwer-name'>
        <div style={{color:"#2B2D3C" , fontSize:"14px", fontWeight:700}}>Rushil Narayan</div>
        <div style={{color:"#A2A5B8" }}>RERA , Panchkula</div>
    </div>
</div>
</div>

<div className='review-container'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minus illum, voluptate amet consequuntur molestias, quam nobis veniam beatae eum culpa nulla unde ab, totam corrupti asperiores. Alias, dolore voluptate.</p>
<div className='reviwer-info'>
        <img src="" alt="" style={{width:"50px" , height:"50px" , borderRadius:"50%"}}/>
    <div className='reviwer-name'>
        <div style={{color:"#2B2D3C" , fontSize:"14px", fontWeight:700}}>Rushil Narayan</div>
        <div style={{color:"#A2A5B8" }}>RERA , Panchkula</div>
    </div>
</div>
</div>

<div className='review-container'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minus illum, voluptate amet consequuntur molestias, quam nobis veniam beatae eum culpa nulla unde ab, totam corrupti asperiores. Alias, dolore voluptate.</p>
<div className='reviwer-info'>
        <img src="" alt="" style={{width:"50px" , height:"50px" , borderRadius:"50%"}}/>
    <div className='reviwer-name'>
        <div style={{color:"#2B2D3C" , fontSize:"14px", fontWeight:700}}>Rushil Narayan</div>
        <div style={{color:"#A2A5B8" }}>RERA , Panchkula</div>
    </div>
</div>
</div>


            </ReviewCarousel>
            </div>
          </div>
          

        </section>

        <Footer />
    </div>
  )
}

export default LawyerProfile