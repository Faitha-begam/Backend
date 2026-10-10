import { useState } from "react"

const App = () => {
  const [data, setData] = useState("")
  const [input,setInput] = useState([])

  // const handleChange=(e)=>{
  //    setData(e.target.value)
  // }

  const handleClick=()=>{
     setInput((p)=>([...p, data]))

     
  }
  return (
    <>
    <h2>{data}</h2>
    <input className="bg-gray-200" type="text" />
    <button onClick={handleClick}>add</button>
    </>
  )
}

export default App
