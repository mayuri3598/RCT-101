import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { TodoInput } from './components/TodoInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <TodoInput/>
    </div>
  )
}

export default App
