import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import Propertylist from './Propertylist';

export default function Propertycard(props) {
    return (
        <>
         
            <div className="Cardcontainer">
               

                 <div className="purpose">
                    <span>For Rent</span>
                 </div>
                <Carousel id = {props.id}/>
                <div className="location">
                    <i className="fa-solid fa-location-dot locationIcon"></i><span className='locationText'>{props.location}</span>
                </div>
                <div className="propertyName">
                    <span>{props.address} </span>
                </div>
                <div className="facilities_grid">
                    <div className="facilities">
                        <div>    <i className="fa-regular fa-building"></i>
                            <p>{props.room} Room</p></div>
                        <div>    <i className="fa-solid fa-bed"></i>
                            <p>{props.bed} Bed</p></div>
                        <div>    <i className="fa-solid fa-bath"></i>
                            <p>{props.bath} Bath</p></div>
                        <div>    <i className="fa-solid fa-arrows-up-down-left-right"></i>
                            <p>{props.area} ft </p></div>
                    </div>
                </div>
                <div className="card_footer">
                    <span>
                        <span className="price">{`$${props.price}`}</span>
                        <span className='timePeriod'>
                            /month
                        </span>

                    </span>
                    <button className="btn">Read More</button>
                </div>
            </div>
   
        </>


    )
}
