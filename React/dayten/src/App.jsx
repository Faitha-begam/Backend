import { useState } from "react"

const App = () => {
  const [arr, setArr] = useState(["HTML", "CSS", "JavaScript"])
  const [obj, setObj] = useState({name: "Arun",age: 22,course: "React"})

  const handleChange =()=>{
    const copy = [...arr,"React"]
    setArr(copy)
  }
  const handleClick =()=>{
    const updatedArr = [...arr]
    const change = updatedArr.map((e,i)=>e==="JavaScript"?"Advanced JavaScript":e)
    setArr(change)
  }
  const handleUpdate =()=>{
    const updatedObj = {...obj}
    updatedObj.course = "Mern"
    setObj(updatedObj)
  }
  const addCity =()=>{
    const copyObj = {...obj, city: "Chennai"}
    setObj(copyObj)
  }
  return (
    <>
    <div>
      <div className="bg-yellow-300">
        <div className="bg-blue-300 text-center p-5">
          <h2 className="font-bold text-2xl text-center text-black p-2 rounded">Array</h2>
        {arr.map((e,i)=>(
            <p key={i+1}>{e}</p>
        ))}
        </div>
       <div className="bg-green-300 text-center p-5">
        <h2 className="font-bold text-2xl text-center text-black p-2 rounded">Object</h2>
        <h4>{obj.name}</h4>
        <h4>{obj.age}</h4>
        <h4>{obj.course}</h4>
        <h4>{obj.city}</h4>
       </div> 
       <div className="gap-4 flex justify-center items-center p-3">
        <button className="bg-black text-white p-2 w-35 rounded" onClick={handleChange}>Add React</button>
        <button className="bg-black text-white p-2 w-50 rounded" onClick={handleClick}>Update JavaScript</button>
        <button className="bg-black text-white p-2 w-35 rounded" onClick={handleUpdate}>Update Course</button>
        <button className="bg-black text-white p-2 w-35 rounded" onClick={addCity}>Add City</button>
       </div>
      </div>
    </div>
    </>
  )
}

export default App
