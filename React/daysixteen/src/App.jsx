// import { useEffect, useState } from "react"

import { useEffect, useState } from "react"

// const App = () => {
//   const [timer,setTimer] = useState(0)
//   const [start, setStart] = useState(false)

//   useEffect(() => {
//     if(!start) return
//       const timer = setInterval(() => {
//         setTimer(p => p+1)
//         // console.log(setTimer);
//     }, 1000)
    
    
//     return ()=>clearInterval(timer)
//   }, [start])
  
 
//   return (
//     <>
//    <div className="bg-blue-200 h-60 w-90 flex justify-center items-center rounded my-50 ">
//      <div className="flex flex-col gap-6">
//       <h2 className="text-primary fw-bold text-center mb-4 ">Timer Counter</h2>
//       <button className="font-bold font-2xl text-center bg-blue-900 rounded-4xl mx-8 text-white w-10 ">{timer}</button>
//       <button onClick={()=>setStart(!start)}  className="bg-black text-white p-1 rounded">click to start</button>
//      </div>
//    </div>
//     </>
//   )
// }

// export default App

const App = () => {

  const [count,setCount] = useState(0)
  const [run,setRun] = useState(false)
  const [msg,setMsg] = useState("Please Wait...")



  // ------------------Task 1 -------------------------
  const handleClick=()=>{
    setRun(true)
  }
  useEffect(()=>{
   if(run){
    const timer = setInterval(()=>{
      setCount((p)=>p+1)
    },1000)
    return ()=> clearInterval(timer)
   }
  },[run])

  const handleStop=()=>{
    setRun(false)
  }

  const handleReset=()=>{
    setCount(0)
    setRun(false)
  }

// ------------------------Task 2 ------------------------
useEffect(()=>{
 const message = setTimeout(()=>{
    setMsg("Welcome to React!")
  },3000)
  return ()=> clearInterval(message)
},[msg])

const handleResetMsg=()=>{
  setMsg("Please Wait...")
}

  return (
    <>
   <div className="bg-blue-200 h-70 w-110 flex justify-center items-center rounded mx-150 mt-10 ">
    
    <div className="flex flex-col gap-6">
      <h1 className=" font-bold text-center mb-4 ">Digital Timer Application - Timer counter</h1>
      <p className="font-bold font-2xl text-center bg-blue-900 rounded-4xl mx-34 text-white w-10 ">{count}</p>

      <div className="flex gap-4">
        <button onClick={handleClick} className="bg-black text-white p-2 rounded">click to start</button>
        <button onClick={handleStop} className="bg-black text-white p-2 rounded">stop timer</button>
        <button onClick={handleReset} className="bg-black text-white p-2 rounded">Reset timer</button>
      </div>
    
    </div>
    
  </div>

  <div className="bg-blue-200 h-70 w-110 flex justify-center items-center rounded mx-150 m-10">
    <div>
       <h1 className=" font-bold text-center mb-4 "> Automatic Welcome Message </h1>
       <p className="font-bold font-2xl text-center mx-34 text-amber-800">{msg}</p>
       <button onClick={handleResetMsg} className="bg-black text-white w-50 m-4 mx-30 p-2 rounded">Reset Message</button>
    </div>
  </div>
    </>
  )
}

export default App