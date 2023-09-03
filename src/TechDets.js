import React, { useState } from 'react'
import NumSlide from './NumSlide'
import "./TechDets.css"
import dta from "./data.json"
import launch from "./images/technology/image-launch-vehicle-portrait.jpg"
import space from "./images/technology/image-space-capsule-portrait.jpg"
import spaceport from "./images/technology/image-spaceport-portrait.jpg"
import launch2 from "./images/technology/image-launch-vehicle-landscape.jpg"
import space2 from "./images/technology/image-space-capsule-landscape.jpg"
import spaceport2 from "./images/technology/image-spaceport-landscape.jpg"

const TechDets = () => {
  const [setAct, getAct] = useState(0)

    const plpic = [launch, space, spaceport]
    const plpic2 = [launch2, space2, spaceport2]

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
        <img alt='techimg' className='techimg2' src={plpic2[setAct]}/>
    </div>
  )
}

export default TechDets