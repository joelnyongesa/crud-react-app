import UpdateStudent from "./Update"

function Students({students, deleteStudent, updateFunction}){
    // Displaying the students.
    const studentsToDisplay = students.map(student=>{
        return (
            <div key={student.id}>
                <img src={student.image} alt={student.name}/>
                <h2>Name: {student.name}</h2>
                <h3>Course: {student.course}</h3>
                <p>Hobby: {student.hobby}</p>
                <button onClick={()=>deleteStudent(student.id)}>Delete</button>
                <UpdateStudent updateFunction={updateFunction} student={student}/>
            </div>
        )
    })



    return(
        <>
            {studentsToDisplay}
        </>
    )
}


export default Students