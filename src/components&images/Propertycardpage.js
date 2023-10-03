import React from 'react'
import data from '../MOCK_DATA.json'
import Propertycard from './Propertycard';

export default function Propertycardpage(props) {
  return (
    <div>
      {
              data.filter((e)=>{
                if(e.id===props.id){
                    return e;
                }
              }).slice(0,1).map((e)=>{
                     return(
                      <Propertycard id = {e.id} location = {e.location} address = {e.address} price = {e.price} room = {e.room} bath = {e.beth} area = {e.area} bed = {e.bed}/>
                     )
              })
      }
    </div>
  )
}
