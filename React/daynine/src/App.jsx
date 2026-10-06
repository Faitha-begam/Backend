import { useState } from "react"

const App = () => {
  const [name,setName] = useState("Arun")
  let [number, setNumber] = useState(0)
  const [show, setShow] = useState(false)
  const [newName, setNewName] = useState("")

  const handleClcik =()=>{
    setName("Kumar")
  }
  const increaseNum =()=>{
    setNumber(number+1)
  }
  const decreaseNum =()=>{
    setNumber(number-1)
  }
  const reset =()=>{
    setNumber(0)
  }
  const handleChange =()=>{
    setShow(!show)
  }
  const handleName =()=>{
    setNewName()
  }
``
  return (
    <>
    <h3>Task 1</h3>
    <h2>Name: {name}</h2>
    <button className="bg-black text-white p-2 w-35 rounded" onClick={handleClcik}>change name</button>

    <h3>Task 2</h3>
    <h2>{number}</h2>
    <button className="bg-black text-white p-2 w-35 rounded" onClick={increaseNum}>Increase</button>
    <button className="bg-black text-white p-2 w-35 rounded" onClick={decreaseNum}>Decrease</button>
    <button className="bg-black text-white p-2 w-35 rounded" onClick={reset}>Reset</button>

    <h3>Task 3</h3>
    {show?<h2>Welcome to React</h2>:""}
    <button className="bg-black text-white p-2 w-35 rounded" onClick={handleChange}>{show?"hide":"show"}</button>

    <h3>Task 4</h3>
    <input className="bg-gray-300" type="text" onChange={(e)=>setNewName(e.target.value)}/>
    <h2>{newName}</h2>
    </>
  )
}

export default App
