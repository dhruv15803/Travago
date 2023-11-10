import React, { useState } from 'react'
import { ToastContainer} from 'react-toastify';


const TourDiv = (props) => {

    const [readMore,setReadMore] = useState(false);

  return (
    <>
<div className="tour-div">
    <div className="left-side">
    <div className="tour-image">
        <img src={props.image} alt="" />
    </div>
    </div>
    <div className="right-side">
        <div className="tour-name">
            <h1>{props.name}</h1>
        </div>
        <div className="tour-info">
            {readMore===false ? <p>{props.info.slice(0,props.info.length/2)} ... <button className='text-btn' onClick={()=>setReadMore(true)}>read more</button> </p>: <p>{props.info} ... <button onClick={()=>setReadMore(false)} className='text-btn'>Show less</button></p>}
        </div>
        <div className="tour-price">
            <p>$ {props.price}</p>
        </div>
        <div className="tour-interest">
            <button className='interested' onClick={()=>props.addInterest(props.index)}>Interested</button>
            {/* <button className='not-interested' onClick={()=>props.removeInterest(props.index)}>Not interested</button> */}
            <button className="btn">View detailed itinerary</button>
        </div>
    </div>
</div>
<ToastContainer
position="bottom-right"
autoClose={900}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </>
  )
}

export default TourDiv