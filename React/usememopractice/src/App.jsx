import { useEffect, useMemo, useState } from "react"

const App = () => {

  const [theme, setTheme] = useState(true)
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")

 try{
   const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json()
    setProducts(data.products)
  }
 }
 catch{
  console.log(error.message)
 }

  useEffect(() => {
  fetchProducts()
  }, [])

   const searchedProduct = useMemo(() => {
    console.log("Searching product...")

    return products.find((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
  }, [products, search])

  console.log(("theme", theme))
  console.log("search", search);
  
  return (
   <>
   <div className={theme?"dark":"light"}>
    <h1>{theme?"Dark":"Light"}</h1>
   </div>
   <br /> <br />
    <button onClick={()=>setTheme(!theme)}>{theme?"Dark":"Light"}</button>

    <input type="text" onChange={(e)=>setSearch(e.target.value)} />

    {searchedProduct?(<p>{searchedProduct.title}</p>):"no product found"}
   </>
  )
}

export default App