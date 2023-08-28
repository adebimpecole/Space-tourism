import React from 'react'
import TechDets from './TechDets'
import "./Technology.css"
import HomeNav from './HomeNav'

const Technology = () => {
  return (
    <div className='Technology'>
        <div className='thbdy'>
            <span className='lds1'><span className='number'>03</span> space launch 101</span>
            <TechDets/>
        </div>
    </div>
  )
}

export default Technology