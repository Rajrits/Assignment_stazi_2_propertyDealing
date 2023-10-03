import React, { useState } from 'react'
import data from '../MOCK_DATA.json'
import Propertycard from './Propertycard'
import { Link } from 'react-router-dom';
export default function Propertylist(props) {
    const[maxPage,setMaxPage] = useState(3);
    const handleOnClick = () =>{
           setMaxPage(maxPage+3);
    }
    const handleOnClick2 = ()=>{
               setMaxPage(1);
    }
  return (
    <>
        <div  className="main_container">
        {
            data.filter((e)=>{
              if( e.location.toLowerCase().includes(props.location.toLowerCase())  ){
                       return 1;
                     }
                     
            }).slice(0,maxPage).map((e,i)=>{
                return(
                        
                <div key={i} className="div">

                <Link to={`/${e.address}`} className = "cardAsLink" onClick={handleOnClick2}>
                 <Propertycard id = {e.id} location = {e.location} address = {e.address} price = {e.price} room = {e.room} bath = {e.beth} area = {e.area} bed = {e.bed}/>
                 
                </Link>
             </div>
           )
        }) 
    }
    </div>
    <div className="showMoreBtnContainer">
    <button className="showMore_btn" onClick={handleOnClick}>Show More</button>

    </div>
    </>
  )
}
