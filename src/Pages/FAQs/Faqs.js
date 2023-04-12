import React from 'react'
import whiteline from "../../assets/Frame 27.png"
import Accordion from './Accordion'
import btn from "../../assets/arrow-right.png"
import blueline from '../../assets/Blue Frame 27.png'
import blueline2 from '../../assets/horizontal_blueline.png'
import points from '../../assets/Group 19.png'



const Faqs = () => {

  const accordionData = [ {
    question: "I don’t have any background knowledge in programming, can I apply?",
    answer:`Yes, you can. You don’t need any background knowledge in IT or coding before you can register. 
    Having one is only an advantage for you. At LASOP, we start from the basics and guide you through all you 
    need to know to be a successful software developer.`
  },
    {
      question: "What Must I Do To Be Successful In The Program?",
    answer:" "
  },

    {
      question: "What Materials Do I Need For This Program?",
      answer:" "
    },
      {
        question: "What Are My Expectations At The End Of The Program?",
        answer:" "
      }
  ]



  return (
<div className='container-fluid'>
      <div className="row">
        <div className="faqs">
          <h1 className='text-white text-center mt-3'>Frequently Asked Questions</h1>
          <img src={whiteline} alt="white-underline" className='d-block m-auto'/>

          <div className="accordion my-5 m-auto">
            {accordionData.map(({question, answer})=>(<Accordion question={question} answer={answer}/>))}
          </div>
          <div className="btn btn-md bg-white d-block m-auto rounded-5 my-5">Show more <img src={btn} alt="arrow" /></div>
        </div>
        
        <div className='p-3 started d-md-flex d-column justify-contents-between'>
                  <div className="col-md-6 col-12">
              <div className='everything-text'>Everything You Need To Know To Get Started
              <img src={blueline} alt="" className='everything-blue-line ' />
              </div>
            </div>
              <img src={blueline2} alt="" className='everything-blue-line2' />
            <div className="learn col-md-6 col-12 mt-md-5 mt-2">
              <div className='fw-bold fs-6 my-4'><img src={points} alt="" /> Learn more about LASOP certificate courses and cohorts programme</div>
              <div className='fw-bold fs-6 my-4'><img src={points} alt="" /> Discuss tuition, payment plans.</div>
              <div className='fw-bold fs-6 my-4'><img src={points} alt="" /> Figure out which course or cohort is right for your learning and career goals.</div>
              

                <button className='get-btn btn my-4'>Contact Us</button>
            
            </div>
                  </div>
      </div>
    </div>
  )
}

export default Faqs



