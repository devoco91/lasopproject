import React from 'react'
import QA from '../../assets/faq.png'
import Accordion from './Accordion'
import LE from '../../components/learn&everything files/LE'

const Fullfaq = () => {

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
      },
      {
        question: `I have basic knowledge in software development already. 
        Do you have an advanced package for me?`,
        answer:" "
      },
      {
        question: "Can we register for courses online via the website?",
        answer:" "
      },
      {
        question: "Is Lagos School of Programming government owned?",
        answer:" "
      },
      {
        question: "How much is the course fee?",
        answer:" "
      },
      {
        question: "Is there any other payment aside the course fee?",
        answer:" "
      },
      {
        question: "Is certificate given upon graduation?",
        answer:" "
      },


  ]
  
  return (
    <div>
      <div className="lasop">
        <div className="row">
          <div className="full-faq col-12">
            <div className='d-flex justify-content-center align-items-center my-4'>
            <h1 className='text-white text-center'>Frequently Asked <br /> Questions</h1>
            <img src={QA} alt="" className='qa-img'/>
            </div>

            <div className="accordion my-5">
            {accordionData.map(({question, answer})=>(<Accordion question={question} answer={answer}/>))}
          </div>
            </div>
              <LE/>
          </div>
        </div>
      </div>
  )
}

export default Fullfaq