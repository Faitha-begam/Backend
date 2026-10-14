import { useState } from "react"

const App = () => {
  
  const[emp, setEmp] = useState({name:"", department:"", salary:""})
  const[storeEmp, setStoreEmp] = useState([])
  
  const empChange=(e)=>{
    const saveData = {...emp,[e.target.name]:e.target.value}
    setEmp(saveData)
  }
  
  const addEmp=(e)=>{
    e.preventDefault()
    const copyObj = [...storeEmp,emp]
    setStoreEmp(copyObj)
    setEmp({name:"", department:"", salary:""})
  }

  const editEmp=(data)=>{
   setEmp(data)
  }
  
  return (
    <>
    <form className="flex justify-center items-center mt-10 " >
      <div className="flex flex-col gap-10 w-130 h-90 bg-blue-200 p-4 justify-center items-center rounded-2xl">
      <input className="bg-white border text-center p-1 rounded w-80" type="text" placeholder="Enter The Name..." onChange={empChange} name="name" value={emp.name} />
      <input className="bg-white border text-center p-1 rounded w-80" type="text" placeholder="Enter The Department..." onChange={empChange} name="department" value={emp.department} />
      <input className="bg-white border text-center p-1 rounded w-80" type="text" placeholder="Enter The Salary..." onChange={empChange} name="salary" value={emp.salary} />
      <button className="bg-black text-white p-2 rounded w-50" onClick={addEmp}>Add Employee</button>
      </div>
    </form>


    <h4>DETAILS:</h4>
    <div>
      {storeEmp.map((e,i)=>(
        <div className="flex gap-5" key={i+1}>
          <p>Name: {e.name}</p>
          <p>Department: {e.department}</p>
          <p>Salary: {e.salary}</p>
          <button className="bg-black text-white p-1 rounded w-30" onClick={()=>editEmp(e)}>Edit Employee</button>
        </div>
      ))}
    </div>
    </>
  )
}

export default App