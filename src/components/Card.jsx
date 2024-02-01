import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Card = (props) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
  
    // Navigate to "/details" and pass props
    navigate("/details", {
      state: {
        id:props.show_id,
        showsummary:props.show_s,
        showName: props.show_n,
        showRating: props.show_r,
        showLanguage: props.show_l,
        showimgae:props.show_i,
        // Add other props as needed
      },
    });
  };

  // console.log(props.show_s)
  return (
    
    <>
      <div class="card" style={{width:" 18rem"}}>
    <img src={props.show_i} class="card-img-top w-full " alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.show_n}</h5>
    <p class="card-text"><p>Rating:{props.show_r}</p>
    <p>Language:{props.show_l}</p></p>
<button className="btn btn-primary" onClick={handleOnClick}>Summary</button>
  </div>
</div>
    </>
  );
};

export default Card;
