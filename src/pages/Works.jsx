import React from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom';

function Works() {
  const navigate = useNavigate();
  const location = useLocation();
    console.log('location->', location);


  return (
    <div>Works
      <br/>
      <button onClick={()=>{
        navigate("/")
      }}
      >
        HOME으로 이동
        </button>
      <Link to='/contact'>contact 페이지로 이동하기</Link>
    </div>
  )
}

export default Works;