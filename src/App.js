
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import Products from "./components/Products";
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
function App() {
  return (
      <Router>
      <NavBar/>
           <Routes>
             <Route path="/" element={<Home/>}></Route>
             <Route path="/aboutus" element={<AboutUs/>}></Route>
             <Route path="/contactUs" element={<ContactUs/>}></Route>
             <Route path="/login" element={< Login/>}></Route>
             <Route path="/products" element={<Products/>}></Route>
             <Route path="/register" element={<Register/>}></Route>
           </Routes>  
      </Router>
  
  );
}

export default App;
