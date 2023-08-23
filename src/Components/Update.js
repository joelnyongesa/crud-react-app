import { useState } from "react"

function UpdateStudent({student,updateFunction}){
    // state variables for the students object.
    const [name, setName] = useState(student.name)
    const [course, setCourse] = useState(student.course)
    const [image, setImage] = useState(student.image)
    const [hobby, setHobby] = useState(student.hobby)

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

      function handleSubmit(e){
        e.preventDefault()
        let id=student.id
        let newStudentObj = {
            name:name,
            image: image,
            course: course,
            hobby: hobby,
        }
        updateFunction(id, newStudentObj)
      }


    return(
        <>
            <form onSubmit={handleSubmit}>
                <h4>Update Student Details</h4>
                <label>
                    {/* You can also put value={name} */}
                Name: <input type="text" placeholder="Enter your name" onChange={changeName} value={name}/>
                </label> <br/><br/>
                <label>
                Course: <input type="text" placeholder="Enter your course" onChange={changeCourse} value={course}/>
                </label> <br/><br/>
                <label>
                Image: <input type="url" placeholder="Enter your image link" onChange={changeImage} value={image}/>
                </label> <br/><br/>
                <label>
                Hobby: <input type="text" placeholder="Enter your hobby" onChange={changeHobby} value={hobby}/>
                </label> <br/><br/>
                <button type="submit">Update</button>
            </form>
        </>
    )
}


export default UpdateStudent