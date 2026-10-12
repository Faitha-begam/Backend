import { useState } from "react"

const App = () => {
  const [name,setName] = useState("")
  const [storeName, setStoreName] = useState([])

  const handleChange=(e)=>{
    setName(e.target.value)
  }
  const addStudent=()=>{
    setStoreName((p)=>[...p,name])
    setName("")
  }

  return (
    <>
    <h2 className="font-bold text-2xl text-center">Task 1 – Student Name List</h2>
    <div>
      <input type="text" value={name} onChange={handleChange} placeholder="Enter Name..." />
      <button onClick={addStudent}>Add Student</button>
    </div>
    <div>
      {storeName.map((e,i)=>(
        <h3 key={i+1}>{e}</h3>
      ))}
    </div>
    </>
  )
}

export default App
