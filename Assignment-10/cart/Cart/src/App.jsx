import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Card } from './components/Card'
import Info from './Data/Info.json'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    {Info.map((info,idx)=>{
      return <Card info={info} key={idx}/>
    })}
    </div>
  )
}

export default App
