import React, { useEffect, useState } from 'react'

const App = () => {
  const [formData, setFormData] = useState({name:"", email:"", age:""})
  const [storeFormData, setStoreFormData] = useState([])

  const handleFormChange=(e)=>{
    const {name, value} = e.target
    const eventss = {...formData, [name]:value}
    setFormData(eventss)
  }
  const handleForm=(event)=>{
    event.preventDefault()
    const formObj = {...formData}
    
    const formArr = [...storeFormData,formObj]
    console.log(formArr);
    setStoreFormData(formArr)
    setFormData({name:"", email:"", age:""})
    localStorage.setItem("employeeData", JSON.stringify(formArr))
    alert("data retreived")

  }
//   useEffect(() => {
//     const timer = setInterval(() => {
//         console.log("Timer running")
//     }, 1000)

//     return () => {
//         clearInterval(timer)
//     }
// }, [])
 
return (
    <>
    <form className='flex flex-col w-80 h-80 items-center justify-center p-3 gap-5 bg-blue-200 rounded mx-150 mt-50'>
      <input className='border text-center w-60' type="text" name='name' placeholder='Enter name...' value={formData.name} onChange={handleFormChange}/>
      <input className='border text-center w-60' type="email" name='email' placeholder='Enter email...' value={formData.email} onChange={handleFormChange}/>
      <input className='border text-center w-60' type="number" name='age' placeholder='Enter age...' value={formData.age} onChange={handleFormChange}/>
      <button onClick={handleForm} className='bg-black p-1 text-white w-45 rounded'>Register</button>
    </form>
    </>
  )
}

export default App
