import "./posts.css";
import Post from "../post/post"
import { Link } from "react-router-dom";



export default function posts() {
  return (
    <div className="posts">
    
   <Link  to="/post/:postId" className="link"><Post/></Link>
   <Link  to="/post/:postId" className="link"><Post/></Link>
   <Link  to="/post/:postId" className="link"><Post/></Link>
   <Link  to="/post/:postId" className="link"><Post/></Link>
   <Link  to="/post/:postId" className="link"><Post/></Link>
   <Link  to="/post/:postId" className="link"><Post/></Link>

    
    </div>
  )
}
