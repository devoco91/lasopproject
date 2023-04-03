import React, { useState } from 'react'

import "./../Pages/login.css"
import { AiOutlineEyeInvisible} from "react-icons/ai"
import { NavLink } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addData, setPage } from '../../Redux/Slices/onboardslice'


function Second() {

    const dispatch = useDispatch()

  const handleSubmit = (e) =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)

    const data = {
        course: form.get("course"),
        cohort: form.get("cohort"),
        center: form.get("center"),
        study: form.get("study"),
        agreement: form.get("agreement"),
    }

    dispatch(addData(data))
    dispatch(setPage())

  }

  return (
    <div data-aos="fade-zoom-in" className="login d-flex flex-column justify-content-center align-items-center">
      <div className="container-fluid">

          <div className="p-5 ">
         
            <h3 className=''>LOGO</h3>

            <p className='heading my-3'>Start Your Application</p>

            <small>step 2/3</small>

            <div className="loginform p-4 ">
              <p>Course Of Study</p>

              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="my-1">
                  <div className="form-label d-block">Course</div>
                  <select className="form-control" name="course" >
                    <option value="backend">Backend</option>
                    <option value="frontend">Frontend</option>
                    <option value="data-science">Data Science</option>
                  </select>
                </div>
                
                <div className="my-1">
                  <div className="form-label d-block">Cohort</div>
                  <select className="form-control" name="cohort" >
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                   
                  </select>
                </div>

                <div className="my-1">
                  <div className="form-label d-block">Center</div>
                  <select className="form-control" name="center" >
                    <option value="olowoira">Olowoira</option>
                    <option value="iju">Iju</option>
                    <option value="ajah">Ajah</option>
                  </select>
                </div>

                <div className="my-1">
                  <div className="form-label d-block">Mode Of Study</div>
                  <select className="form-control" name="study" >
                    <option value="online">Online</option>
                    <option value="physical">Physical</option>
                    
                  </select>
                </div>

                <div className="my-3 d-flex">
                  <input type="radio" className="agree" name="agreement" />
                 <small className='ps-3'>Agree To Our <NavLink className='d-inline text-primary'> Terms And Condition</NavLink></small>
                </div>

               

                <button className='my-3 btn btn-primary w-100'>Continue</button>
               
              </form>

            </div>

            

            <small className='info p d-flex justify-content-center text-center mt-5'>I already have an account? <NavLink href='/login' className='text-primary'>Login</NavLink></small>
            
          </div>
         
        </div>

      </div>

      

  )
}

export default Second