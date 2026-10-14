
import { useState } from "react"

const App = () => {
  const [employee, setEmployee] = useState({ name: "", department: "", salary: "" })
  const [employees, setEmployees] = useState([])
  const [editEmployee, setEditEmployee] = useState(null)

  const [product, setProduct] = useState({ name: "", price: "", quantity: "" })
  const [products, setProducts] = useState([])
  const [editProduct, setEditProduct] = useState(null)

  const [course, setCourse] = useState({ name: "", trainer: "", duration: "" })
  const [courses, setCourses] = useState([])

  const [expense, setExpense] = useState({ title: "", amount: "", category: "" })
  const [expenses, setExpenses] = useState([])
  const [editExpense, setEditExpense] = useState(null)

  const handleChange = (e, data, setData) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const clearForm = (data, setData) => {
    setData(Object.fromEntries(Object.keys(data).map(key => [key, ""])))
  }

  const handleSubmit = (e, data, setData, list, setList, editIndex, setEditIndex) => {
    e.preventDefault()

    if (Object.values(data).some(value => value === "")) return

    if (editIndex !== null) {
      setList(list.map((item, index) =>
        index === editIndex ? { ...data } : item
      ))
      setEditIndex(null)
    } else {
      setList([...list, { ...data }])
    }

    clearForm(data, setData)
  }

  const handleEdit = (item, index, setData, setEditIndex) => {
    setData({ ...item })
    setEditIndex(index)
  }

  const handleDelete = (index, list, setList) => {
    setList(list.filter((item, i) => i !== index))
  }

  const inputStyle = {
    padding: "6px",
    margin: "5px",
    border: "1px solid gray"
  }

  const buttonStyle = {
    padding: "6px 10px",
    margin: "5px",
    cursor: "pointer"
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee Form</h2>

      <form onSubmit={e => handleSubmit(
        e, employee, setEmployee, employees, setEmployees,
        editEmployee, setEditEmployee
      )}>
        <input style={inputStyle} name="name" placeholder="Name" value={employee.name}
          onChange={e => handleChange(e, employee, setEmployee)} />
        <input style={inputStyle} name="department" placeholder="Department" value={employee.department}
          onChange={e => handleChange(e, employee, setEmployee)} />
        <input style={inputStyle} name="salary" placeholder="Salary" value={employee.salary}
          onChange={e => handleChange(e, employee, setEmployee)} />
        <button style={buttonStyle}> {editEmployee !== null ? "Update" : "Add Employee"} </button>
      </form>

      {employees.map((item, index) => (
        <p key={index}>
          {item.name} - {item.department} - {item.salary}
          <button style={buttonStyle} onClick={() => handleEdit(item, index, setEmployee, setEditEmployee)}>Edit</button>
          <button style={buttonStyle} onClick={() => handleDelete(index, employees, setEmployees)}>Delete</button>
        </p>
      ))}

      <hr />

      <h2>Product Form</h2>

      <form onSubmit={e => handleSubmit(
        e, product, setProduct, products, setProducts,
        editProduct, setEditProduct
      )}>
        <input style={inputStyle} name="name" placeholder="Product Name" value={product.name}
          onChange={e => handleChange(e, product, setProduct)} />
        <input style={inputStyle} name="price" placeholder="Price" value={product.price}
          onChange={e => handleChange(e, product, setProduct)} />
        <input style={inputStyle} name="quantity" placeholder="Quantity" value={product.quantity}
          onChange={e => handleChange(e, product, setProduct)} />
        <button style={buttonStyle}> {editProduct !== null ? "Update" : "Add Product"} </button>
      </form>

      {products.map((item, index) => (
        <p key={index}>
          {item.name} - {item.price} - {item.quantity}
          <button style={buttonStyle} onClick={() => handleEdit(item, index, setProduct, setEditProduct)}>Edit</button>
          <button style={buttonStyle} onClick={() => handleDelete(index, products, setProducts)}>Delete</button>
        </p>
      ))}

      <hr />

      <h2>Course Form</h2>

      <form onSubmit={e => {
        e.preventDefault()
        if (Object.values(course).some(value => value === "")) return
        setCourses([...courses, { ...course }])
        clearForm(course, setCourse)
      }}>
        <input style={inputStyle} name="name" placeholder="Course Name" value={course.name}
          onChange={e => handleChange(e, course, setCourse)} />
        <input style={inputStyle} name="trainer" placeholder="Trainer" value={course.trainer}
          onChange={e => handleChange(e, course, setCourse)} />
        <input style={inputStyle} name="duration" placeholder="Duration" value={course.duration}
          onChange={e => handleChange(e, course, setCourse)} />
        <button style={buttonStyle}>Add Course</button>
      </form>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Trainer</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.trainer}</td>
              <td>{item.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      <h2>Expense Form</h2>

      <form onSubmit={e => handleSubmit(
        e, expense, setExpense, expenses, setExpenses,
        editExpense, setEditExpense
      )}>
        <input style={inputStyle} name="title" placeholder="Title" value={expense.title}
          onChange={e => handleChange(e, expense, setExpense)} />
        <input style={inputStyle} name="amount" placeholder="Amount" value={expense.amount}
          onChange={e => handleChange(e, expense, setExpense)} />
        <input style={inputStyle} name="category" placeholder="Category" value={expense.category}
          onChange={e => handleChange(e, expense, setExpense)} />
        <button style={buttonStyle}> {editExpense !== null ? "Update" : "Add Expense"} </button>
      </form>

      {expenses.map((item, index) => (
        <p key={index}>
          {item.title} - {item.amount} - {item.category}
          <button style={buttonStyle} onClick={() => handleEdit(item, index, setExpense, setEditExpense)}>Edit</button>
          <button style={buttonStyle} onClick={() => handleDelete(index, expenses, setExpenses)}>Delete</button>
        </p>
      ))}
    </div>
  )
}

export default App
