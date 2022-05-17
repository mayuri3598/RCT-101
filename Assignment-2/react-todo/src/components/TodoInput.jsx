import { useState } from "react";
import "./todoinput.css"

function Todoinput({getData}){
    const [text, setText]= useState("")
    
    return (
        <div className="inputclass">
            <input className="todoinput" onChange={(e)=>(
                setText(e.target.value)
            )} type="text" placeholder="Enter Todos"></input>
            <button className="todobtn" onClick={()=>{
               getData(text);
            }}>Add</button>
            <todoItem/>
        </div>
    )
}
export default Todoinput