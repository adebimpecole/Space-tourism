import React from 'react'
import "./MiniNav.css"

const MiniNav = (props) => {
  const remove = document.getElementsByClassName("mnav");
  const Show = (event) => {
    for(let r=0; r<remove.length; r++){
      if(remove[r].classList.contains("gm")){
        remove[r].classList.remove('gm');
      }
    }
    event.currentTarget.classList.add('gm');
    props.EleID(event.currentTarget.id)
  };
  return (
    <div className='MiniNav'>
        <span className='mnav gm' onClick={Show} id={0}>Moon</span>
        <span className='mnav' onClick={Show} id={1}>MArs</span>
        <span className='mnav' onClick={Show} id={2}>Europa</span>
        <span className='mnav' onClick={Show} id={3}>Titan</span>
    </div>
  )
}

export default MiniNav