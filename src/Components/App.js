
import { useEffect, useState } from "react";
import Post from "../Post";
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

  // console.log(students)

  




  return (
    <div className="App">
      <Students students={students}/>
      <Post />
    </div>
  );
}

export default App;
