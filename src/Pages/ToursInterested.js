import React from 'react'
import InterestDiv from '../Components/InterestDiv'
import { Link } from 'react-router-dom'

const ToursInterested = (props) => {
  return (
    <>
    <div className="tours-outer-container">
        <div className="tours-heading-container">
            <h1>Your interests</h1>
            {props.interest.length===0 && <p>You currently have no tours you are interested in.<Link to='/'>See all tours</Link></p>}
        </div>
        <div className="tours-inner-container">
            {props.interest.map((item,i)=>{
                    return <InterestDiv 
                    name={item.name} 
                    info={item.info} 
                    image={item.image} 
                    price={item.price}
                    index={i}
                    removeInterest={props.removeInterest}
                    />
            })}
        </div>
    </div>
    </>
  )
}

export default ToursInterested