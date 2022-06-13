import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { edit, todos, togglestatus } from "../refactor/todo/action"
import { store } from "../refactor/todo/store"

let TodoDetails = () => {
  let state = store.getState()

  let { id } = useParams()
  let dispatch = useDispatch()

  let todoStore = useSelector((store) => store.todos)

  useEffect(() => {
    getdata()
  }, [])

  let getdata = async () => {
    try {
      let res = await fetch(`http://localhost:8080/todos/${id}`)
      let data = await res.json()
      data = [data]
      dispatch(todos(data))
    } catch (error) {
      console.log(error)
    }
  }


  const [input_data, setin] = useState("")


  var alldata = {
    input_data:input_data,
    id:id
  }

  return (
    <div>
      <h3>{todoStore.map(e => <div>{e.id}-{e.title}-{e.status === true ? "Completed" : "Not Completed"}<button onClick={() => { dispatch(togglestatus(e)) }}>Toggle Status</button><br /><input type="" value={input_data} onChange={(e) => { setin(e.target.value) }} name="" id="" /><button disabled={!input_data} onClick={() => { dispatch(edit(alldata)) }}>EDIT</button></div>)}</h3>
    </div>
  )
}

export default TodoDetails