import React, { useState } from 'react'
import "./CrewDets.css"
import doug from "./images/crew/image-douglas-hurley.webp"
import anou from "./images/crew/image-anousheh-ansari.webp"
import mark from "./images/crew/image-mark-shuttleworth.webp"
import vict from "./images/crew/image-victor-glover.webp"
import SlideBtn from './SlideBtn'
import dt from "./data.json"

const CrewDets = () => {
  const [setNxt, getNxt] = useState(0);

    const plpic = [doug, anou, mark, vict]

    const Move = (data) => {
        getNxt(data)
        console.log(data)
    }
  return (
    <div className='CrewDets'>
        <img alt='crewmember' className='crewmem' src={plpic[setNxt]}/>
        <div  className='abtmmbr'>
            <div className='sep'>
              <span className='title'>{dt.crew[setNxt].role}</span>
              <span className='cname'>{dt.crew[setNxt].name}</span>
              <div className='mmbrtxt'>
                  {dt.crew[setNxt].bio}
              </div>
            </div>
            <SlideBtn Next={Move}/>
        </div>
    </div>
  )
}

export default CrewDets