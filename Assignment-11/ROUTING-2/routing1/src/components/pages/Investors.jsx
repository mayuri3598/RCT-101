import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

export const Investors=()=>{
    const [data, setData]= useState([]);
    useEffect(()=>{
        const getData=async()=>{
            let res= await fetch("https://reqres.in/api/users");
            let data= await res.json();
           setData(data.data)
        }
        getData();
    }, [])
    
    return(
        <div style={{display:"flex",justifyContent:"space-evenly", alignItems:"center"}}>
            {data.map((e,i)=>(
                <Link style={{fontSize:"30px", color:"black", textDecoration:"none"}} key={e.i} to={`/investors/${e.id}`}>{e.first_name}</Link>
            ))}
        </div>
    )
}