import { Navbar } from './components/Navbar';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import {Home} from './components/pages/Home'
import {About} from './components/pages/About'
import {Career} from './components/pages/Career'
import {Investors} from "./components/pages/Investors"
import {Products} from "./components/pages/Products"
import {InvestorDetail} from "./components/pages/InvestorDetail"
import {LatestDetail} from './components/pages/LatestDetail';
import { ErrorRoute } from './components/pages/ErrorRoute';

import 'antd/dist/antd.less'
import { Latest } from './components/pages/Latest';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='products/products/latest' element={<Latest/>}></Route>
        <Route path='/products/products/latest/:id' element={<LatestDetail/>}></Route>
        <Route path='/careers' element={<Career/>}></Route>
        <Route path='/investors' element={<Investors/>}></Route>
        <Route path="/investors/:id" element={<InvestorDetail/>}></Route>
        <Route path="*" element={<ErrorRoute />}></Route>
      </Routes>
      <img style={{width:"100%", marginTop:"100px"}} src='https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-03/9c122b50-3559-11eb-918f-7f7b011be452.jpg'></img>
    </div>
  );
}

export default App;
