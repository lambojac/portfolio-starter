import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"

function Works() {
  return (
    <div className='works'>
           <div className="awesome">
<span> I Works for all these</span>
<span>Brands & client</span>
<span>
I Deliver Quality <br/>And Outstanding Services To my Clients
<br/>
My services cut across various web applications such as
<br/>
Node.js React.js,
</span>
<button className="button s-button">Hire Me</button>
<div className='blur s-blur1' style={{background:"#ABF1FF94"}}>

</div>
</div>
 {/*right side*/}
 <div className='n-right'>
<div className='n-mainCircle'>
<div className='n-secCircle'>
<img src={Upwork} alt=""/>
</div>
<div className='n-secCircle'>
<img src={Fiverr} alt=""/>
</div>
<div className='n-secCircle'>
<img src={Amazon} alt=""/>
</div>
<div className='n-secCircle'>
<img src={Shopify} alt=""/>
</div>
<div className='n-secCircle'>
<img src={Facebook} alt=""/>
</div>
</div>
{/*backgroud color*/}
<div className='n-backCircle blueCircle'></div>
<div className='n-backCircle yellowCircle'></div>
 </div>
    </div>
  )
}

export default Works
