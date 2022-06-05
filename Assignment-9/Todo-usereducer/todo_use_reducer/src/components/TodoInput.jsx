import React, { useEffect, useReducer, useState } from 'react';
import {TodoList} from './TodoList';
const reducer = (todos,action)=>{
    switch(action.type){
        case "add_todo":{
            return [...todos,action.payload];
        }
        case "toggle_status":{
         return (   [...todos.map((e)=>{
                return (e.task==action.ctask?{...e,status:!status}:e)
            })])
        }
        case "del_task" :{
            return ([...todos.filter((e)=>{return (e.task!=action.dtask)})]);
        }
        default:{
            return todos;
        }
    }

}

export const TodoInput = () => {
    const[tasks,setTask] = useState( {
        task:"",
        status:false
    });
    const [todos,dispatch] = useReducer(reducer,[]);
    const handleChange = (e)=>{
        let {name,value}= e.target;
        setTask({...tasks,[name]:value});
    }
   console.log(todos);
   const toggleStatus= (ctask)=>{
       console.log(ctask);
       dispatch({type:"toggle_status",ctask:ctask});
   }
   const deleteTask = (dtask)=>{
       console.log(dtask);
       dispatch({type:"del_task",dtask:dtask});
   }
  return (
    <div>
        <input type="text" placeholder='Enter task' name='task' value={tasks.task} onChange={handleChange}/>
        <button onClick={()=>dispatch({type:"add_todo",payload:tasks})}>+</button>
        <TodoList todos={todos} toggleStatus={toggleStatus} deleteTask={deleteTask} />
    </div>
  )
}
