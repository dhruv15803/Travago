import React from 'react'
import TourDiv from './TourDiv'
import Loading from './Loading'

const Tours = (props) => {

    if(props.loading){
        return (
            <>
            <Loading/>
            </>
        )
    }
    else{
        return (
            <>
            <div className="tours-outer-container">
                <div className="tours-heading-container">
                    <h1>Our tours</h1>
                </div>
                <div className="tours-inner-container">
                    { props.tours.length>0 &&  props.tours.map((item,i)=>{
                            return <TourDiv 
                            name={item.name} 
                            info={item.info} 
                            image={item.image} 
                            price={item.price}
                            index={i}
                            addInterest={props.addInterest}
                            removeInterest={props.removeInterest}
                            />
                    })}
                </div>
            </div>
            </>
          )
    }

}

export default Tours