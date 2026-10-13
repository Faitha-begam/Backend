import React, { useState } from 'react'

const App = () => {
  const [formData, setFormData] = useState({name:"", email:"", age:""})
  const [storeFormData, setStoreFormData] = useState([])

  const handleFormChange=(e)=>{
    const {name, value} = e.target
    const events = {...formData, [name]:value}
    setFormData(events)
  }
  const handleForm=(event)=>{
    event.preventDefault()
    const formObj = {...formData}
    console.log(formObj);
    
    const formArr = [...storeFormData,formObj]
    console.log(formArr);
    setStoreFormData(formArr)

  }
  return (
    <>
    <form>
      <input type="text" placeholder='Enter name' value={formData.name} onChange={handleFormChange}/>
      <input type="email" placeholder='Enter email' value={formData.email} onChange={handleFormChange}/>
      <input type="number" placeholder='Enter age' value={formData.age} onChange={handleFormChange}/>
      <button onClick={handleForm} className='bg-black p-1 text-white'>Register</button>
    </form>
    </>
  )
}

export default App
