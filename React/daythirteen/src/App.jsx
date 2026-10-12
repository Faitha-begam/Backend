import { useState } from "react"

const App = () => {
  const [products, setProducts] = useState([
  { id: 1, name: "Laptop", price: 50000, inStock: true },
  { id: 2, name: "Phone", price: 20000, inStock: false },
  { id: 3, name: "Tablet", price: 15000, inStock: true }
])

  const [students, setStudents] = useState([
  { id: 1, name: "Ravi", marks: 75, isPassed: true },
  { id: 2, name: "Priya", marks: 35, isPassed: false },
  { id: 3, name: "Kumar", marks: 90, isPassed: true }
])
  
  const stockStatus=(id)=>{
    setProducts(products.map((e)=>id==e.id?{...e,inStock: !e.inStock}:e))
  }

  const increaseMark=(id)=>{
    setStudents(students.map((e)=>e.id==id?{...e,marks:e.marks+5}:e))
  }
  const isPass=(id)=>{
    setStudents(students.map((e)=>e.id==id?{...e,isPassed:!e.isPassed}:e))
  }
  const deleteStudent=(id)=>{
    const Delete = students.filter((e)=>e.id != id)
    setStudents(Delete)
  }


  return (
    <>
    <h2 className="font-bold text-2xl text-center">Update an Object Inside an Array</h2>
    <div className="flex gap-20 justify-evenly mt-4 rounded-2xl">
      {products.map((e)=>(
        <div className="bg-amber-400 p-5 w-100 flex flex-col h-55 m-1" key={e.id}>
          <div className="bg-amber-100 rounded text-center p-3">
            <h2 className="font-bold">{e.name} </h2>
            <p>{e.price} </p>
            <p>{e.inStock?"inStock":" Out of Stock"} </p>
            <button className="bg-black w-30 p-2 rounded text-white" onClick={()=>stockStatus(e.id)}>Toggle Stock</button>
          </div>
        </div>
      ))}
    </div>
    <h2 className="font-bold text-2xl text-center">Student Management App</h2>
    <div className="flex gap-10 justify-evenly mt-4 rounded-2xl">
      {students.map((e)=>(
        <div className="bg-amber-400 p-5 w-120 flex flex-col m-1" key={e.id}>
         <div className="bg-amber-100 rounded text-center p-3">
          <h2 className="font-bold"><span className="font-light">Name:</span> {e.name}</h2>
          <p><span className="font-light">Mark:</span> {e.marks}</p>
          <p>{e.isPassed?"Yes Passed!!":"No Failed"}</p>
          <div className="flex gap-5">
          <button className="bg-black w-50 p-2 rounded text-white" onClick={()=>increaseMark(e.id)}>Increase Mark</button>
          <button className="bg-black w-40 p-2 rounded text-white" onClick={()=>isPass(e.id)}>is{e.name}Pass?</button>
          <button className="bg-black w-50 p-2 rounded text-white" onClick={()=>deleteStudent(e.id)}>Delete Student</button>
          </div>
         </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default App
