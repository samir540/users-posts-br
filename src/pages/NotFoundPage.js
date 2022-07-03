import React from 'react'
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>
        Page not found. Please back to home page{" "}
      </h3>
      <span className='btn btn-info' onClick={()=>navigate("/")} >Back to Home Page</span>
    </div>
  );
}

export default NotFoundPage