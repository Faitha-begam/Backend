import { useEffect, useState } from "react"

const App = () => {
  const [timer,setTimer] = useState(0)
  
  useEffect(() => {
    const timer = setInterval(() => {
        setTimer(p => p+1)
        // console.log(setTimer);
        
    }, 1000)
    
    return ()=>clearInterval(timer)
  }, [])
  
  return (
    <>
   <div className="bg-blue-200 h-30 w-90 flex justify-center items-center rounded my-50 ">
     <div className="">
      <h2 className="text-primary fw-bold text-center mb-4 ">Timer Counter</h2>
      <button className="font-bold font-2xl text-center bg-black text-white w-30 rounded">{timer}</button>
      <button onClick={handleClick}>click to start</button>
     </div>
   </div>
    </>
  )
}

export default App