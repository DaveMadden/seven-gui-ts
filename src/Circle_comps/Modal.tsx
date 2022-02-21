import React, { useEffect, useState } from 'react'
import { Circle } from './model'

interface Props {
    setShowModal:(value: React.SetStateAction<boolean>) => void
    circleID:string
    circles:Circle[]
    setCircles:React.Dispatch<React.SetStateAction<Circle[]>>
}

const Modal:React.FC<Props> = ({setShowModal, circleID, circles, setCircles}) => {
    let initRadius = circles.filter((circle)=> (
        circle.key===circleID?circle.r:null
    ))[0].r
    
    const [radius, setRadius] = useState<number>(initRadius)

    useEffect(() => {
        setRadius(circles.filter((circle)=> (
            circle.key===circleID?circle.r:null
        ))[0].r)
    },[circleID, circles])
    
    useEffect(() => {
        setCircles(circles.map((circle)=> (
            circle.key===circleID?{...circle, r:radius}:circle
        )))
    },[radius])//'exhaustive deps' again. will need to refresh this
    
    
    


  return (
    <div className='modal'>
        <p>Modal for {circleID}</p>
        <input 
            type="range" 
            name="diameter" 
            id="diameter" 
            min="5" 
            max="100"
            value={radius} 
            onChange={(e)=>setRadius(parseInt(e.target.value))}
        />
        <button
            onClick={()=>setShowModal(false)}
        >CLOSE</button>
    </div>
  )
}

export default Modal