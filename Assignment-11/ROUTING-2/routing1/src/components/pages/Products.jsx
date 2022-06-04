import { Link } from "react-router-dom"
// import {Latest} from './Latest'
export const Products=()=>{
    return(
        <div>
            <div style={{display:"flex",justifyContent:"space-evenly", padding:"8px", background:"rgb(46,46,46)", color:"white"}}>
                <Link to={'products/latest'}>Latest</Link>
                <p>Mens</p>
                <p>Womens</p>
                <p>Unisex</p>
                <p>Accessories</p>
            </div>

        </div>
    )
}