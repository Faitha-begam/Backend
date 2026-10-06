import { useState } from 'react'
import Navbar from './components/Navbar'


const App = () => {

    const [toggle,setToggle] = useState(true)

    const handleClick =()=>{
        setToggle(!toggle)
    }
  return (
    <>
    <Navbar/>
    <div className='bg-blue-400 flex flex-col m-5 p-10 h-100' onClick={handleClick}>
    <button className='bg-black text-white p-2 w-50 rounded m-5'>click to hide</button>
     {toggle? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem necessitatibus inventore consequuntur":""}
    </div>
    </>
  )
}

export default App
