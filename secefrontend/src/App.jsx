import Home from "./components/FunctionalComponents/Home";
import About from "./components/FunctionalComponents/About";
import React, { useReducer, useRef } from 'react';
import Gallery from "./components/FunctionalComponents/Gallery";
import Contact from "./components/FunctionalComponents/Contact";
import Navbar from "./components/FunctionalComponents/Navbar";
import UseState from "./components/FunctionalComponents/Hooks/UseState";
import Signup from "./components/FunctionalComponents/Signup";
import UseEffect from "./components/FunctionalComponents/Hooks/UseEffect";
import UseEffectApi from "./components/FunctionalComponents/Hooks/UseEffectAPI";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import UseEffectAPIimage from "./components/FunctionalComponents/Hooks/UseEffectAPIimage";
import UseRef from "./components/FunctionalComponents/Hooks/UseRef";
import UseMemo from "./components/FunctionalComponents/Hooks/UseMemo";
import UseCallback from "./components/FunctionalComponents/Hooks/UseCallback";
import UseReducer from "./components/FunctionalComponents/Hooks/UseReducer";
import ReactLifecycleMethods from "./components/classComponents/ReactLifeCycleMethods";
function App() { 
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path="/Gallery" element={<Gallery image="SECE logo" page="Gallery"/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/ReactLifecycleMethods" element={<ReactLifecycleMethods />}></Route>
          <Route path="/UseState" element={<UseState/>}></Route>
          <Route path="/UseEffect" element={<UseEffect/>}></Route>
          <Route path="/use-effectapi" element={<UseEffectApi/>}></Route>
          <Route path="/useimg" element={<UseEffectAPIimage/>}></Route>
          <Route path="/use-ref" element={<UseRef />}></Route>
          <Route path="/use-memo" element={<UseMemo/>}></Route>
          <Route path="/use-call" element={<UseCallback/>}></Route>
          <Route path="/use-reducer" element={<UseReducer/>}></Route>          <Route path="/Signup" element={<Signup/>}></Route>
        </Routes>
    </BrowserRouter>
        )
  }
  
  export default App;