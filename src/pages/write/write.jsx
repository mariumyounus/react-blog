import "./write.css"

export default function write() {
  return (
    <div className="write">
    <img src="https://media.istockphoto.com/id/1301592082/photo/beautiful-meadow-field-with-fresh-grass-and-yellow-dandelion-flowers-in-nature.jpg?b=1&s=612x612&w=0&k=20&c=D2pZlBdxd1Pod9jvpA2GO5oTxaV9p45XKu0J2tYBEew=" alt="" className="writeImg"></img>
 <form className="writeForm">
    <div className="writeFormGroup">
    <label htmlFor="fileInput"></label>
    <i className=" writeIcon fa-solid fa-plus"></i>
        <input type="file"  id="fileInput" style={{display:"none"}}/>
        <input type="text" placeholder="Title" className="writeInput" autoFocus={"True"}></input>
    </div>
    <div  className="writeFormGroup">
        <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
    </div>
    <button className="writeSubmit">Publish</button>
 </form>
    </div>
  )
}
