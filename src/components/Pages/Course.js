import React, { useCallback, useEffect, useState } from 'react'
import "./coursehero.css"
import { FaMapMarker, FaCheckSquare, FaCalendar, FaArrowRight } from "react-icons/fa"
import { BiCalendar } from "react-icons/bi"
import line from "./../../assets/Line.png"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { NavLink } from 'reactstrap'
import outline from "./../../assets/outline.png"
import data from './../../fakedb/courseData'
import user1 from "./../../assets/user1.png"
import user2 from "./../../assets/user2.png"
import user3 from "./../../assets/user3.png"
import user4 from "./../../assets/user4.png"
import poster from "./../../assets/poster.png"
import programming from "./../../assets/programming.mp4"
import doubleline from "./../../assets/double.png"




function CourseCard() {

  const navigate = useNavigate()
  const { id } = useParams()

  const [pageData, setPageData] = useState({})
  const [currentCurric, setCurrentCurric] = useState(0)
  const [pkgBtn, setPkgBtn] = useState(0)

  useEffect(() =>{
    
    var info = data[id]
    
    if(info === undefined){
      navigate("/")
    }else{
      setPageData(info)
    }

  }, [id])

  


  return (


    

    <div className='course'>

      <div className="coursehero p-3">

        <div className="container p-5">
          <div className="row align-items-center">
            <div className='col-md-6 col-12'>
              <h2 className="h2"> {pageData?.dpt1} <br /> {pageData?.dpt2} </h2>
              <p className='p'>{pageData?.bannerText}</p>
              <div className='info-btn container-fluid'>
                <div className="row align-items-center">
                 {pageData?.bannerBtn?.map((buttonInfo) => (
                  buttonInfo?.text !== "" && <small className='text-center p-1 col-6 col-2 mx-1 my-1 '> {buttonInfo?.icon !== "" && buttonInfo?.icon} {buttonInfo?.text}</small>
                 ))}
                  
                </div>
              </div>
            </div>

            <div className="col-md-6 col-12 d-none d-md-block">

              <div className="outerbox">
                <p className='text-white fw-bold text-center'>Get Started Today</p>
                <small className='text-center d-block text-white'><FaCheckSquare /> Enrich Your Skillset</small>
                <small className='text-center d-block text-white'><FaCheckSquare /> Enrich Your Skillset</small>
                <small className='text-center d-block text-white'><FaCheckSquare /> Enrich Your Skillset</small>
                <small className='text-center d-block text-white'><FaCheckSquare /> Enrich Your Skillset</small>
              </div>


            </div>
          </div>

        </div>


      </div>


      <div className="next-cohort w-75 m-auto p-3 my-5 rounded ">
        <div className="row">
          <div className="col-md-5 col-12 d-flex justify-content-between align-items-center">
            <div className=''>
              <h6 className='small'><BiCalendar /> Next cohort starts:</h6>
              <h4>{pageData?.nextCohort?.date}</h4>
              <h6 className='small'>{pageData?.nextCohort?.time}</h6>
            </div>
            <button className="btn-sm btn btn-primary">Enroll Now</button>
          </div>

          <div className="col-md-2 col-12"><img className='divider d-block m-auto ms-5' src={line} alt="divider" /></div>

          <div className="col-md-5 col-12 flex-column flex-md-row d-flex align-items-md-center justify-content-around">
            <h6 className='small text-capitalize'>Find Another cohort <br /> that fit your schedule</h6>

            <NavLink href="" className="mb-2 border border-primary text-center p-md-2 p-1 small text-primary rounded">
              <small>see all cohorts</small>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="outline">
        <h6 className="text-center h2">Course Outline</h6>
        <img src={outline} className="d-block m-auto img-fluid" alt="outline" />

        <div className="notifyboard container w-75 m-auto my-5">
          <div className="row">
            <div className="col-md-6 col-12">
              <ul className="nav nav-tabs flex-row flex-md-column justify-content-md">

               {pageData?.courseInfo?.map((ci, i) =>(
                ci?.curr !== "" && 
                <li key={i} onClick={() => setCurrentCurric(i)} className={`${ currentCurric === i && "myactive text-white"} border  border-muted rounded my-1 d-flex justify-content-between align-items-center`}>
                <p class="p-2 d-flex" aria-current="page">{ci?.curr}</p>
                <FaArrowRight className='mx-3' color='#999'/>
              </li>
              

               ))} 
                
              </ul>
            </div>
            <div className="col-md-6 col-12 card border-primary">
             <p className="p my-3">{pageData?.courseInfo !== undefined && (pageData?.courseInfo[currentCurric]?.text)}</p>
            </div>
          </div>

        </div>

        <button className="btn-sm btn btn-primary m-auto d-block">Enroll Now</button>
      </div>

      <div className="package my-5 p-1 p-md-4">
      <h6 className="text-center h2">Program Packages</h6>
        <img src={outline} className="d-block m-auto img-fluid" alt="outline" />
        <div className="packageButton rounded my-2">
        <div className=" d-flex align-items-center m-auto justify-content-center my-2 ">
          {pageData?.packageBtn?.map((pk, i) =>(
            <p key={i} onClick={() => setPkgBtn(i)} className={` activeBtn mx-2 ${pkgBtn === i && "myactive text-white"} px-2 my-2 rounded`}>{pk?.title}</p>
          ))}
        </div>
        </div>

        <div className="packageInfo">
          <div className="d-flex flex-column flex-md-row justify-content-around align-items-center my-2">
            <div className="flex-1">
              <p className="tab-heading">{pageData?.packageBtn !== undefined && (pageData?.packageBtn[pkgBtn]?.title)}</p>
              <div className="tablist">
              {pageData?.packageBtn !== undefined && (pageData?.packageBtn[pkgBtn]?.info?.map((text) =>(
                  <p>{text}</p>
              )))}
                
              </div>
            </div>

            <div className="">
              <img src={user1} alt="" className="img-fluid stud1" />
            </div>
          </div>
        </div>

        
      </div>

      <div className="advert">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-5 position-relative mx-3 mx-md-0">

                <img src={user3} alt="" className='img-fluid img-thumbnail d-block' />
                <img src={user4} alt="" className='img-fluid img-thumbnail d-block' />
                <img src={user2} alt="" className='img-fluid img-thumbnail d-block' />

              </div>
              <div className="col-md-2">
                <img className='d-block m-auto' src={doubleline} alt="" />
              </div>
              <div className="col-md-5 left">
                <h5 className='h5 fw-bold '>Learn Online Or On<br /> Campus, weekdays or <br /> weekends </h5>
                <p className='h6'>Take an online coding bootcamp or learn in-person at one of our state-of-the-art campuses, which are designed to provide dynamic, accelerated learning experiences.</p>
                <button className='btn btn-md mt-3'>Get Started</button>
              </div>
            </div>
          </div>
        </div>

      <div className="video mt-5 p-5 position-relative">

        <video poster={poster} className='position-absolute  top-50 start-50 translate-middle' controls>
          <source src={programming} type="video/mp4"/>

        </video>

      </div>

      <div className='more p-5'>
      <div className="container">
            <div className="row justify-content-between align-items-center">
            <div className="col-md-5 ">
                <h5 className='h5 fw-bold '>Everything You<br /> Need To Know To <br /> Get Started</h5>
                
              </div>
              <div className="col-md-2">
                <img className='d-block m-auto' src={doubleline} alt="" />
              </div>
              <div className="col-md-5">
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam alias a id molestias voluptatibus doloribus.</p>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam alias a id molestias voluptatibus doloribus.</p>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam alias a id molestias voluptatibus doloribus.</p>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam alias a id molestias voluptatibus doloribus.</p>
              </div>
            </div>
          </div>
      </div>

    </div>

    

  )
}

export default CourseCard