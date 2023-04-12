import React from "react";
import student1 from "../../assets/student1.png";
import student2 from "../../assets/student2.png";
import student3 from "../../assets/student3.png";
import blueline from "../../assets/Blue Frame 27.png";
import blueline2 from "../../assets/horizontal_blueline.png";
import points from "../../assets/Group 19.png";

const LE = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-between align-items-center p-5">
        <div className="col-md-5 col-12 position-relative">
          <img src={student1} alt="" className="student1 mx-4" />
          <img src={student2} alt="" className="student2 mx-4" />
          <img src={student3} alt="" className="student3 mx-4" />
        </div>

        <div className="col-md-2 col-12">
        <img src={blueline} alt="" className='blue-line d-block m-auto' />
        </div>

        <div className="learn col-md-5 col-12 ">
          <h1>Learn Online or On Campus, Weekdays or Weekends</h1>
          <p>
            Take an online coding bootcamp or learn in-person at one of our
            state-of-the-art campuses, which are designed to provide dynamic,
            accelerated learning experiences.
          </p>
          <button className="get-btn btn">Get Started</button>
        </div>
      </div>

      <div className="started p-3  d-md-flex d-column justify-contents-between">
        <div className="col-md-6 col-12">
          <div className="everything-text">
            Everything You Need To Know To Get Started
            <img src={blueline} alt="" className="everything-blue-line " />
          </div>
        </div>
        <img src={blueline2} alt="" className="everything-blue-line2" />
        <div className="learn col-md-6 col-12 mt-md-5 mt-2">
          <div className="fw-bold fs-6 my-4">
            <img src={points} alt="" /> Learn more about LASOP certificate
            courses and cohorts programme
          </div>
          <div className="fw-bold fs-6 my-4">
            <img src={points} alt="" /> Discuss tuition, payment plans.
          </div>
          <div className="fw-bold fs-6 my-4">
            <img src={points} alt="" /> Figure out which course or cohort is
            right for your learning and career goals.
          </div>

          <button className="get-btn btn my-4">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default LE;
