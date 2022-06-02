
import './App.css';
import {Navbar} from "./components/Navbar"
import {Loginform} from "./components/Loginform"


function App() {
  return (
    <div className="App">
      <h1>AuthContext</h1>
      <Navbar/>
      <Loginform/>
    </div>
  );
}

export default App;
