import { useEffect, useState } from "react"

const App = () => {
  const [timer,setTimer] = useState(0)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if(!start) return
      const timer = setInterval(() => {
        setTimer(p => p+1)
        // console.log(setTimer);
    }, 1000)
    
    
    return ()=>clearInterval(timer)
  }, [start])
  
 
  return (
    <>
   <div className="bg-blue-200 h-60 w-90 flex justify-center items-center rounded my-50 ">
     <div className="flex flex-col gap-6">
      <h2 className="text-primary fw-bold text-center mb-4 ">Timer Counter</h2>
      <button className="font-bold font-2xl text-center bg-blue-900 rounded-4xl mx-8 text-white w-10 rounded">{timer}</button>
      <button onClick={()=>setStart(!start)}  className="bg-black text-white p-1 rounded">click to start</button>
     </div>
   </div>
    </>
  )
}

export default App