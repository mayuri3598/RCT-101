import { useState } from "react";
import "./todoitem.css"

function Todoitems({todoitem, getCompleted}){
    function completedTodo(item){
        if(item.status==true)
        {
          getCompleted(item);
        }
    }

    const filterCompleted = (event,todoItem) => {
        if(event.target.checked){
           todoItem.status=true
           completedTodo(todoItem)
        } else {
            todoItem.status=false
        }
     }


    return(
        <div className="container">
            <h2>{todoitem.text}</h2>
            <input className="checked" type="checkbox" onChange={event =>filterCompleted(event, todoitem)}></input> 
        </div>
    )
}

export default Todoitems