import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
export const Forms = () => {
  const history=useNavigate();
    const [data2, setdata2] = useState({name:"",email:"",mobile:""})
    const location=useLocation();
    const data=location.state;
     console.log(data);
    
      const handleOnSubmit = async (e) => {
        e.preventDefault();
        
        localStorage.setItem(data.id, JSON.stringify({ name: data2.name, email: data2.email, mobile: data2.mobile }));
     // Retrieve data from localStorage
    console.log(JSON.parse(localStorage.getItem(data.id)));
    history("/");

      };
      
     
     const onchange=(e)=>{
        setdata2({...data2,[e.target.name]:e.target.value});
     }
  return (
 <>
 <div className="container mt-5">
    <div className='flex'> 
        <img  className='h-24 rounded-md ml-5 mt-3 mb-2'src={data.showimgae}/>
        <div>
        <p className='mt-4 ml-5 text-2xl font-semibold'> {data.showName}</p>
        <p className='ml-5'> Language : {data.showLanguage}</p>
        </div>
    </div>
 <form className='mt-4 ml-2' onSubmit={handleOnSubmit}>
 <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name </label>
    <input type="text" class="form-control" id="exampleInputEmail1" name="name" aria-describedby="emailHelp" value={data2.name} onChange={onchange} />

  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={data2.email} onChange={onchange}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="mobile" value={data2.mobile} onChange={onchange} />
 
  </div>

 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
 </>
  )
}
