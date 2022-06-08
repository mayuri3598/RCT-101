// import logo from './logo.svg';
import './App.css';
import {Flex} from 'chakra-ui/react'
// import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
// import PaymentCard from './components/PaymentCard';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Flex>
           <Sidebar />
      </Flex>
      {/* <PaymentCard /> */}
      
    </div>
  );
}

export default App;
