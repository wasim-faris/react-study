import { useState, useEffect } from "react";

function Timer(){
    const [secounds, setSecounds] = useState(0)
    const [runing, setRuning] = useState(false)

    useEffect(()=>{
        if(runing){
            const timer = setInterval(()=>{
                setSecounds((secounds)=> secounds + 1)
            },1000)

            return ()=> clearInterval(timer);
        }
    }, [runing])

    return (
        <div>
            <h1>
                {secounds}
            </h1>
            <button onClick={()=> setRuning(true)}>start</button>
            <button onClick={()=> setRuning(false)}>stop</button>
            <button onClick={()=>{
                setRuning(false);
                setSecounds(0)
            }}>reset</button>
        </div>
    )
}

export default Timer;