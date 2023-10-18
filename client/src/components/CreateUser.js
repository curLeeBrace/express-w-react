import {useState} from 'react';

import axios from 'axios';
export const CreateUser = () => {

    const [userData, setUserData] = useState({
        username : "",
        fname : "",
        mname : "",
        lname : ""
    });

    
    const handleChange = (e) =>{
       const {name, value} = e.target;
       setUserData((prev) => {
        return {...prev, [name] : value};
       });

    }   

    const submitUserData = () =>{
        axios.post('https://localhost:3001/create',userData)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return(
        <>
            <form onSubmit = {submitUserData}>
                 <label htmlFor="username">Username:</label><br/>
                <input type="text" id="username" name="username" onChange={handleChange}/><br/>

                <label htmlFor="fname">First name:</label><br/>
                <input type="text" id="fname" name="fn" onChange={handleChange}/><br/>
                <label htmlFor="fname">Middle name:</label><br/>
                <input type="text" id="mname" name="mn" onChange={handleChange}/><br/>

                <label htmlFor="lname">Last name:</label><br/>
                <input type="text" id="lname" name="ln" onChange={handleChange}/><br/><br/>

                <input type="submit" value="Submit"/>
            </form>
                
        </>
    );
}