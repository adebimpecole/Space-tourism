import React, { useState } from 'react'
import NumSlide from './NumSlide'
import "./TechDets.css"
import dta from "./data.json"
import launch from "./images/technology/image-launch-vehicle-portrait.jpg"
import space from "./images/technology/image-space-capsule-portrait.jpg"
import spaceport from "./images/technology/image-spaceport-portrait.jpg"

const TechDets = () => {
  const [setAct, getAct] = useState(0)

    const plpic = [launch, space, spaceport]

    const Act = (data) => {
        getAct(data)
        console.log(data)
    }
  return (
    <div className='TechDets'>
        <NumSlide Slide={Act} className="slidebtn"/>
        <div className='techtxt'>
            <span className='liltxt'>THE TERMINOLOGY…</span>
            <span className='tchprdct'>{dta.technology[setAct].name}</span>
            <div className='tchdesc'>
            {dta.technology[setAct].description}
            </div>
        </div>
        <img alt='techimg' className='techimg' src={plpic[setAct]}/>
    </div>
  )
}

export default TechDets