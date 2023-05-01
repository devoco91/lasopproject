import React, { lazy, Suspense, useLayoutEffect } from 'react';
import { Spinner } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos"
const Home = lazy(() => import("./components/Pages/Home"))
const Course = lazy(() => import("./components/Pages/Course"))
const Onboard = lazy(() => import("./components/Pages/Onboard"))
const Login = lazy(() => import("./components/Pages/Login"))
const Calendar = lazy(() => import("./components/Pages/Calendar"))
const Dashboard = lazy(() => import("./components/Dashboard/Layout"))



function App() {

  AOS.init({
    duration: 3000,
    easing: 'ease-in-out',
    delay: 100,
  })

  window.addEventListener("scroll", () =>{
    AOS.refresh()
  })

  return (
    <Suspense>
      <Router>
       
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={ <Onboard/> }/>
          <Route path="/login" element={ <Login/> }/>
          <Route path="/calendar" element={ <Calendar/> }/>
          <Route path="/course/:id" element={<Course/>}/>
          <Route path="/dashboard/:text/?" element={<Dashboard/>}/>
        </Routes>
      
      </Router>
    </Suspense>
  );
}

export default App;
