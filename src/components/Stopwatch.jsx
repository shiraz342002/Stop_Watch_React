import React, { useEffect, useRef, useState } from 'react'

function Stopwatch() {

    const [isRunning,setIsRunning]=useState(false)
    const [elapsedtime,setElapsedTime]=useState(0)
    const intervalIdRef = useRef(null)
    const startTimeRef=useRef(0)

    useEffect(()=>{

    },[isRunning])

    function start(){
        
    }
    function stop(){
    
    }
    function reset(){
    
    }
    function formatTime(){
        return `00:00:00`
    }
  return (
    <div className='stopwatch'>
    <div className="display">{formatTime()}</div>
    <div className="button-container">
      <button className='start' onClick={start}>Start</button>
      <button className='stop' onClick={stop}>Stop</button>
      <button className='reset' onClick={reset}>Reset</button>
    </div>
  </div>
  )
}

export default Stopwatch
