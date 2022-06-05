import React from 'react'
import { TodoItem } from './TodoItem'
import { v4 as uuidv4 } from 'uuid';
export const TodoList = ({todos,toggleStatus,deleteTask}) => {
  return (
    <div>
      {todos.map((e)=><TodoItem task = {e.task} status={e.status} key={uuidv4()} toggleStatus={toggleStatus} deleteTask={deleteTask} />)}
    </div>
  )
}
