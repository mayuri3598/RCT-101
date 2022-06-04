import { Button, CartNos} from "./styles"
import "./Css/navigation.css"
import { Link } from "react-router-dom"
import {ShoppingCartOutlined} from '@ant-design/icons'
export const Navbar = () => {
    const navcontent=[
        {title:"Home", to:"/"},
        {title:"About", to:"/about"},
        {title:"Products", to:"/products"},
        {title:"Careers", to:"/careers"},
        {title:"Investors", to:"investors"}
    ]
    return (
        <div className="navigation">
            <div style={{padding:"10px", display: "flex", justifyContent: "space-around", width: "80%", margin: "auto" }}>
                <p>Choose another country or region to see content specific to your location.</p>
                <select style={{width:"300px", border:"none", textAlign:"right", background:"rgb(66,66,69)", color:"white"}}>
                    <option>India</option>
                    <option>Other country or region</option>
                </select>
                <Button>Continue</Button>
                <ShoppingCartOutlined style={{fontSize:'30px', marginTop:'1%'}} />
                <CartNos>0</CartNos>
            </div>
            <div style={{display:"flex",justifyContent:"space-evenly", padding:"8px", background:"rgb(46,46,46)"}}>
                {navcontent.map((e,i)=>(
                    <Link className="styledLink" key={i} to={e.to}>{e.title}</Link>
                ))}
            </div>
            <img style={{width:"100%"}} src="https://freeshoppingdeal.com/wp-content/uploads/2021/02/Myntra-Clearance-Sale.jpg"></img>

        </div>
    )

}