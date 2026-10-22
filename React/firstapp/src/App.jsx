// // import { Component } from "react";
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";
// // import Banner from "./components/Banner";
// // import About from "./components/About";
// // import Contact from "./components/Contact";

import { useContext } from "react"
import Creator from "./createcontext/NameCreator"
import Navbar from "./components/Navbar"


// // class App extends Component{

// //   render(){
// //     return(
// //       <>
// //        <Navbar/>
// //        <Banner/>
// //        <About/>
// //        <Contact/>
// //        <Footer/>
// //       </>
// //       )
// //     }
// // }



// // export default App;

// import HooksPractice from './components/hookPractice'

// const App = () => {
//   return (
//     <HooksPractice/>
//   )
// }

// export default App


const App = () => {
  const {name,handleChange} = useContext(Creator)
  return (
    <>
    <h3>{name}</h3>
    <button onClick={handleChange}>click to show</button>
    <Navbar/>
    </>
  )
}

export default App