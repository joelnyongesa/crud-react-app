import { useState } from "react"

function Post({handlePost}){
    // Creating state variables.
  const [name, setName] = useState('')
  const [course, setCourse] = useState('')
  const [image, setImage] = useState('')
  const [hobby, setHobby] = useState('')

  function changeName(e){
    setName(e.target.value)
  }
  // console.log(name)

  function changeCourse(e){
    setCourse(e.target.value)
  }

  function changeImage(e){
    setImage(e.target.value)
  }

  function changeHobby(e){
    setHobby(e.target.value)
  }

  function postStudent(e){
    e.preventDefault();
    const newStudent = {
      name: name,
      course: course,
      image: image,
      hobby: hobby,
    }
    fetch('http://localhost:8001/students', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newStudent)
    })
    .then(r => r.json())
    .then(data =>handlePost(data))
    .catch(e => console.log(e))
  }

  return(
    <>
        <div className="App">
      <form onSubmit={postStudent}>
        <label>
          Name: <input type="text" placeholder="Enter your name" onChange={changeName}/>
        </label> <br/><br/>
        <label>
          Course: <input type="text" placeholder="Enter your course" onChange={changeCourse}/>
        </label> <br/><br/>
        <label>
          Image: <input type="url" placeholder="Enter your image link" onChange={changeImage}/>
        </label> <br/><br/>
        <label>
          Hobby: <input type="text" placeholder="Enter your hobby" onChange={changeHobby}/>
        </label> <br/><br/>
        <button type="submit">Submit</button>
      </form>
      
    </div>
    </>
  )
}



export default Post