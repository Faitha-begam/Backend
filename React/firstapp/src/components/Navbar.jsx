// import { Component, useContext } from "react";
// import Creator from "../createcontext/Creator";

import { useContext } from "react"
import Creator from "../createcontext/NameCreator"

// const Navbar =()=>{

  

  
//     return(
//     <nav>
//       <h2><u>Navbar</u></h2>
//       <strong>My Website</strong>
//       <span>Home | About | Contact</span>
//     </nav>
//     )

// }
// export default Navbar;

const Navbar = () => {

  const {name,handleChange} = useContext(Creator)

  return (
    <>
    <h4>{name}</h4>
    <button onClick={handleChange}>click to show</button>
    </>
  )
}

export default Navbar