import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedln from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import vector1 from "../../img/Vector1.png"
import vector2 from "../../img/Vector2.png"
import kenny from "../../img/kenny.png"
import thumpup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import glassesimoji from "../../img/glassesimoji.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv'

function Intro(){
 
  return (
   <div className="intro">
    <div className='i-left'>
<div className='i-name'>
    <span>Hy! I Am </span>
    <span>Adamo</span>
    <span>Backend Developer with high level of experience and development producing the high Quality works</span>
</div>
<button className='button i-button'>Hire Me</button>
<div className='i-icons'>
  <a href="https://github.com/lambojac?tab=repositories">
  <img src={Github} alt=""/>
  </a>
  <a href="https://www.linkedin.com/in/kehinde-adamo-59b082227">
  <img src={Linkedln} alt=""/>
  </a>
  <a href="">
  <img src={Instagram} alt=""/>
  </a>


</div>
    </div>
    <div className='i-right'>
      <img src={vector1} alt=""/>
      <img src={vector2} alt=""/>
      <img src={kenny} alt="" className='ecomm'/>
      <img
      src={glassesimoji} alt=""/>
      <div style={{top:"-4%", left:"68%"}}>
        <FloatingDiv image={Crown} txt1="web" txt2="Developer"/>
      </div>

      <div style={{top:"18rem", left:"0rem"}}>
        <FloatingDiv image={thumpup} txt1="Best Design" txt2="Award"/>
      </div>

<div className='blur' style={{background:"rgb(238 210 255)"}}>
<div className="blur" style={{background:"#C1F5FF",
top:"17rem",
width:"21rem",
height:"11rem",
}}>

</div>

</div>
    </div>
   </div>
  )
}

export default Intro
