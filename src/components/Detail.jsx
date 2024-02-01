import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Detail = (props) => {
   const location=useLocation();
   const data=location.state;


    const navigate = useNavigate();
  const handleOnClick = () => {
  
    // Navigate to "/Forms" and pass props
    navigate("/form", {
      state: {
        id:data.id,
        showsummary:data.showsummary,
        showName: data.showName,
        showRating: data.showRating,
        showLanguage: data.showLanguage,
        showimgae:data.showimgae,
        // Add other props as needed
      },
    });
  };
   
  return (
    <>
  <div className='flex '>
    <img src={data.showimgae} className='h-96 m-5' />
    <div>
    <p className='mt-5 text-3xl font-semibold' > {data.showName} </p>
    <div className='text-xl' dangerouslySetInnerHTML={{ __html: data.showsummary }} />
    <button className='btn btn-primary' onClick={handleOnClick}>Book a Ticket</button>
    </div>
    
  </div>
   
    </>
  )
}

export default Detail