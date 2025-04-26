import "./login.css"
import { Link } from "react-router-dom"
export default function login() {
  return (
    <div className="login">
    <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" className="loginInput" placeholder="Enter Your Email..."></input>
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter Your Password..."></input>
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton"><Link className="link" to="/register">Register</Link></button>
    </div>
  )
}
