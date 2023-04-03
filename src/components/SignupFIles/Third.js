import React, { useState } from 'react'
import "./../Pages/login.css"
import { AiOutlineEyeInvisible} from "react-icons/ai"
import { NavLink } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { clearData } from '../../Redux/Slices/onboardslice'

function Third() {

    const dispatch = useDispatch()
    const userinfo = useSelector((state) => state?.onboard?.userData)

    console.log(userinfo)
  const handleSubmit = (e) =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)

    const data = {
        amount: form.get("amount"),
        paymentway: form.get("payment"),
        
    }

    const completeInfo = {...userinfo, ...data}
    console.log(completeInfo)

    dispatch(clearData())

  }

  return (
    <div data-aos="fade-zoom-in" className="login d-flex flex-column justify-content-center align-items-center">
      <div className="container-fluid">

       
          <div className="p-5 ">
          
            <h3 className=''>LOGO</h3>

            <p className='heading my-3'>Start Your Application</p>

            <small>step 3/3</small>

            <div className="loginform p-4 ">
              <p>Payment</p>

              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="my-1">
                  <input value='200,000' type="text" className="" name="amount" disable/>
                </div>
                
  
                <div className="my-1 payment" >
                  <div className="form-label d-block">Choose Payment Method</div>
                  <div className="p-2 my-1 border border-secondary d-flex justify-content-between rounded align-items-center">
                    <p className='h6'>Pay With Bank Transfer</p>
                    <input type="radio" value="bank" className="" name="payment" />
                  </div>

                  <div className="p-2 my-1 border border-secondary d-flex justify-content-between rounded align-items-center">
                    <p className='h6'>Pay With Debit Card</p>
                    <input type="radio" value="card" className="" name="payment" />
                  </div>
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

export default Third