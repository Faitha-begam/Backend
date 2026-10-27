import { useEffect, useState } from "react"

const App = () => {
  // Existing Tasks 1–3
  const [count, setCount] = useState(0)
  const [obj, setObj] = useState({ name: "", age: "", email: "" })
  const [arr, setArr] = useState([])
  const [addStd, setAddStd] = useState("")
  const [addStudent, setAddStudent] = useState([])

  // Task 4 - Fetch API Search
  const [users, setUsers] = useState([])
  const [searchUser, setSearchUser] = useState("")

  // Task 5 - Timer with Cleanup
  const [welcome, setWelcome] = useState(false)

  // Task 6 - State Snapshot Prediction
  const [snapshotStudents, setSnapshotStudents] = useState([])
  const [snapshotName, setSnapshotName] = useState("")

  // Task 8 - Employee CRUD with localStorage
  const [employees, setEmployees] = useState(() => {
    return JSON.parse(localStorage.getItem("employees") || "[]")
  })
  const [employeeForm, setEmployeeForm] = useState({
    name: "",
    salary: ""
  })
  const [editEmployeeId, setEditEmployeeId] = useState(null)

  // Task 9 - useEffect Dependency Problem
  const [timerCount, setTimerCount] = useState(0)

  // Task 10 - Debounced API Search
  const [debounceInput, setDebounceInput] = useState("")
  const [debounceResults, setDebounceResults] = useState([])
  const [debounceLoading, setDebounceLoading] = useState(false)

  // Task 1 - Counter
  const increase = () => {
    setCount(count + 1)
  }

  // Task 2 - Form Handling
  const handleChange = (e) => {
    setObj({ ...obj, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (obj.age === "" || obj.name.trim() === "" || obj.email.trim() === "") {
      alert("Please fill the details")
      return
    }

    setArr([...arr, obj])
    setObj({ name: "", age: "", email: "" })
  }

  // Task 3 - Array Add and Delete
  const addStudentInput = (e) => {
    setAddStd(e.target.value)
  }

  const addStudentArr = () => {
    if (addStd.trim() === "") return

    setAddStudent((previous) => [...previous, addStd])
    setAddStd("")
  }

  const deleteStudent = (index) => {
    setAddStudent((previous) =>
      previous.filter((student, i) => i !== index)
    )
  }

  // Task 4 - Fetch API Search
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error))
  }, [])

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchUser.toLowerCase())
  )

  // Task 5 - Timer with Cleanup
  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setWelcome(true)
    }, 3000)

    return () => clearTimeout(welcomeTimer)
  }, [])

  // Task 6 - State Snapshot Prediction
  const addSnapshotStudent = () => {
    const updatedStudents = [...snapshotStudents, snapshotName]

    setSnapshotStudents(updatedStudents)

    console.log("Old array:", snapshotStudents)
    console.log("New array:", updatedStudents)

    setSnapshotName("")
  }

  // Task 7 - Combined Search, Filter and Sort
  const [combinedSearch, setCombinedSearch] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [sortOrder, setSortOrder] = useState("asc")

  const cities = []

  for (let i = 0; i < users.length; i++) {
    let cityFound = false

    for (let j = 0; j < cities.length; j++) {
      if (cities[j] === users[i].address.city) {
        cityFound = true
        break
      }
    }

    if (cityFound === false) {
      cities.push(users[i].address.city)
    }
  }

  let result = [...users]

  result = result.filter((user) =>
    user.name.toLowerCase().includes(combinedSearch.toLowerCase())
  )

  if (selectedCity !== "") {
    result = result.filter((user) => user.address.city === selectedCity)
  }

  result = result.sort((firstUser, secondUser) => {
    if (sortOrder === "asc") {
      return firstUser.id - secondUser.id
    }

    return secondUser.id - firstUser.id
  })

  // Task 8 - Employee CRUD with localStorage
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees))
  }, [employees])

  const handleEmployeeChange = (e) => {
    setEmployeeForm({
      ...employeeForm,
      [e.target.name]: e.target.value
    })
  }

  const saveEmployee = (e) => {
    e.preventDefault()

    if (
      employeeForm.name.trim() === "" ||
      employeeForm.salary === ""
    ) {
      alert("Please fill all employee details")
      return
    }

    if (editEmployeeId !== null) {
      const updatedEmployees = employees.map((employee) =>
        employee.id === editEmployeeId
          ? { ...employee, ...employeeForm, salary: Number(employeeForm.salary) }
          : employee
      )

      setEmployees(updatedEmployees)
      setEditEmployeeId(null)
    } else {
      const newEmployee = {
        id: Date.now(),
        name: employeeForm.name,
        salary: Number(employeeForm.salary)
      }

      setEmployees([...employees, newEmployee])
    }

    setEmployeeForm({ name: "", salary: "" })
  }

  const editEmployee = (employee) => {
    setEmployeeForm({
      name: employee.name,
      salary: String(employee.salary)
    })

    setEditEmployeeId(employee.id)
  }

  const deleteEmployee = (id) => {
    setEmployees((previous) =>
      previous.filter((employee) => employee.id !== id)
    )

    if (editEmployeeId === id) {
      setEditEmployeeId(null)
      setEmployeeForm({ name: "", salary: "" })
    }
  }

  // Task 9 - useEffect Dependency Problem
  useEffect(() => {
    const countInterval = setInterval(() => {
      setTimerCount((previousCount) => previousCount + 1)
    }, 1000)

    return () => clearInterval(countInterval)
  }, [])

  // Task 10 - Debounced API Search
  useEffect(() => {
    if (debounceInput.trim() === "") {
      setDebounceResults([])
      setDebounceLoading(false)
      return
    }

    const controller = new AbortController()

    const searchTimer = setTimeout(() => {
      setDebounceLoading(true)

      fetch("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal
      })
        .then((response) => response.json())
        .then((data) => {
          const matchedUsers = data.filter((user) =>
            user.name.toLowerCase().includes(debounceInput.toLowerCase())
          )

          setDebounceResults(matchedUsers)
        })
        .catch((error) => {
          if (error.name !== "AbortError") {
            console.log(error)
          }
        })
        .finally(() => {
          if (!controller.signal.aborted) {
            setDebounceLoading(false)
          }
        })
    }, 500)

    return () => {
      clearTimeout(searchTimer)
      controller.abort()
    }
  }, [debounceInput])

  return (
    <>
      <h2>Task 1 - Counter</h2>
      <h3>{count}</h3>
      <button onClick={increase}>Click</button>

      <hr />

      <h2>Task 2 - Form Handling</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          onChange={handleChange}
          value={obj.name}
          name="name"
        />

        <input
          type="number"
          placeholder="Enter age"
          onChange={handleChange}
          value={obj.age}
          name="age"
        />

        <input
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
          value={obj.email}
          name="email"
        />

        <input type="submit" value="Submit" />
      </form>

      {arr.map((student, index) => (
        <div key={index}>
          <h3>{student.name}</h3>
          <p>{student.age}</p>
          <p>{student.email}</p>
        </div>
      ))}

      <hr />

      <h2>Task 3 - Add and Delete Students</h2>
      <input
        type="text"
        placeholder="Add student"
        value={addStd}
        onChange={addStudentInput}
      />

      <button onClick={addStudentArr}>Add Student</button>

      {addStudent.map((student, index) => (
        <div key={index}>
          <p>{student}</p>
          <button onClick={() => deleteStudent(index)}>
            Delete Student
          </button>
        </div>
      ))}

      <hr />

      <h2>Task 4 - Fetch API Search</h2>
      <input
        type="text"
        placeholder="Search user by name"
        value={searchUser}
        onChange={(e) => setSearchUser(e.target.value)}
      />

      {filteredUsers.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}

      <hr />

      <h2>Task 5 - Timer with Cleanup</h2>
      <p>{welcome ? "Welcome!" : "Please wait 3 seconds..."}</p>

      <hr />

      <h2>Task 6 - State Snapshot Prediction</h2>
      <input
        type="text"
        placeholder="Enter student name"
        value={snapshotName}
        onChange={(e) => setSnapshotName(e.target.value)}
      />

      <button onClick={addSnapshotStudent}>Add Student</button>

      {snapshotStudents.map((student, index) => (
        <p key={index}>{student}</p>
      ))}

      <hr />

      <h2>Task 7 - Search, Filter and Sort</h2>

      <input
        type="text"
        placeholder="Search by name"
        value={combinedSearch}
        onChange={(e) => setCombinedSearch(e.target.value)}
      />

      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        <option value="">All Cities</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="asc">ID Ascending</option>
        <option value="desc">ID Descending</option>
      </select>

      {result.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.address.city}</p>
          <p>ID: {user.id}</p>
        </div>
      ))}

      <hr />

      <h2>Task 8 - Employee CRUD with localStorage</h2>

      <form onSubmit={saveEmployee}>
        <input
          type="text"
          placeholder="Employee name"
          name="name"
          value={employeeForm.name}
          onChange={handleEmployeeChange}
        />

        <input
          type="number"
          placeholder="Employee salary"
          name="salary"
          value={employeeForm.salary}
          onChange={handleEmployeeChange}
        />

        <button type="submit">
          {editEmployeeId !== null ? "Update Employee" : "Add Employee"}
        </button>
      </form>

      {employees.map((employee) => (
        <div key={employee.id}>
          <p>{employee.name}</p>
          <p>{employee.salary}</p>

          <button onClick={() => editEmployee(employee)}>Edit</button>
          <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
        </div>
      ))}

      <hr />

      <h2>Task 9 - useEffect Dependency Problem</h2>
      <h3>Timer: {timerCount}</h3>

      <hr />

      <h2>Task 10 - Debounced API Search</h2>

      <input
        type="text"
        placeholder="Type a user name"
        value={debounceInput} onChange={(e) => setDebounceInput(e.target.value)}/>

      {debounceLoading && <p>Searching...</p>}

      {debounceResults.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  )
}

export default App