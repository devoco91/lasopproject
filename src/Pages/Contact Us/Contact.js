import React from 'react'
import send from '../../assets/send-icon.png'
import LE from '../../components/learn&everything files/LE'


const Contact = () => {
  return (
    <div className="lasop">
            <div className='row'>
            <div className="form p-3">
        <h1 className='form-title'>Get In Touch</h1>
        <form className='m-auto'>
            <div className="fullname my-3">
            <label htmlFor="fullname" className='fw-bold my-2'>Full name</label>
            <input type="text" placeholder='eg. John Doe' className='form-control' id='fullname' />
            </div>
            <div className="email my-3">
            <label htmlFor="email" className='fw-bold my-2'>Email Address</label>
            <input type="email" placeholder='eg. johndoe@gmail.com' className='form-control' id='email'/>
            </div>
            <div className="message">
                <label htmlFor="messasge" className='fw-bold my-2'>Your Message</label>
                <textarea id="message" cols="5" rows="5" className='form-control' placeholder='What would you like to tell us?'/>
            </div>
            </form>
            <button className='btn btn-md my-5'><img src={send} alt="" />Send Message</button>
        </div>
        <LE/>
            </div>
    </div>
  )
}

export default Contact