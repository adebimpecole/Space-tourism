import React from 'react'
import "./SlideBtn.css"

const SlideBtn = (props) => {
  const sld = document.getElementsByClassName("sbtn")
  const View = (event) => {
    for(let s=0; s<sld.length; s++){
      if(sld[s].classList.contains("vw")){
        sld[s].classList.remove('vw');
        console.log(sld.item)
      }
    }
    event.currentTarget.classList.add('vw');
    props.Next(event.currentTarget.id)
  };
  return (
    <div className='SlideBtn'>
        <span className='sbtn vw' onClick={View} id={0}></span>
        <span className='sbtn' onClick={View} id={1}></span>
        <span className='sbtn' onClick={View} id={2}></span>
        <span className='sbtn' onClick={View} id={3}></span>
    </div>
  )
}

export default SlideBtn