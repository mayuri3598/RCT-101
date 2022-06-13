import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { store } from './refactor/todo/store'
import { useDispatch, useSelector  } from 'react-redux'

import { nanoid } from 'nanoid'
import { Link, Route, Routes } from 'react-router-dom'
import Todo from './components/todo'
import TodoDetails from './components/tododetails'
import Login from './components/login'
import { Private } from './components/private'


function App() {




  return (
    <div className="App">
    {/* <h3>Counter : {counter}</h3>
    <button onClick={hnadlecount}>ADD 1</button> */}
   <Routes>
     <Route path='/' element={<Private><Todo/></Private>}></Route>
     <Route path='/:id' element={<TodoDetails></TodoDetails>}></Route>
     <Route path='/login' element={<Login></Login>}></Route>
   </Routes>

  
   
    </div>

    
  )
}

export default App
