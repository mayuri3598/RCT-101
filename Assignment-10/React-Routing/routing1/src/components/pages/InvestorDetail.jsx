import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

export const InvestorDetail=()=>{
    const {id}= useParams();

    const [user, setUser]= useState([]);
    useEffect(()=>{
        const getData=async()=>{
            let res= await fetch(`https://reqres.in/api/users/${id}`);
            let data= await res.json();
          setUser(data.data)
        }
        getData();
    }, [])

    return(
        <div>
            <img src={user.avatar}></img>
            <h1>{user.first_name}{"  "}{user.last_name}</h1>
        </div>
    )
}