import React from "react";

import ProgressBar from "@ramonak/react-progress-bar";
import './style.scss'
export const Progress = () => {
  return(
    <div style={{display:"flex", alignItems:"center", gap:"20px", width:"500px"}}>
      <span>5 star</span>
  <ProgressBar
  completed={40}
  className="wrapper"
  barContainerClassName="containerBar"
  labelClassName="label"
  bgColor="#0F2C64"
  height="10px"
/>
<span>53%</span>
    </div>
  )
  
;
};