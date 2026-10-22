// import { useRef } from "react"
import { useRef } from "react"

// const App = () => {
//   const formInputs = useRef("")

//   return (
//    <>
//    <form onSubmit={handleSubmit}>
//     <input type="text" placeholder="Enter Name" />
//     <input type="email" placeholder="Enter Email" />
//     <button onFocus={handleFocus}>Focus Name</button>
//     <button onFocus={handleFocus}>Focus Email</button>
//     <button>Clear</button>
//    </form>
//    </>
//   )
// }

// export default App



const App = () => {
  const show = useRef("")

  const showText=()=>{
   show.current.innerText = "hello"
  }
  return (
   <>
   <h1 ref={show}>summa</h1>
   <button onClick={showText}>show </button>
   </>
  )
}

export default App