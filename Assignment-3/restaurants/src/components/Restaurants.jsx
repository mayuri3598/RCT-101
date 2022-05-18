// import { useEffect, useState } from 'react';
// import { useState } from "react"
import { useState } from "react"
import "./restaurant.css"
import {RestComponents} from "./RestComponents"
function Restaurants({rest, setRes}){
  // const [alldata, setAlldata]= useState([...rest])
  const [filter, setFilter]=useState("false");
    const handlepayment=((el)=>{
      console.log(el.target.value)
      if(el.target.value==="online")
      {
        setFilter("true")
        console.log(filter)
      }
      else if(el.target.value==="offline")
      {
        setFilter("false")
        console.log(filter)
      }
      })
      // else
      // {
        // setRes(alldata)
        // rest=[...alldata].filter((e)=>{
        //   return (e.card===true|| e.card===false)
        // })
        // setRes([...rest])
      // }
      
    
    const sortbyRating=(el)=>{
        console.log(el.target.value)
      if(el.target.value === 'l-h')
      {
        rest.sort(function(a, b) {
          return a.rating - b.rating;
        })
        setRes([...rest])
      } 
      else if(el.target.value === 'h-l')
      {
        rest.sort(function(a, b) {
            return b.rating - a.rating;
          })
        setRes([...rest])
      }
      else
      {
          return [...rest]
      }
    }
    return (
        <div>
            <div id='sortingfunctions'>
            <select onChange={(value)=>sortbyRating(value)}>
            <option value="sort" >Sort By</option>
            <option value="l-h">Low to Hight Rating</option>
            <option value="h-l">High to Low Rating</option>
            </select>
            <select onChange={handlepayment}>
            <option value="modes">Payment mode</option>
            <option value="online">Online Payment</option>
            <option value="offline">Offline</option>
            </select>
        </div>
        <div className="main">
           {rest.map((e)=>(
               <RestComponents key={e.id} item= {e}/>
           ))}
        </div>
        </div>
    )
}
export {Restaurants}