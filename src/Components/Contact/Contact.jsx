import React from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser'
import {useRef} from "react"

const Contact=()=>{
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm("service_f8715rx", "template_sjxfy8a", form.current, "TtiC2zRa8_bqtQN5nQRVD")
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    };


  return (
    <div className='contact-form'>
      <div className='w-left'>
        <div className='awesome'>
            <span>Get in Touch  </span>
            <span>Contact Me </span>
            <div className='blur s-blur1' style={{background:"#ABF1FF94"}}>
            </div>
        </div>
      </div>
      <div className='c-right'>
        <form ref={form} onSUbmit={sendEmail}>
            <input type="text" name="user_name" className='user' placeholder='Name'/>
            <input type="email" name="user_email" className='user' placeholder='Email'/>
            <input type="message"  className='user' placeholder='Message'/>
            <input type="submit" name="send" className='button'/>
            <div className='contact-form'>
      <div className='w-left'>
        <div className='awesome'>
            <span>Get in Touch  </span>
            <span>Contact Me </span>
            <div className='blur s-blur1' style={{background:"#ABF1FF94"}}>
            </div>
        </div>
      </div>
   
        <div className='blur c-blur1'
          style={{background:"var(--purple)"}}>
        </div>
    </div>
        </form>
        <div className='blur c-blur1'
          style={{background:"var(--purple)"}} >
        </div>
      </div>
    </div>
  )
}

export default Contact
