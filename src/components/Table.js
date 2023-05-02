import { useEffect, useState } from "react"
import TableRow from "./Students"


function Table () {
    const [students, setStudents] = useState([])

    useEffect(() => {
        //logic
        fetch("http://localhost:3002/students")
        .then((r) => r.json())
        .then(data => setStudents(data))

    }, [])

    function deleteRecord(id) {
        fetch(`http://localhost:3002/students/${id}`, {
            method:"DELETE", 
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((r) => r.json())
        .then(data => console.log(data))
    }

    function updateRecord(id) {
        fetch(`http://localhost:3002/students/${id}`, {
            method:"PATCH", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify ({
                name: "Kim Kardashian"
            })
        })
        .then((r) => r.json())
        .then(data => console.log(data))
    }
    return (
        <>
        <table className="table table-dark container">
            <thead>
                <tr>
                <th scope="col">Student-id</th>
                <th scope="col">Full Name</th>
                <th scope="col">Email Address</th>
                <th scope="col">Course</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((student) => {
                        return (
                         <TableRow  
                         key={student.id}
                         id ={student.id}  
                         name={student.name} 
                         email = {student.email}
                         course = {student.course}
                         onDelete = {deleteRecord}
                         onUpdate = {updateRecord}
                         />
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}
export default Table