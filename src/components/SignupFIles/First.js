import React, { useState } from 'react'
import "./../Pages/login.css"
import { AiOutlineEyeInvisible} from "react-icons/ai"
import { NavLink } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addData, setPage } from '../../Redux/Slices/onboardslice'


function First() {

  

    const dispatch = useDispatch()



  const handleSubmit = (e) =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)

    const data = {
        first_name: form.get("first_name"),
        last_name: form.get("last_name"),
        email: form.get("email"),
        phone: form.get("phone"),
        location: form.get("location"),
    }

    dispatch(addData(data))
    dispatch(setPage())

  }

  return (
    <div data-aos="fade-zoom-in" className="login d-flex flex-column justify-content-center align-items-center">
      <div className="container-fluid">

       

      
          <div className="p-5">
          

            <h3 className=''>LOGO</h3>

            <p className='heading my-3'>Start Your Application</p>

            <small>step 1/3</small>

            <div className="loginform p-4 ">
              <p>Personal Information</p>

              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="my-1">
                  <div className="form-label d-block">FirstName</div>
                  <input placeholder='e.g John' type="text" className="" name="first_name" />
                </div>
                
                <div className="my-1">
                  <div className="form-label d-block">LastName</div>
                  <input  placeholder='e.g Doe' type="text" className="" name="last_name" />
                </div>

                <div className="my-1">
                  <div className="form-label d-block">Email</div>
                  <input  placeholder='e.g John Doe' type="text" className="" name="email" />
                </div>

                <div className="my-1">
                  <div className="form-label d-block">Phone Number</div>
                  <input  placeholder='e.g 0813445674' type="text" className="" name="phone" />
                </div>

                <div className="my-1">
                  <div className="form-label d-block">Location</div>
                  <input  placeholder='e.g Address' type="text" className="" name="location" />
                </div>

               

                <button className='my-3 btn btn-primary w-100'>Continue</button>
               
              </form>

            </div>

            <small className=' p d-flex justify-content-center text-center mt-5'>I already have an account? <NavLink href='/login' className='text-primary'>Login</NavLink></small>
            
          </div>
          
      

      </div>

      
    </div>
  )
}

export default First