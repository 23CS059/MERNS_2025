import Home from "./components/FunctionalComponents/Home";
import About from "./components/FunctionalComponents/About";
import ClassCompEG from "./components/classComponents/ClassCompEG";
import Gallery from "./components/FunctionalComponents/Gallery";
import Contact from "./components/FunctionalComponents/Contact";

import Navbar from './components/components/FunctionalComponents/Navbar'
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
 function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/ClassCompEG" element={<ClassCompEG />}></Route>
        <Route path="/Gallery" element={<Gallery/>}></Route>
      </Routes>
      </BrowserRouter>
    <section>
    <Home/>
    <About/>
    <ClassCompEG/>
    <Gallery image="sece Logo" page="Gallery"/>
    <Constact/>
    </section>
    </>
)
}

export default App;