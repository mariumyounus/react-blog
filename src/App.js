
import React from "react";
import Topbar from "../src/components/topbar/topbar";

import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Settings from "./pages/settings/settings";
import Write from "./pages/write/write";
import Single from "./pages/single/single"
import Register from "./pages/register/register"
import {

  Routes,
  Route
} from "react-router-dom";



function App() {
const user=false;
  return (

    <div className="App">
  
      <Topbar/>
     
     <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route  path="/register" element={user ? <Home /> : <Register />} />
     <Route  path="/login" element={user ? <Home /> : <Login />} />
     <Route  path="/settings"  element={user ? <Settings /> : <Register />} />
     <Route  path="/write" element={user ? <Write /> : <Register />} />
     <Route path="/post/:postId" element={<Single />} />
    
     
     </Routes>
   
   </div>
      
   
   
  );
}
export default App;
