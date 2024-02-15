import React from 'react'
import "./Testimonials.css"
import  {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from 'swiper';



function Testimonials() {
   const clients=[
    {
        img:profilePic1,
        review:"Outstanding work",
    },
    {
        img:profilePic2,
        review:"Good Job",
    },
    {
        img:profilePic3,
        review:"I will order you more",
    },
    {
        img:profilePic4,
        review:"Keep  it up",
    },


]
  return (
    <div className='t-wrapper'>
        <div className='t-heading'>
            <span>Client always Get</span>
            <span>Exceptional work </span>
            <span>from me </span>
        </div>
<Swiper 
modules={{Pagination}}
slidesPerView={1}
pagination={{clickable:true}}
>
{clients.map((client, index)=>{
    return(
        <SwiperSlide key={index}>
            <div className='testimonial'>
                <img src={client.img} alt=""/>
                <span>{client.review}</span>
            </div>
        </SwiperSlide>
    )
})}

</Swiper>

    </div>
  )
}

export default Testimonials
