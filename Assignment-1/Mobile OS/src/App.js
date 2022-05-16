
import './App.css';

function App() {
  const os = ["Android", "Blackberry", "iPhone", "Windows Phone"]
  const manufacturer = ["Samsung", "HTC", "Micromax", "Apple"]
  return (
    <div className="App">
      <div>
        <h1>Mobile Operating System</h1>
        <ul>{os.map(e => {
          return <li>{e}</li>
        })}</ul>
        <h1>Mobile Manufacturer</h1>
        <ul>{manufacturer.map(e => {
          return <li>{e}</li>
        })}</ul>
      </div>
      {/* <Navbar/> */}
    </div>
  );

}

// function Navbar(){
//   return <div id="navbar">
//     <div><h3>LOGOBAKERY</h3></div>
//     <div class="middle">
//       <p>Services</p>
//       <p>Project</p>
//       <p>About</p>
//     </div>
//     <div>
//       <button>Contact</button>
//       </div>
//   </div>
// }

export default App;
