import { useState } from "react";
import Todoinput from "./TodoInput";
import Todoitems from "./TodoItem"
import { nanoid } from "nanoid";
import Todocompleted from "./TodoCompleted"

function Todo(){
const [todoArr, setTodo]= useState([]);
const getData= (text)=>{
    const payload={
        text:text,
        status:false,
        id:nanoid()
    }
    setTodo([...todoArr, payload]);
}

const [completed, setCompleted]= useState([]);
const getCompdata=(item)=>{
    setCompleted([...completed, item])
}

const getCompleted=(item)=>{
   todoArr.map((e, i)=>{
    if(e.id==item.id)
    {
        getCompdata(item);
       todoArr.splice(i,1); 
    }  
   })
   setTodo([...todoArr])
}


return(
    <div>
        <Todoinput getData={getData}/>
        <h1>TODO LISTS</h1>
        {todoArr.map((e)=>(
            <Todoitems todoitem={e.status==false?e:null} getCompleted={getCompleted} />
        ))}
        <h1>{todoArr.length !=0? "COMPLETED TODOS":null}</h1>
        {
            completed.map((e)=>(
                // console.log(e.status)
               <Todocompleted todocomp={e.status==true? e:null}/>
            ))
        }
   
    </div>
)
}
export default Todo;