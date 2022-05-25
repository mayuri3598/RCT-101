import {useState,useEffect} from "react";

function Timer(){
 const[timer,setTimer]=useState(1);
  const khatamTime=15;
 useEffect(()=>{
    let id= setInterval(()=>{
         setTimer((prev)=>{
             if(prev===khatamTime){
                 clearInterval(id);
                 return 15;
             }
             return prev+1;
         })
     },1000)

     return(()=>{
         clearInterval(id)
     })
 },[])


 return (
     <div>
         <h2>Timer:{timer}</h2>
     </div>
 )
}

export {Timer};