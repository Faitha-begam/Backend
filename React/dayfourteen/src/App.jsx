import { useState } from "react"

const App = () => {
  const [name,setName] = useState("")
  const [storeName, setStoreName] = useState([])
  const [courseName, setCourseName] = useState("")
  const [storeCourse, setStoreCourse] = useState([])
  const [num, setNum] = useState(0)
  const [storeNum, setStoreNum] = useState([])

  const handleChange=(e)=>{
    setName(e.target.value)
    }
  const addStudent=()=>{
    setStoreName((p)=>[...p,name])
    setName("")
  }
  const handleCourse=(e)=>{
    setCourseName(e.target.value)
  }
  const addCourse=()=>{
    setStoreCourse((p)=>[...p,courseName])
    setCourseName("")
  }
  const handleNumber=()=>{
    setNum(e.target.value)
  }
  const addNumber=()=>{
    setStoreNum()
  }
  return (
    <>
    <h2 className="font-bold text-2xl text-center">Task 1 – Student Name List</h2>
    <div>
      <input type="text" value={name} onChange={handleChange} placeholder="Enter Name..." />
      <button onClick={addStudent}>Add Student</button>
      <h2 className="font-bold text-2xl text-center">Task 2 – Course List</h2>
      <input type="text" value={courseName} onChange={handleCourse}  placeholder="Enter The Course Name..." />
      <button onClick={addCourse}>Add Course</button>
      <h2 className="font-bold text-2xl text-center">Task 3 – Number List</h2>
      <input type="text" onChange={handleNumber} placeholder="Enter Number..." />
      <button onClick={addNumber}>Add Number</button>
    </div>
    <div>
      {storeName.map((e,i)=>(
        <h3 key={i+1}>{e}</h3>
      ))}
    </div>
    <div>
      {storeCourse.map((e,i)=>(
        <p key={i+1}>{e}</p>
      ))}
    </div>
    

    </>
  )
}

export default App
