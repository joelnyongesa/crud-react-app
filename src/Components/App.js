
import { useEffect, useState } from "react";
import Post from "./Post";
import Students from "./Students";

function App() {
  // Students app- We can post our students, see details, edit, and delete
  // Fetching the students data
  const [students, setStudents] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8001/students')
    .then(r => r.json())
    .then(studentData => setStudents(studentData))
    .catch(e=>console.log(e))
  }, [])

  // Handle POST
  function handlePost(studentsObj){
    setStudents([
      ...students,
      studentsObj
    ])
  }

  // console.log(students)

  function updateStudent(id, object){
    fetch(`http://localhost:8001/students/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(object)
    })
    .then(r => r.json())
    .then(data=>console.log(data))
    .catch(e=>console.log(e))
  }

  function deleteStudent(id){
    fetch(`http://localhost:8001/students/${id}`, {
      method: "DELETE",
    })
    .then(r=>console.log(r.status))
    .then(()=>alert('Studet record deleted successfully!'))
    .catch(e=>console.log(e))
  }
  




  return (
    <div className="App">
      <Students students={students} updateFunction={updateStudent} deleteStudent={deleteStudent}/>
      <Post handlePost={handlePost}/>
    </div>
  );
}

export default App;
