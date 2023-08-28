import React from 'react'
import "./NumSlide.css"

const NumSlide = (props) => {
  const numb = document.getElementsByClassName("snum")
  const Act = (event) => {
    for(let n=0; n<numb.length; n++){
      if(numb[n].classList.contains("act")){
        numb[n].classList.remove('act');
        console.log(numb.item)
      }
    }
    event.currentTarget.classList.add('act');
    props.Slide(event.currentTarget.id)
  };
  return (
    <div className='NumSlide'>
        <span className='snum act' onClick={Act} id={0}>1</span>
        <span className='snum' onClick={Act} id={1}>2</span>
        <span className='snum' onClick={Act} id={2}>3</span>
    </div>
  )
}

export default NumSlide