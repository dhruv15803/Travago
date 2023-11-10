import React from 'react'

const InterestDiv = (props) => {
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
            <p>{props.info}</p>
        </div>
        <div className="tour-price">
            <p>$ {props.price}</p>
        </div>
        <div className="tour-interest">
            <button className='interested' onClick={()=>props.removeInterest(props.index)}>Remove</button>
            {/* <button className='not-interested' onClick={()=>props.removeInterest(props.index)}>Not interested</button> */}
            <button className="btn">View detailed itinerary</button>
        </div>
    </div>
</div>
    </>
  )
}

export default InterestDiv