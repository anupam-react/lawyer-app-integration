import React, { useEffect, useState } from 'react'
import LawyerHOC from './Lawyer/LawyerHOC'
import { fetchApiData, getDateFromISOString } from '../utils'

const Notification = () => {
    const [allNotification, setAllNotification] = useState([])

  const getAllNotification = async ()=>{
    const data = await fetchApiData('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/admin/notifications')
    setAllNotification(data?.data)
  }
 
  useEffect(()=>{
    getAllNotification()
  },[])
  return (
    <div style={{padding:"20px 40px"}}>
        <div style={{padding:"10px 20px", borderRadius:"10px", display:"flex" , flexDirection:"column", gap:"20px", background:"#0F2856", border:"1px solid black"}}>
            {allNotification?.map((data, i)=>(
            <div key={i} style={{ background:"white" , padding:"10px 20px", color:"white", borderRadius:"10px"  }}>
                <div style={{display:"flex" , justifyContent:"space-between"}}>
                <p style={{fontWeight:"bold", fontSize:"20px", color:"#0F2C64"}}>{data?.title}</p>
                <p style={{color:"green"}}>{getDateFromISOString(data?.createdAt)}</p>

                </div>
                <p style={{color:"#1D1D1D"}}>{data?.message}</p>
            </div>

            ))}
            
        </div>

    </div>
  )
}

export default LawyerHOC(Notification)