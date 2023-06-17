import React from 'react'
import './Footer.css'
import {NavLink} from 'react-router-dom'



const getCurrentYear = () => {
    return new Date().getFullYear();
  };

function Footer() {
  return (
    <div>
        <div className="container-fluid footer">
            <div className="row">
                <div className="col-md-2 log">
                    <NavLink to='/'><h3 className='footlog'>LOGO</h3></NavLink>


                    <NavLink to='/'>
                    <button className="btn btn-primary but" type="submit">Get Started</button>
                    </NavLink>
                </div>

                <div className="col-md-4 contact">
                    <h5>Contact</h5>
                    <div className="row">
                        <div className="col-md-1"><i class="fa-solid fa-location-dot"></i></div>
                        <div className="col-md-8"><p className='para'>No. 86, Olowoira Road, by Solomon avenue junctinon, Olowoira, off Ojodu-Berger, Lagos, Nigeria. </p></div>
                    </div>
                    
                    <NavLink to="tel:+234 702 571 3326" ><i className='fas fa-phone'></i>+234 702 571 3326</NavLink>
                    
                    <NavLink to="mailto:info@lasop.net" ><i className='fas fa-envelope'></i>info@lasop.net</NavLink>
                
                  

                   
                </div>

                <div className="col-md-2 menu">
                    <h5>Menu</h5>
                   <NavLink to='/'>Home</NavLink> 
                   <NavLink to='/about'>About</NavLink> 
                   <NavLink to='/contact'>Contact us</NavLink> 
                   <NavLink to='/testimonials'>Testimonials</NavLink> 
                   <NavLink to='/faq'>FAQs</NavLink> 
                   <NavLink to='/blog'>Blog</NavLink> 
                </div>

                <div className="col-md-2 company">

                    <h5>Company</h5>
                    
                <NavLink to=''>Home</NavLink> 
                   <NavLink to='/payment'>Payment</NavLink> 
                   <NavLink to='/terms'>Terms and Conditions</NavLink> 
                   <NavLink to='/calendar'>Academic Calendar</NavLink> 
                   <NavLink to='/hire'>Hire</NavLink>
                </div>
                <div className="col-md-2 socials mx-2">
                    <h5>Socials</h5>
                    <NavLink to="https://linkedin.com/company/lasopdotnet" ><i className="fa-brands fa-linkedin"></i>LinkedIn</NavLink>

                    
                    <NavLink to="https://wa.me/+2347025713326" ><i className="fa-brands fa-whatsapp-square"></i>Whatsapp</NavLink>
                    
                    <NavLink to="https://twitter.com/Lasopdotnet" ><i className="fa-brands fa-twitter-square"></i>Twitter</NavLink>
                    
                    <NavLink to="https://www.facebook.com/lasopdotnet" ><i className="fa-brands fa-facebook-square"></i>Facebook</NavLink>
                    
                    <NavLink to="https://www.instagram.com/lasopdotnet" ><i className="fa-brands fa-instagram-square"></i>Instagram</NavLink>

                </div>
            </div>
            <br />
            <hr />
            <div className='col-sm-12 col-md-6 col-lg-6 mx-auto py-3'>
                  <p className='copy'>&copy;{getCurrentYear()} Lagos School of Programming|All Right Reserved</p>
              </div>
        </div>
    </div>
  )
}

export default Footer