import React from 'react'
import "./Services.css"
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png"
import Card from '../Card/Card';
import Resume from './resume.pdf'
function Services() {
  return (
    <div className='services'> 
      <div className="awesome">
<span>My Awesome</span>
<span>Services</span>
<span>
I Deliver Quality <br/>And Outstanding Services To my Clients
</span>
<a href={Resume} download>
<button className='button s-button'>Download CV</button>
</a>
<div className='blur s-blur1' style={{background:"#ABF1FF94"}}>

</div>
      </div>

      <div className="cards">
<div style={{left:"40rem"}}>
    <Card 
    emoji={HeartEmoji}
    heading={'Design'}
    detail={"Figma, Sketch, Photoshop, Adobe Adobe xd"}
    />
</div>
<div style={{bottom:"0.5rem", left:"18rem"}}>
  <Card
  emoji={Glasses}
  Heading={"Developer"}
  detail={"Html, Css, Javascript, React,Node.js"}
  />
</div>
<div style={{top:"9rem", left:"20rem"}}>
  <Card
  emoji={Humble}
  Heading={"Developer"}
  detail={"Node.js, React, MongoDB, MySQL"}
  />
</div>
      </div>
    </div>
  )
}

export default Services
