import { useState } from "react"

const App = () => {
  const [name,setName] = useState("")
  const [storeName, setStoreName] = useState([])
  const [courseName, setCourseName] = useState("")
  const [storeCourse, setStoreCourse] = useState([])
  const [num, setNum] = useState("")
  const [storeNum, setStoreNum] = useState([])
  const [fruit, setFruit] = useState("")
  const [storeFruit, setStoreFruit] = useState([])

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
  const handleNumber=(e)=>{
    setNum(e.target.value)
  }
  const addNumber=()=>{

    if(num%2===0){
      alert("even")
    }
    else{
      alert("odd")
    }
    setStoreNum((p)=>[...p,num])
    setNum("")
  }

  const handleFruit=(e)=>{
    setFruit(e.target.value)
  }
  const addFruit=()=>{
    setStoreFruit((p)=>[...p,fruit])
    setFruit("")
  }
  const updateFruit=(e)=>{
     setFruit(e)
  }
  return (
    <>
    <h2 className="font-bold text-2xl text-center">Task 1 – Student Name List</h2>
    <div>
      <input type="text" value={name} onChange={handleChange} placeholder="Enter Name..." />
      <button onClick={addStudent} className="bg-black p-1 rounded text-white w-40">Add Student</button>
      
      <h2 className="font-bold text-2xl text-center">Task 2 – Course List</h2>
      
      <input type="text" value={courseName} onChange={handleCourse}  placeholder="Enter The Course Name..." />
      <button onClick={addCourse} className="bg-black p-1 rounded text-white w-40">Add Course</button>
      
      <h2 className="font-bold text-2xl text-center">Task 3 – Number List</h2>
      
      <input type="number" value={num} onChange={handleNumber} placeholder="Enter Number..." />
      <button onClick={addNumber} className="bg-black p-1 rounded text-white w-40">Add Number</button>
      
      <h2 className="font-bold text-2xl text-center">Task 4 – Fruit List Update</h2>
      <input type="text" value={fruit} onChange={handleFruit} placeholder="Enter Fruit Name" />
      <button onClick={addFruit} className="bg-black p-1 rounded text-white w-40">Add Fruit</button>
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
    <div>
      {storeNum.map((e,i)=>(
        <p key={i+1}>{e}</p>
      ))}
    </div>
    
    <div>
       {storeFruit.map((e,i)=>(
           <div key={i+1}>
            <p >{e}</p>
            <button onClick={()=>updateFruit(e)} className="bg-black p-1 rounded text-white w-40">Update Fruit</button>
           </div>
       ))}
    </div>
    </>
  )
}

export default App
