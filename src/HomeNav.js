import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "./images/logo.svg"
import "./HomeNav.css"
import Ham from "./images/shared/icon-hamburger.svg"
import Cls from "./images/shared/icon-close.svg"

const HomeNav = () => {
  const [setStyle, getStyle] = useState({display: ""})
  const act = document.getElementsByClassName("sbnv");
  const Active = (event) => {
    for(let a=0; a<act.length; a++){
      if(act[a].classList.contains("hm")){
        act[a].classList.remove('hm');
      }
    }
    event.currentTarget.classList.add('hm');
  };
  const Click = () => {
    getStyle({...setStyle, display: "flex"})
  }
  const Close = ()=> {
    getStyle({...setStyle, display: ""})
  }
  return (
    <div className='HomeNav'>
      <img src={logo} alt='logo' className='logo'/>
      <hr className='navhr'></hr>
      <div className='nav' style={setStyle}>
        <div className='cls'><img src={Cls} alt="close" className='close' onClick={Close}/></div>
        <Link to="/" className='link sbnv hm' onClick={Active}>
          <span className='nmbr'>00</span>
          <span className='route'> Home</span>
        </Link>
        <Link to="/destination" className='link sbnv' onClick={Active}>
          <span className='nmbr'>01</span>
          <span className='route'>Destination</span>
        </Link>
        <Link to="/crew" className='link sbnv' onClick={Active}>
          <span className='nmbr'>02</span>
          <span className='route'> Crew</span>
        </Link>
        <Link to="/technology" className='link sbnv' onClick={Active}>
          <span className='nmbr'>03</span>
          <span className='route'> Technology</span>
        </Link>
      </div>
      <img src={Ham} alt="open" className='ham' onClick={Click}/>
    </ div>
  )
}

export default HomeNav