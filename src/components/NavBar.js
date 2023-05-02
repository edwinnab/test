import { NavLink } from "react-router-dom"
import "../css/NavBar.css"
function NavBar() {
  
    return (
        <>
        <nav className="container">
            <NavLink className={"a"} to={"/students"} end>
                Students
            </NavLink>
            <NavLink className={"a"} to={"/response"} end>
                Response
            </NavLink>
            <NavLink className={"a"} to={"/setting"} end>
                Settings
            </NavLink>
        </nav>
        </>
    )
}

export default NavBar