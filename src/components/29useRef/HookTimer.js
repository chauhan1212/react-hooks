import React, { useEffect, useRef, useState } from 'react'

function HookTimer() {

    const [timer,setTimer] = useState(0)
    const intervalRef = useRef(null)

    useEffect(()=> {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer+1)
        },  1000)
        return () =>{
           clearInterval(intervalRef.current)
        }
    },[])

  return (
    <div>
        Hook Timer - {timer}
        <button onClick={() => clearInterval(intervalRef.current)} >Clear Hook timer</button>
    </div>
  )
}

export default HookTimer