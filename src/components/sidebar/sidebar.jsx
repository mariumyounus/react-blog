import "./sidebar.css"

export default function sidebar() {
  return (
    <div className="sidebar">
   <div className="sidebarItem">
  <span className="sidebarTitle">AboutMe</span>
  <img style={{width:"80%",height:"200px"}}src="https://images.pexels.com/photos/96627/pexels-photo-96627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   alt=""></img>
   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   </p>
   
  
   </div>
   <div className="sidebarItem">
    <span className="sidebarTitle">Categories</span>
    <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cinema</li>
    </ul>
    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">Follow Us</span>
    <div className="sidebarSocial">
    <i className="sidebarIcon fa-brands fa-facebook"></i>
    <i className="sidebarIcon fa-brands fa-twitter"></i>
    <i className="sidebarIcon fa-brands fa-pinterest"></i>
    <i className="sidebarIcon fa-brands fa-instagram"></i>
    </div>
    </div>
    </div>
  )
}
