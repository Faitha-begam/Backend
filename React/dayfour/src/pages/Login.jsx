import React from 'react'

const Login = () => {
  return (
    <>
    <div className='flex justify-center items-center p-20'>
    <div className="flex gap-4 p-30 w-150 bg-blue-300 shadow-md rounded-3xl flex-col justify-center items-center">
        <input type="text" placeholder="Enter hero name" className="border border-gray-300 rounded-md px-4 py-2 outline-none w-100 bg-gray-100 "/>
        <input type="text" placeholder="Enter movie name" className="border border-gray-300 rounded-md px-4 py-2 outline-none w-100 bg-gray-100"/>
        <button className='p-3 bg-gray-600 text-white w-50 rounded-2xl'>Login</button>
    </div>
    </div>
    </>
  )
}

export default Login
