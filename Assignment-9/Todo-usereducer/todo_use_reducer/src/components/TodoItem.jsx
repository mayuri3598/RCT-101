import React from 'react'

export const TodoItem = ({task,status,toggleStatus,deleteTask}) => {
  return (
    <div>
      <p>{task}</p>
      <button onClick={()=>toggleStatus(task)}>{status?"done":"not-done"}</button>
      <button onClick={()=>deleteTask(task)}>Del</button>
    </div>
  )
}
