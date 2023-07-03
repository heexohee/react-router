import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

function Works() {
  const navigate = useNavigate();
  const location = useLocation();
    console.log('location->', location);


  return (
    <div>Works
      <br/>
      <button onClick={()=>{
        navigate("/")
      }}>HOME으로 이동</button>
    </div>
  )
}

export default Works;