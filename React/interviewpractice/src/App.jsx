import { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)
  const [obj, setObj] = useState({name:"", age:"", email:""})
  const [arr, setArr] = useState([])
  const [addStd, setAddStd] = useState("")
  const [addStudent, setAddStudent] = useState([])

  // Task 1
  const increase=()=>{
    setCount(count+1)
  }

  // Task 2
  const handleChange=(e)=>{
    setObj({...obj,[e.target.name]:e.target.value})
    // console.log(obj);
    
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(obj.age == "" || obj.name == "" || obj.email == ""){
      alert("please fill the details")
      return
    }
    const pushData = [...arr,obj]
    setArr(pushData)
    setObj("")
  }

  const addStudentInput=(e)=>{
     setAddStd(e.target.value)
  }
  const addStudentArr=()=>{
     setAddStudent((p)=>[...p,addStd])
     setAddStd("")
  }
  const deleteStudent=(ele)=>{

    const copy = [...addStudent]
    const dlt = copy.filter((e)=>e!==ele)
    setAddStudent(dlt)
  }

  return (
    <>
  <h2>{count}</h2>
  <button onClick={increase}>click</button>

  <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Enter name" onChange={handleChange} value={obj.name} name="name"/>
    <input type="number" placeholder="Enter Age" onChange={handleChange} value={obj.age} name="age"/>
    <input type="email" placeholder="Enter Email" onChange={handleChange} value={obj.email} name="email"/>
    <input type="submit" value="validate" />
  </form>
  
   <input type="text" placeholder="Add student" onChange={addStudentInput} />
    <button onClick={addStudentArr}>Add Student</button>

  <div>
    {arr.map((e,i)=>(
      <div key={i+1}>
        <h3>{e.name}</h3>
        <p>{e.age}</p>
        <p>{e.email}</p>
      </div>
    ))}
  </div>
  <div>
    {addStudent.map((e,i)=>(
     <div key={i+1}>
      <p>{e}</p>
      <button onClick={()=>deleteStudent(e)}>Delete Student</button>
     </div>
    ))}
  </div>
    </>
  )
}

export default App