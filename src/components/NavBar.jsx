import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Login from "./Login";
import Products from "./Products";
import Register from "./Register";
const NavBar=()=>{
    return (
        <div>
            <ul style={{listStyleType:"none",display:"grid",gridTemplateColumns:"15% 15% 15% 15% 15%"}}>
                <li><Link to="/" element={<h1>Welcome to Home!</h1>}>Home</Link></li>
                <li><Link to="/aboutus" element={<AboutUs/>}>About Us</Link></li>
                <li><Link to="/contactus" element={<ContactUs/>}>Contact Us</Link></li>
                <li><Link to="/products" element={<Products/>}>Products</Link></li>
                <li><Link to="/login" element={<Login/>}>Login</Link></li>
                <li><Link to="/register" element={<Register/>}>Register</Link></li>
            </ul>
        </div>
    )
}
export default NavBar;