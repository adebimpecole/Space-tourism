import React, { useState } from 'react'
import MiniNav from './MiniNav'
import "./Location.css"
import moon from "./images/destination/image-moon.png"
import mars from "./images/destination/image-mars.png"
import europa from "./images/destination/image-europa.png"
import titan from "./images/destination/image-titan.png"
import dets from "./data.json"

const Location = () => {
    const [setID, getID] = useState(0);

    const plpic = [moon, mars, europa, titan]

    const GetID = (data) => {
        getID(data)
        console.log(data)
    }
  return (
    <div className='Location'>
        <img alt='planet' className='planet' src={plpic[setID]}/>
        <div  className='abtplt'>
            <MiniNav EleID={GetID}/>
            <span className='pltnm'>{dets.destinations[setID].name}</span>
            <div className='plttxt'>
                {dets.destinations[setID].description}
            </div>
            <hr className='dvd'></hr>
            <div className='pltdets'>
                <div className='distance'>
                    <span className='dtnce'>avg. distance</span>
                    <span className='dtncenm'>{dets.destinations[setID].distance}</span>
                </div>
                <div className='time'>
                    <span className='tme'> Est. travel time</span>
                    <span className='tmenm'>{dets.destinations[setID].travel}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Location