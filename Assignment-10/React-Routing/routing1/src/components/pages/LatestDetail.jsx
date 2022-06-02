import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { StarOutlined } from "@ant-design/icons";
import { Button } from "../styles";
export const LatestDetail = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({});
    useEffect(() => {
        const getData = async () => {
            let res = await fetch(`https://fakestoreapi.com/products/${id}`);
            let data = await res.json();
            setProduct(data)
        }
        getData();
    }, [])
    // console.log(product.rating.rate)
    return (
        <div>
            <div style={{ display: 'flex', textAlign:'left' ,padding:'30px'}}>
                <div style={{padding:'20px', width:'40%', textAlign:'center'}}>
                    <img  style={{width:'50%', height:'500px'}} src={product.image}></img>
                </div>
                <div>
                    <h1>{product.title}</h1>
                    <h3>CATEGORY: {product.category}</h3>
                    {/* <div style={{display:'flex', gap:'20px'}}>
                        <h4>Rating: {product.rating.rate}</h4>
                        <h4>No of Votes: {product.rating.count}</h4></div> */}
                    <p><span style={{fontWeight:'bold'}}>DESCRIPTION: </span>{product.description}</p>
                    <h3>PRICE: {product.price}</h3>
                    <Button>ADD TO CART</Button>
                </div>
            </div>
        </div>
    )
}