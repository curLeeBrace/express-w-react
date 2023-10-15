
import { useState, useEffect } from "react";
const HomePage = () => {
  const [counter, setCount] = useState(0);
  const [Bool, setBool] = useState(true);

  useEffect(()=>{
    console.log("Re render!!");

   
  },[])


    return (
        <div className="App_Container">
            <button onClick={()=>setBool(!Bool)}>Toggle button</button>

              <button id = "counter_btn" onClick={()=>setCount(prevCount => prevCount + 1)}>Counter</button>
              

            { 
           
              Bool && <h1>{counter}</h1> 
            }
        </div>
      );
}
export default HomePage;