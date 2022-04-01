import React, { useState } from 'react';
import logo from "../images/logo.png"

function Navbar() {

    const [nav, setnav] = useState(false);
    const changeBG = () =>{
        if(window.scrollY >= 50){
            setnav(true);
        }else{
            setnav(false);
        }
    }

    window.addEventListener('scroll', changeBG);

  return (
    <nav className={nav? 'nav active' : 'nav'}>
        <a href="" className='logo'>
            <img src={logo} alt="" />
        </a>
        <input type="checkbox" className='menu-btn' id='menu-btn'/>
        <label className='menu-icon' for="menu-btn">
            <span className="nav-icon"></span>
        </label>

        <ul className='menu'>
            <li><a href="#">Home</a></li>
            <li><a href="#features">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#presentation">Download</a></li>
            <li><a href="#contact">Connect</a></li>
        </ul>
    </nav>
  )
}

export default Navbar;