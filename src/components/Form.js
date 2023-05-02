import "../css/Form.css"
import { useState } from "react"

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        course: ""
    })

    //capture the user input values 
    function captureInput(event) {
        event.preventDefault()
        setFormData({...formData, [event.target.id]: event.target.value})

    }

    function handleSubmit() {
        fetch("http://localhost:3002/students", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.json())
        .then(data => console.log(data))
       
    }

    return (
        <>
        <form className="container" onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input id="name" 
            type="text"
            onChange={captureInput}
            value={formData.name} 
            className="form-control" 
            required/>
            </div>
            <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input 
            id="email" 
            type="email" 
            onChange={captureInput}
            value={formData.email}
            className="form-control" 
            required/>
            </div>
            <div className="mb-3">
            <label htmlFor="course" className="form-label">Course</label>
            <input id="course"
             type="text" 
             value={formData.course}
             onChange={captureInput}
             className="form-control" 
             required/>
            </div>
            <button className="btn">Submit</button>
        </form>
        </>
    )
}

export default Form