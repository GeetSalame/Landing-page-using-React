import React from 'react'

function About(props) {
  return (
    <div id="about">
        <div className="about-image">
            <img src={props.image} alt="" />
        </div>
        <div className="about-text">
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae quaerat ad vel velit natus, eligendi magnam autem nostrum, ipsa, atque repellat quasi perspiciatis provident distinctio enim harum veritatis aliquid! Quibusdam esse labore expedita unde neque.</p>
            <button>{props.button}</button>
        </div>
    </div>
  )
}

export default About;