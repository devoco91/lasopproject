import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg ">
       <div className="container-fluid">
    <NavLink className="nav-logo" href="/">Logo</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
       
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </NavLink>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/course/2">Fullstack Development <span className='arro'> &#8594;</span></a></li>
            <li><a className="dropdown-item" href="/course/1">Frontend Development <span className='arr'> &#8594;</span></a></li>
          
            <li><a className="dropdown-item" href="/course/3">Backend Development<span className='arrs'> &#8594;</span></a></li>
            <li><a className="dropdown-item" href="/course/0">UI/UX Design <span className='arrow'>&#8594;</span></a></li>
            <li><a className="dropdown-item" href="/course/4">App Development <span className='aro'>&#8594;</span></a></li>
            <li><a className="dropdown-item" href="/course/5">Data Science & AI <span className='aro'>&#8594;</span></a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link " href='/about'>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href='/faq'>FAQs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href='/blog'>Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href='/login'>Login</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
         <NavLink to='login'>
        <button className="btn btn-primary start" type="submit" >Get Started</button>
        </NavLink>
        <NavLink to='hire'>
        <button  className="hire" type="submit">Hire</button>
        </NavLink>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar