import { useEffect, useState } from "react"
import '../Css/latest.css'
import { Link } from "react-router-dom";

export const Latest= ()=>{
    const [latest, setLatest]= useState([]);
//     category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating: {rate: 3.9, count: 120}
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"

    useEffect(()=>{
        getLatest();
    },[])

    const getLatest= async()=>{
        let res= await fetch('https://fakestoreapi.com/products');
        let data= await res.json();
        setLatest(data);
    }
    console.log(latest)
    return (
        <div id="main">
            {
                latest.map((e)=>(
                    <Link to={`/products/products/latest/${e.id}`}>
                    <div className="element" style={{padding:'10px'}}>
                        <img src={e.image}></img>
                        <h4>{e.title}</h4>
                        <p>Price:$ {e.price}</p>
                    </div>
                    </Link>
                ))
            }
        </div>
    )
}