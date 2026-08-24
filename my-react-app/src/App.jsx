import { useEffect, useState } from "react";


function App() {
  const [running, setRunning] = useState(false)
  const [sec, setSec] = useState(0)

  useEffect(()=>{
    if(running){
      const timer = setInterval(() => {
        setSec((sec)=> sec + 1)
      }, 1000);

      return ()=> clearInterval(timer)
    }
  },[running])


  return(
    <div>
      <h1>
        {sec}
      </h1>
      <button onClick={()=> setRunning(true)}> start</button>
      <button onClick={()=> setRunning(false)}>stop</button>
      <button onClick={()=>{
        setRunning(false);
        setSec(0)
      }}>reset</button>
    </div>
  )
 
}

export default App;