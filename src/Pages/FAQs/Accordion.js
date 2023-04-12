import React from 'react'
import { useState } from 'react'

const Accordion = ({question, answer}) => {

    const [isActive , setIsActive] = useState(false)

  return (
    <div className='accordion-item'>
    <div className="accordion-question d-flex justify-content-between" onClick={()=> setIsActive(!isActive)}>
      <div className='w-75'>{question}</div>
      <div className='active_faq'>{isActive ? "-" : "+"}</div>
    </div>
    {isActive && <div className="accordion-answer">
      <div>{answer}</div>
    </div> }

  </div>
  )
}

export default Accordion