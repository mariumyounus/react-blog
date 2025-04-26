import "./home.css";
import Header from "../../components/header/header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/sidebar";
import { Link } from "react-router-dom";


export default function home() {
  return (
    <>
    <Header/>
    <div className="home">
    <Link to="Posts"></Link>
      <Link to="Sidebar"></Link>
      <Posts/>
      <Sidebar/>
     
    </div>
    </>
  )
}
