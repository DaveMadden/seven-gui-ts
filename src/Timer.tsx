import React, {useState, useEffect} from 'react'

export const Timer = () => {

    const [duration, setDuration] = useState<number>(15)
    const [elapsed, setElapsed] = useState<number>(0)
    
    useEffect(() => { //runs on load: needs to start the timer going
        console.log("useeffect once on load")
        let id = setInterval(()=>{
            setElapsed(c=> c + 0.1)
        }, 100);
        return () => clearInterval(id)
    })

  return (
    <div className="thing">
        <h3>Timer</h3>
        <meter id="meter" value={elapsed/duration}/>
        <label>{elapsed.toFixed(1)}s</label>
        <input type="range" id="range" min="1" max="30" onChange={(e)=> setDuration(parseInt(e.target.value))} />
        <button type="reset" onClick={()=> setElapsed(0)}>reset</button>
    </div>

  )
}