import React, { useState } from 'react'
import ChildComp from './ChildComp'

const App = () => {
  const [count, setCount] = useState(3)
   const [products, setProducts] = useState([])
  const [dlt, setDlt] = useState("")

const fetchProducts = async () => {
 try{
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json()
    setProducts(data.products)
  }
   catch{
  console.log(error.message)
 }
 }

  useEffect(() => {
  fetchProducts()
  }, []) 

  const handleClick =()=>{
    setCount((p)=>p+1)
  }

  const dltdata = (userid)=>{
    setDlt((p)=>p.filter((e)=>e.id !== userid))
  }
  return (
    <>
    <h2>{count}</h2>
    <button onClick={handleClick}>increase count</button>
    <ChildComp />
    </>
  )
}

export default App