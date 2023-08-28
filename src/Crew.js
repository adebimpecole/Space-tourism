import React from 'react'
import "./Crew.css"
import CrewDets from './CrewDets'
import HomeNav from './HomeNav'

const Crew = () => {
  return (
    <div className='Crew'>
        <div className='cbbdy'>
            <span className='lds1'><span className='number'>02</span> meet your crew</span>
            <CrewDets/>
        </div>
    </div>
  )
}

export default Crew