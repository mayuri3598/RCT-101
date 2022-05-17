import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [counter, setcount] = useState(0);
  // const class=["red","green"]
 
  const handleChange = (value) => {
    setcount(counter + value);
  };
  const handleDouble=(value)=>{
    setcount(counter*value);
  }

  return (
    <div className="App">

      {counter % 2 === 0 ? <h3 >Counter:<span style={{color:"green"}}>{counter}</span></h3>:<h3 >Counter:<span style={{color:"red"}}>{counter}</span></h3>}
     
      <button
        onClick={() => {
          handleChange(1);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          handleChange(-1);
        }}
      >
        Reduce
      </button>
      <button  onClick={() => {
          handleDouble(2);
        }}>Double</button>
      <div>number is {counter % 2 === 0 ? "even" : "odd"}</div>
    </div>
  );

}

export default App;
