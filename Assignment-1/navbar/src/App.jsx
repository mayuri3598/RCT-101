
import './App.css';


function App() {

  const arr = ["Services", "Projects", "About"]

  return (
    <div className="App">

      <Logo value={"LOGOBAKERY"}></Logo>

     <div className="three">{arr.map((el)=>{
       return <Option arr={el}> </Option>
     })}</div>

    <Button></Button>
    </div>
  );
}

function Option({arr}){
  return(
    <div className='option'>
      <p>{arr}</p>
    </div>
  )
}


function Logo({value}){
  return (
    <div>
      <h2>{value}</h2>
    </div>
  )
}


function Button(){
  return(
    <div>
      <button  className="button1">Connect</button>
    </div>
  )
}



export default App;
