
// import { useEffect, useState } from "react"

import { useState } from "react"

// const App = () => {

//   const [users, setUsers] = useState([])
//   const [search, setSearch] = useState("")

//   const fetchUsers = async () => {
//     const res = await fetch("https://dummyjson.com/products")
//     const data = await res.json()
//     setUsers(data.users)
//   }

//   useEffect(() => {
//     fetchUsers()
//   }, [])

//   const filteredUsers = users.filter((user) =>
//     user.address.city.toLowerCase().includes(search.toLowerCase())
//   )

//   return (
//     <>
//       <h1>User Details</h1>

//       <input type="text" placeholder="Search by city" value={search} onChange={(e) => setSearch(e.target.value)}/>

//       <br /><br />

//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>City</th>
//           </tr>
//         </thead>

//         <tbody>
//           {filteredUsers.map((user) => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.address.city}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {filteredUsers.length === 0 && <p>No users found!</p>}
//     </>
//   )
// }

// export default App




const App = () => {

  const [count, setCount] = useState(0)
  const [clicks, setClicks] = useState(0)

  const handleClick = () => {
    setClicks(clicks + 1)

    if ((clicks + 1) % 5 === 0) {
      setCount(count + 5)
    } else {
      setCount(count + 1)
    }
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App