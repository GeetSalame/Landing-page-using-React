import React from 'react'
import Navbar from './Navbar';

function Header() {
  return (
      <div id="main">
          <Navbar/>
          <div className="name">
              <h1><span>Launch your app</span> with ease and without any issues</h1>
              <p className="details">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint impedit nulla molestiae quos corporis officiis </p>
              <a href="#" className="cv-btn">Download</a>
          </div>
      </div>
  )
}

export default Header;