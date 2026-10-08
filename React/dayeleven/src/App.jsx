import { useState } from "react"

const App = () => {
  const [emp,setEmp] = useState([{name:"Arun", salary:"25000"}])
  const [arr, setArr] = useState(["HTML", "CSS", "JavaScript"])
  const [obj, setObj] = useState({name: "Laptop",price: 45000,stock: 10})

  const handleClick =()=>{
   let result=  emp.map((e,i)=>e.name==="Arun"?{...e,salary:"30000"}:e)
   setEmp(result)
  }

  const addReact=()=>{
    setArr([...arr,"React"])
  }
  const updateCss=()=>{
    const copy = [...arr]
    let result = copy.map((e)=>e==="CSS"?"Advanced Css":e)
    setArr(result)
  }
  const updatePrice=()=>{
    setObj({...obj, price:50000})
  }
  return (
    <>
    <div>
      <h2 className="font-bold text-2xl text-center text-black p-2 rounded">Task 1</h2>
      {emp.map((e,i)=>(
        <div className="text-center" key={i+1}>
          <p>{e.name}</p>
          <p>{e.salary}</p>
        </div>
      ))}
      <button className="text-center mx-250 w-40 bg-black text-white rounded" onClick={handleClick}>Increase Salary</button>

      <h2 className="font-bold text-2xl text-center text-black p-2 rounded">Task 2</h2>
      {arr.map((e,i)=>(
        <div className="text-center" key={i+1}>
           <p>Courses: {e}</p>
        </div>
      ))}
      <button className="text-center mx-250 w-40 bg-black text-white rounded" onClick={addReact}>Add React</button> <br/> <br/>

      <button className="text-center mx-250 w-40 bg-black text-white rounded" onClick={updateCss}>Update CSS</button>
      
      <h2 className="font-bold text-2xl text-center text-black p-2 rounded">Task 3</h2>

      <div className="text-center">
        <p>Name: {obj.name} Price: {obj.price} stock: {obj.stock}</p> <br /> <br />
        <button className="text-center mx-250 w-40 bg-black text-white rounded" onClick={updatePrice}>Update Price</button>
      </div>
      </div>
    </>
  )
}

export default App
