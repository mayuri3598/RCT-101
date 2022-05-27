import Form from './components/Form'
import {Table} from './components/Table'
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData]=useState([]);
  useEffect(()=>{
    getData();
  },[])

  const getData = async ()=>{
    let res= await fetch("http://localhost:8080/profile");
    let data= await res.json();
    console.log(data);
    setData(data)
  }
    
  return (
    <div className="App">
      <h1>Enter Employee Details</h1>
      <Form/>
      <h1>Employee Details</h1>
      <Table data={data}/>
    </div>
  );
}

export default App;
