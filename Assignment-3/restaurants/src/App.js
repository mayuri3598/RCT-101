import { Restaurants } from './components/Restaurants';
import {Form} from './components/Form'
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [page, setPage]=useState(1);
 
  const [rest, setRes]= useState([]);
  useEffect(()=>{
    getData();
  },[page])
  const getData=async()=>{
    let res= await fetch(`http://localhost:8080/restaurants?_page=${page}&_limit=9`);
    let data= await res.json();
    // console.log(data)
    setRes(data);  
  } 
  //Show or no show~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const [show, setShow]= useState(false)
  const handleShow=(value)=>{
    if(value===true)
    {
      setShow(true)
    }
    else
    {
      setShow(false)
    }
  }
  // Form ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
  


  return (
    <div className="App" >
      <button className='next' onClick={()=>handleShow(!show)}>{show===false?"Add a Restaurant":"Hide The Form"}</button>
      {show===false?null:<Form/>}
      <Restaurants rest={rest} getData={getData}/>
      <button className='next' onClick={()=>{
        if(page<=1)
        {
          return;
        }
        setPage(page-1)
      }}>Prev</button>
      <button className='next' onClick={()=>{
        if(page>2)
        {
          return;
        }
        setPage(page+1)
      }}>next</button>
    </div>
  );
}

export default App;
