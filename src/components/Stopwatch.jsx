import { useState, useEffect, useRef } from "react"

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {

  }, [isRunning])

  function start() {

  }

  function stop() {

  }

  function reset() {

  }

  function formatTime() {
    return `00:00:00`;
  }
  return (
    <main className="center">
      <div className="stopwatch">
        <div className="display">{formatTime()}</div>
        <div className="controls flex justify-between">
          <button className="start-button" onClick={start}>Start</button>
          <button className="stop-button" onClick={stop}>Stop</button>
          <button className="reset-button" onClick={reset}>Reset</button>
        </div>
      </div>
    </main>
    
  )
}

export default Stopwatch