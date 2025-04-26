import "./post.css";

export default function post() {
  return (
    <div className="post">
    <img className="postImg" src="https://images.pexels.com/photos/532168/pexels-photo-532168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img>
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem Ipsum </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postdesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
  )
}
