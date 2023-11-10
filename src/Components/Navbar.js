import React from 'react'
import image from '../images/travago-logo.png'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <>
    <nav id="navbar">
        <div id="navLeft">
            <Link to='/'><img src={image} alt="" /></Link>
        </div>
        <div id="navRight">
           <Link to='/interested'> <button className="navBtn">Your interests ({props.noOfInterest})</button></Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar