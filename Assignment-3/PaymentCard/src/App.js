import './App.css';
import Card from './component/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
let amazon = "https://cutewallpaper.org/24/amazon-icon-png/amazon-icon-free-download-on-iconfinder.png";
let apple = "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png";
// pass the values like date, logo, heading, subheading, devices, and color as props from parent
function App() {  
  return (
    <div className="App">
         <h1>Cards</h1>    
          {/* Amazon */}
         <div className="yellow">
          <Card date={"28/10/2020"} heading={"Amazon Gift"} subheading="Pay" devices="Desktop" logo={amazon} />
         </div>  
         {/* Apple */}
         <div className="gray">
          <Card date={"17 Sep 2020"} heading={"Apple Gift"} subheading="Payment" devices="MacOS" logo={apple} />
         
         </div>
         {/* <FontAwesomeIcon icon="fa-light fa-arrow-right" /> */}
    </div>
  );
}

export default App;
