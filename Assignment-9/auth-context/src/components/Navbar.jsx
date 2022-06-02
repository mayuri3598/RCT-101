import "./navbar.css"
import {AuthContext} from "./AuthContext";
import {useContext} from 'react'
function Navbar(){
    const {token}= useContext(AuthContext);
    const {handletoken}=useContext(AuthContext);

    const logoutfunction=()=>{
        handletoken(null)
    }
    
    return(
        <div className="navigationbar">
            <div className="displaystatus">
                <p>{token? `Loggen in: EVE HOLT`:null}</p>
                <p>{token? `Token:${token}`:"Login"}</p>
                {token? <button onClick={logoutfunction}>Log Out</button>: null}
            </div>
        </div>
    )
}
export {Navbar};