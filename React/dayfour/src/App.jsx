import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>
    </>
  )
}

export default App
