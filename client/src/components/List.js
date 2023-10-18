import { Link, Outlet } from "react-router-dom"

const List = () => {
    
    return(
        <>
            <h1>product List</h1>
            <Link to = "milktea/Okkaido"> milktea list</Link>
            <Link to = "shake"> shake list</Link>

            <Outlet/>
        </>

       
    )
}

export default List;
