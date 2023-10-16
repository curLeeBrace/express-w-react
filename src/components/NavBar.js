import { NavLink } from "react-router-dom"

const NavBar = () =>{
    return(
        <nav>
            <NavLink to = "/">Home</NavLink>
            <NavLink to = "/about">About</NavLink>
            <NavLink to = "/list">List</NavLink>
        </nav>
    )
}

export default NavBar;