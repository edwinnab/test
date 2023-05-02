function TableRow({id, name, email, course, onDelete, onUpdate}) {

    function deleteRow() {
        onDelete(id)
    }

    function updateRow() {
        onUpdate(id)
    }

   

    return (
        <>
        <tr key={id}>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{course}</td>
        <td>
            <button className="btn m-2" onClick={updateRow}>Update</button>
            <button className="btn" onClick={deleteRow}>Delete</button>
        </td>
        </tr>
        </>
    )
}

export default TableRow