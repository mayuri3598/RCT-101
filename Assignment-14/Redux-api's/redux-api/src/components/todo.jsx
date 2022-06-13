import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import { store } from '../refactor/todo/store'
import { useDispatch, useSelector  } from 'react-redux'
import { deleteTodo, sort, todos } from "../refactor/todo/action"

let Todo = ()=>{
     


   
    let deleteodo = (id)=>{
      dispatch(deleteTodo(id))
    }
    let dispatch = useDispatch()

    let todoStore = useSelector((store)=>store.todos)
    var completed= todoStore.filter(e=>(e.status===true))
    
    let [todostate , settodo] = useState("")

    
    let posttodo = async()=>{
  
      let payload = {
        title:todostate,
        status:"false"
      }
       try {
         let res = await fetch("http://localhost:8080/todos",{
           method:"POST",
           headers:{
             "content-type":"application/json"
           },
           body:JSON.stringify(payload)
         })
       } catch (error) {
          console.log(error)
       }
       getdata()
       settodo("")

    }
  

    useEffect(()=>{
        getdata()
      },[])
     
      let getdata = async()=>{
           try {
             let res = await fetch("http://localhost:8080/todos")
             let data = await res.json()
             dispatch(todos(data))
           } catch (error) {
             console.log(error)
           }
      }
    return (
        <div>
          
          <select onChange={(e)=>{
            dispatch(sort(e.target.value))
          }}>
            <option value="">Sort</option>
            <option value="id">id</option>
          </select>
          
            <input value={todostate} onChange={e => settodo(e.target.value)} type="text" />
    <button onClick={posttodo}>ADD TODO</button>
        <br />
         completed - {completed.length}
          <br />
          total  - {todoStore.length}
          <br />
    <h3>{todoStore.map(e => <div><Link  to={`/${e.id}`}>{e.id}-{e.title}</Link><br /><button onClick={()=>{deleteodo(e.id)}}>Delete</button> <br /></div>) }</h3> 
        </div>
    )
}
export default Todo