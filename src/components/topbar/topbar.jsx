
import "./topbar.css"
import "../images/marium.png";
import {Link } from "react-router-dom";

export default function topbar() {
    const user=false;
  return (
    <div className='top'>
    <div className="topLeft">
    <i className="topIcon fa-brands fa-facebook"></i>
    <i className="topIcon fa-brands fa-twitter"></i>
    <i className="topIcon fa-brands fa-pinterest"></i>
    <i className="topIcon fa-brands fa-instagram"></i>
    </div>
    <div className="topCentre">
        <ul className="topList">
            <li className="topListItem"><Link className="link" to="/">Home</Link></li>
            <li className="topListItem"><Link className="link" to="/settings">About</Link></li>
            <li className="topListItem"><Link className="link" to="/register">Contact</Link></li>
            <li className="topListItem"><Link className="link" to="/write">Write</Link></li>
            <li className="topListItem">
            {user && "Logout"}
            </li>
        </ul>
    </div>
    <div className="topRight">
    {
        user ? (
       <img className="topImage" 
       src="https://images.pexels.com/photos/799420/pexels-photo-799420.jpeg" alt="myimage"></img>
       ) : (
        <ul className="topList">
       <li className="topListItem"> <Link className="link" to="/login">Login</Link></li>
       <li className="topListItem"> <Link className="link" to="/register">Register</Link></li></ul>)}
       <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
    </div>
</div>)
}
