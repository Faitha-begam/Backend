import { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import About from "./components/About";
import Contact from "./components/Contact";


class App extends Component{

  render(){
    return(
      <>
       <div>
         hello
       </div>
       <Navbar/>
       <Banner/>
       <About/>
       <Contact/>
      </>
      )
    }
}



export default App;
