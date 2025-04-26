import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
  return (
    <div className="register">
    <span className="registerTitle">Register</span>
      <form className="registerForm">
      <label>UserName</label>
        <input type="text" className="registerInput" placeholder="Enter Your Name..."></input>
        <label>Email</label>
        <input type="text" className="registerInput" placeholder="Enter Your Email..."></input>
        <label>Password</label>
        <input type="password" className="registerInput" placeholder="Enter Your Password..."></input>
        <button className="registerButton">Register</button>
      </form>
      <button className="registerRegisterButton"><Link className="link" to="/login">Login</Link></button>
    </div>
  )
}
