import "./settings.css"
import Sidebar from "../../components/sidebar/sidebar";
export default function settings() {
  return (
    <div className="settings">
 <div className="settingsWrapper">
    <div className="settingsTitle">
        <span className="settingsUpdateTitle">Update Your Account</span>
        <span className="settingsDeleteTitle">Delete Your Account</span>
    </div>
    <form className="settingsForm">
        <label >Profile Picture</label>
        <div className="settingspp">
            <img src="https://media.istockphoto.com/id/1192780580/photo/fuji-mountain-red-maple-tree-and-fisherman-boat-with-morning-mist-in-autumn-kawaguchiko-lake.jpg?s=612x612&w=0&k=20&c=-FiZmc4qf2lVWlHf1WxysjoPJN7doER4qRmoPDLJpSw=" alt=""></img>
            <label htmlFor="fileInput">
            <i className=" settingsPpIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}></input>
        </div>
        <label>UserName</label>
        <input type="text" placeholder="Marium"></input>
        <label>Email</label>
        <input type="Email" placeholder="Marium@gmail.com"></input>
        <label>Password</label>
        <input type="password" ></input>
        <button className="settingsSubmit">Update</button>
    </form>
 </div>
 <Sidebar/>
    </div>
  )
}
