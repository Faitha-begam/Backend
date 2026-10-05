import React from 'react'

const App = () => {
  let number = 10

  const handleClick =()=>{
    number++
    console.log(number);
    
  }

  return (
    <>
      <h2>{number}</h2>
      <button onClick={handleClick} className='bg-black text-white p-2 rounded-2xl m-1'>click me</button>
    </>
  )
}

export default App
