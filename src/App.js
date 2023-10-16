import HomePage from "./components/HomePage";
import About from "./components/About"
import PageNotFound from "./components/404";
import NavBar from "./components/NavBar";
import { Milktea }  from "./components/Milktea";
import { Shake } from "./components/Shake";

import {Route, Routes } from "react-router-dom";
import List from "./components/List";
function App() {
  return (
    <>
      <NavBar/>
      <Routes>
           <Route path="/" element = {<HomePage/>}/>
           <Route path="/about" element = {<About/>}/>
         
           <Route path = "/list" element = {<List/>}>
              <Route path = "milktea" element = {<Milktea/>}/>
              <Route path = "shake" element = {<Shake/>}/>
           </Route>
           <Route path = "*" element = {<PageNotFound/>}/>
      </Routes>
   </>

  );
}

export default App;
