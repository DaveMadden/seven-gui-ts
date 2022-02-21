import { accessSync } from 'fs';
import React, { useCallback, useEffect, useState } from 'react'
import Modal from './Circle_comps/Modal';
import {Circle} from './Circle_comps/model'
const { v4: uuidv4 } = require('uuid');

const CircleDrawer = () => {

  const [circles, setCircles] = useState<Circle[]>([])
  const [hoverID, setHoverID] = useState<string>("")
  const [showModal, setShowModal] = useState<boolean>(false)
  const [history, setHistory] = useState<Circle[][]>([])

    const findMouse = (x:number, y:number) => {
      if(!hoverID){
        let newCircle: Circle = {key:uuidv4(), x:x, y:y, r:20, fill:"white", stroke:"black", opacity:0.3}
        setCircles([...circles, newCircle])
        setHistory([...history, circles])//when new circle created PUTS EMPTY ARRAY IN WTF
      }else{
        setShowModal(true)
      }
    }

    const handleOver = (key:string) => {
      if(!showModal){
        setHoverID(key)
        setCircles(circles.map((c)=> c.key===key?{...c, fill:"red"}:c))
      }
    }
    const handleOff = (key:string) => {
      if (!showModal){
        setHoverID("")
        setCircles(circles.map((c)=> c.key===key?{...c, fill:"white"}:c))
      }
    }

    const getRads = (arr:Circle[]) => {
      let count = 0;
      for (let i = 0; i< arr.length; i++){
        count += arr[i].r;
      }
      return count;
    }

    useEffect(()=>{
      console.log("HISTORY:", history[history.length])
    },[history])
    
    useEffect(() => {
      if(!showModal){
        handleOff(hoverID)
        //if getRads(circles)!==getRads(history[-1])
        console.log("GET RADS", getRads(circles))
        // console.log(history)
        setHistory([...history, circles])//when modal closed
      }
    }, [showModal]) //this works but linter says it's bad. if i fix the form, however, a bunch of other things fail. will need to wrap handleOff() in useCallback()? More research required, but will table this because it's working.

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
                    onMouseOver={()=> handleOver(circ.key)}
                    onMouseLeave={()=>handleOff(circ.key)}/>
                ))
              }
        </svg>
        {showModal?(
          <Modal
            setShowModal={setShowModal}
            circleID={hoverID}
            circles={circles}
            setCircles={setCircles}
          />
          ):(null)}
          {/* <Modal/> */}
    </div>
  )
}

export default CircleDrawer