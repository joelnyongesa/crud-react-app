function Students({students}){
    // Displaying the students.
    const studentsToDisplay = students.map(student=>{
        return (
            <div key={student.id}>
                <img src={student.image} alt={student.name}/>
                <h2>Name: {student.name}</h2>
                <h3>Course: {student.course}</h3>
                <p>Hobby: {student.hobby}</p>
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