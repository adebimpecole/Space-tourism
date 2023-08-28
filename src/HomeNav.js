import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "./images/logo.svg"
import "./HomeNav.css"
import Ham from "./images/shared/icon-hamburger.svg"
import Cls from "./images/shared/icon-close.svg"

const HomeNav = (props) => {
    const [setStyle, getStyle] = useState({right: "-588px", display: ""})
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
    getStyle({...setStyle, right : "-1px"})
    getStyle({...setStyle, display : "flex"})
  }
  const Close = ()=> {
    getStyle({...setStyle, right: "-588px"})
    getStyle({...setStyle, display : "none"})
  }
  return (
    <div className='HomeNav'>
        <img src={logo} alt='logo' className='logo'/>
        <hr className='navhr'></hr>
        <div className='nav' style={setStyle}>
                <div className='cls'><img src={Cls} alt="close" className='close' onClick={Close}/></div>
                <div className='sbnv hm' onClick={Active}>
                    <span className='nmbr'>00</span>
                    <span className='route'><Link to="/" className='link' > Home</Link></span>
                </div>
                <div className='sbnv' onClick={Active}>
                    <span className='nmbr'>01</span>
                    <span className='route'><Link to="/destination" className='link'> Destination</Link></span>
                </div>
                <div className='sbnv' onClick={Active}>
                    <span className='nmbr'>02</span>
                    <span className='route'><Link to="/crew" className='link'> Crew</Link></span>
                </div>
                <div className='sbnv' onClick={Active}>
                    <span className='nmbr'>03</span>
                    <span className='route'><Link to="/technology" className='link'> Technology</Link></span>
                </div>
        </div>
        <img src={Ham} alt="open" className='ham' onClick={Click}/>
    </ div>
  )
}

export default HomeNav