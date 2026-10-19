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
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-4 py-12">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"></div>

      <form onSubmit={handleSubmit} className="relative z-10 flex w-full max-w-md flex-col gap-5 rounded-3xl border border-white/15 bg-white/[0.07] p-7 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-10">
        <div className="mb-3 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-3xl font-bold text-white shadow-lg shadow-blue-950/40">
            +
          </div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">Get Started</p>
          <h1 className="text-3xl font-bold tracking-tight text-white">Create Account</h1>
          <p className="mt-3 text-sm leading-6 text-slate-400">Create your account and start your journey with us.</p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-200">Full Name</label>
          <input type="text" placeholder="Enter User Name" name="username" value={registerData.username} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3.5 text-white outline-none placeholder:text-slate-500 transition duration-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-200">Email Address</label>
          <input type="email" placeholder="Enter User Email" name="useremail" value={registerData.useremail} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3.5 text-white outline-none placeholder:text-slate-500 transition duration-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-200">Password</label>
          <input type="password" placeholder="Enter User Password" name="userpassword" value={registerData.userpassword} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3.5 text-white outline-none placeholder:text-slate-500 transition duration-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20" />
        </div>

        <input type="submit" value={"Register"} className="mt-3 w-full cursor-pointer rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-950/30 transition duration-200 hover:-translate-y-0.5 hover:from-blue-400 hover:to-indigo-500 active:translate-y-0" />

        <p className="text-center text-xs text-slate-500">Your journey starts here.</p>
      </form>
    </div>
    </>
  )
}

export default Register;