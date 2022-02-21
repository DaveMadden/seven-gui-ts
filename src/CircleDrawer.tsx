import React, { useEffect, useState } from 'react'
import Modal from './Circle_comps/Modal';
import {Circle} from './Circle_comps/model'
const { v4: uuidv4 } = require('uuid');

const CircleDrawer = () => {

  const [circles, setCircles] = useState<Circle[]>([])
  const [hoverID, setHoverID] = useState<string>("")
  const [showModal, setShowModal] = useState<boolean>(false)
  const [history, setHistory] = useState<Circle[][]>([])

    const handleClick = (x:number, y:number) => {
      if(!hoverID){
        const returnedCircles = addCircle(x,y);
        setHistory([...history, returnedCircles])
      }else{
        setShowModal(true)
      }
    }

    const addCircle = (x:number, y:number) => {
      let newCircle: Circle = {key:uuidv4(), x:x, y:y, r:20, fill:"white", stroke:"black", opacity:0.3}
      const newCircles = [...circles, newCircle]
      setCircles(newCircles)
      return newCircles //return this so i can use this to update history vs relying on state to do that because state is for rendering display, not for driving code
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
      if(arr.length===0)return 0;
      return arr.reduce((acc, { r }) => acc + r, 0);
    }
    
    useEffect(() => {
      //if the modal is on or there is zero history, don't do these things
      if (showModal || history.length===0) return;

      handleOff(hoverID)

      //if the modal changed things, update history
      if (getRads(circles)!==getRads(history[history.length-1])){ 
        setHistory([...history, circles])//when modal closed
      }
  
    }, [showModal])

  return (
    <div className="thing">
        CircleDrawer
        <svg
            className="canvas" 
            width={400} 
            height={400} 
            onClick={(e)=>handleClick(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}>
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
      <button>undo</button>
      <button>redo</button>
    </div>
  )
}

export default CircleDrawer