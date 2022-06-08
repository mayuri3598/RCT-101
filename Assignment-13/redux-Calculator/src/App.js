import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Add ,sub , Multiply , Divide} from "./Store/action"
//creating app
function App() {
  const dispatch = useDispatch();

  const [value , setValue] = useState(0)

  const state = useSelector((state) => state)

  return (
    <div className="App">
      
      <h1>COUNTER : {state.count}</h1>
      <div>
        <input type="Number" onChange={e => setValue(e.target.value)}/>
        <br />
        <br />
        <button onClick={() => dispatch(sub(value))}>SUBTRACT</button>
        <br />

        <button onClick={() => dispatch(Add(value))}>ADD</button>
        <br />

        <button onClick={() => dispatch(Divide(value))}>DIVIDE</button>
        <br />

        <button onClick={() => dispatch(Multiply(value))}>MULTIPLY</button>
      

      </div>
    </div>
  );
}

export default App;
