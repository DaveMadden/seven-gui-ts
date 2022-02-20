import React, { useEffect, useState } from 'react'
import {Circle} from './Circle_comps/model'
const { v4: uuidv4 } = require('uuid');

const CircleDrawer = () => {

  const [circles, setCircles] = useState<Circle[]>([])

    const findMouse = (x:number, y:number) => {
        console.log(x,y)
        let newCircle: Circle = {key:uuidv4(), x:x, y:y, r:20, fill:"white", stroke:"black", opacity:0.3}
        setCircles([...circles, newCircle])
    }

    const handleOver = (key:number) => {
      console.log(key, " over")
      circles.map((c)=> c.key===key?{...c, fill:"red"}:c)
    }
    
    
    useEffect(() => {
      console.log(...circles)
    }, [circles])
    

  return (
    <div className="thing">
        CircleDrawer
        <svg
            className="canvas" 
            width={400} 
            height={400} 
            onClick={(e)=>findMouse(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}>
              {
                circles.map((circ) =>(
                  <circle
                    className="circle"
                    key={circ.key} 
                    r={circ.r} 
                    cx={circ.x} 
                    cy={circ.y} 
                    fill={circ.fill}
                    stroke={circ.stroke}
                    fillOpacity={circ.opacity}
                    onMouseOver={()=> handleOver(circ.key)}/>
                ))
              }
              {/* <circle r={20} cx={50} cy={50} fill="none" stroke="black" ></circle> */}
        </svg>
    </div>
  )
}

export default CircleDrawer