import React from 'react'
import "./Destination.css"
import Location from './Location'

const Destination = () => {
  return (
    <div className='Destination'>
        <div className='dbbdy'>
            <span className='lds1'><span className='number'>01</span> pick your destination</span>
            <Location/>
        </div>
    </div>
  )
}

export default Destination