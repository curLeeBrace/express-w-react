
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const Milktea = () => {

    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    let prevCount = 0;

    
    
    
    useEffect(()=>{

        localStorage.setItem("PageCount", count);
        prevCount = localStorage.getItem("PageCount");
        navigate(prevCount);
        // console.log(prevCount);
    }, [count])


    const jumpIntoPage = () => {
        setCount(count + 1);

    }
        
    return(
        <>

                <h1>This is Milktea List</h1>
                
                <h1>{count}</h1>
                    <button onClick = {jumpIntoPage}>+</button>
              

        </>
     
        
    )
}

