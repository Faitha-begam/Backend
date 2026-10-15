
import { useEffect, useState } from "react"

const App = () => {
  const [datas, setDatas] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetchDatas = async () => {
      const getDatas = await fetch("https://dummyjson.com/users")
      const data = await getDatas.json()
      setDatas(data.users)
    }

    fetchDatas()
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredData = datas.filter((user) =>
    user.firstName.toLowerCase().includes(search.toLowerCase())
  )

  return (
   <>
  <label htmlFor="input">Search</label>
  <input className="bg-gray-500 w-100" id="input" type="text" placeholder="Search user" value={search} onChange={handleChange}/>

  <div className="flex flex-wrap gap-3">
    {filteredData.map((user) => (
      <div className="bg-black flex flex-wrap m-5 text-white p-3 rounded-2xl" key={user.id}>
        <div className="">
          <h2>{user.firstName} {user.lastName}</h2>
          <p>{user.age}</p>
          <button className="bg-white text-black p-1 m-2 rounded">Details</button>
        </div>
      </div>
    ))}
  </div>
</>
  )
}

export default App
