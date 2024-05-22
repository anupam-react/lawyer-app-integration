import React, { useState } from 'react';

function RangeSlider() {
  const [value, setValue] = useState(50); // Initial value
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  return (
    <div>
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <span style={{fontWeight:600}}>Rs.10</span>
        <span style={{fontWeight:700, color:"#0F2C64"}}>{value}</span>
        <span style={{fontWeight:600}}>Rs.10000</span>
        </div>
      
      <input
        type="range"
        min="10"
        max="10000"
        value={value}
        style={{width:"100%", backgroundColor:"#0F2C64"}}
        onChange={handleChange}
      />
    </div>
  );
}

export default RangeSlider;
