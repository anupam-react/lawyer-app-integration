import React, { useEffect, useState } from 'react'
import LawyerHOC from './Lawyer/LawyerHOC'
import { fetchApiData, formatTime, getDateFromISOString, updateApiData } from '../utils'
import { useNavigate } from 'react-router-dom'

const Notification = () => {
    const [allNotification, setAllNotification] = useState([])
    const navigate = useNavigate()

  const getAllNotification = async ()=>{
    const data = await fetchApiData('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/admin/notifications')
    setAllNotification(data?.data)
  }

 const handleNotification = async(data)=>{
  if(data?.appointmentId?.appointmentType?.toLowerCase() === "chat") navigate(`/chat/${data?.appointmentId?.userId}`)
    else navigate(`/videocall/${data?.appointmentId?.meetingId}`)
  sessionStorage.setItem("appoinmentId",data?.appointmentId?._id )
  await updateApiData(`https://shlok-mittal-lawyer-backend.vercel.app/api/v1/customer/appointmentJoin/${data?.appointmentId?._id}`)
 }

  useEffect(()=>{
    getAllNotification()
  },[])

  setTimeout(()=>{
    getAllNotification()
  },40000)
  return (
    <div style={{padding:"20px 40px" ,  height:"90vh" , overflow:"scroll"}}>
        <div style={{padding:"10px 20px", borderRadius:"10px", display:"flex" , flexDirection:"column", gap:"20px", background:"#0F2856", border:"1px solid black"}}>
            {allNotification?.map((data, i)=>(
            <div onClick={()=>handleNotification(data)} key={i} style={{ background:"white" , cursor:"pointer", padding:"10px 20px", color:"white", borderRadius:"10px" , }}>
                <div style={{display:"flex" , justifyContent:"space-between"}}>
                <p style={{fontWeight:"bold", fontSize:"20px", color:"#0F2C64"}}>{data?.title} ({data?.appointmentId?.appointmentType})</p>
                <p style={{color:"green"}}>{getDateFromISOString(data?.date) + "," + formatTime(data?.date)}</p>

                </div>
                <p style={{color:"#1D1D1D"}}>{data?.message}</p>
            </div>

            ))}
            
        </div>

    </div>
  )
}

export default LawyerHOC(Notification)