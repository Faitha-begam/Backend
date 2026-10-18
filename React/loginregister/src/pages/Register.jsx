import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {

  const navigate = useNavigate()

  const [registerData, setRegisterData] = useState({username:"",useremail:"",userpassword:""})
  
  const handleChange=(e)=>{
    setRegisterData({...registerData,[e.target.name]:e.target.value})
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    
    const getData = JSON.parse(localStorage.getItem("registerData")) || []
    
    const object = {id:Date.now(), name:registerData.username, email:registerData.useremail, password:registerData.userpassword}
    
    getData.push(object)
    // console.log(object)
    
    const convert = JSON.stringify(getData)
    
    localStorage.setItem("registerData",convert)
    
    alert("Data Stored Successfully")
    
    setRegisterData({username:"",useremail:"",userpassword:""})
    
    navigate("/login")

  }

  return (
    <>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-16 bg-white shadow-xl rounded-2xl p-8 flex flex-col gap-5 border border-gray-200">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-3">Create Account</h1>
      <input type="text" placeholder="Enter User Name" name="username" value={registerData.username} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
      <input type="email" placeholder="Enter User Email" name="useremail" value={registerData.useremail} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
      <input type="password" placeholder="Enter User Password" name="userpassword" value={registerData.userpassword} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
      <input type="submit" value={"Register"} className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg cursor-pointer hover:bg-blue-700 transition duration-200" />
    </form>
    </>
  )
}

export default Register;