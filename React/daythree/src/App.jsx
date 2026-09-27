import Container from "./components/Container"

const App = () => {
  let studentName = "Arun"
  let age = 22
 let course = "React"
  let fees = 15000
  let skills = ["HTML", "CSS", "JavaScript", "React", "Node"]
  let student = {

    name: "Priya",

    age: 21,

    course: "MERN Stack",

    city: "Chennai"

}
let students = [

    { id: 1, name: "Arun", course: "React" },

    { id: 2, name: "Priya", course: "Node" },

    { id: 3, name: "Kumar", course: "MongoDB" }

]
  return (
    <>
    <h2>{studentName}</h2>
    <p>{age}</p>
    <p>{course}</p>
    <p>{fees}</p>
    <h2><u>SKills</u></h2>
    {skills.map((e,i)=>(
      <ul key={i+1}>
          <li>{e}</li>
      </ul>
    ))}
    <h2><u>student details</u></h2>
    <p>{student.name}</p>
    <p>{student.age}</p>
    <p>{student.city}</p>
    <p>{student.course}</p>
    
    <h2><u>Student Details</u></h2>
    {students.map((e,i)=>(
      <div key={e.id}>
      <p>Name: {e.name} , Course: {e.course}</p>
      <p></p>
      </div>
    ))}
    </>

    
  )
}

export default App
