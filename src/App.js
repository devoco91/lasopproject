import React, { lazy, Suspense, useLayoutEffect } from 'react';
import { Spinner } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbarfiles/Navbar'
import Footer from './components/footerfiles/Footer'
import AOS from "aos"
const Home = lazy(() => import("./components/Pages/Home"))
const Course = lazy(() => import("./components/Pages/Course"))
const Onboard = lazy(() => import("./components/Pages/Onboard"))
const Login = lazy(() => import("./components/Pages/Login"))



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
        <Navbar />
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={ <Onboard/> }/>
          <Route path="/login" element={ <Login/> }/>
          <Route path="/course/:id" element={<Course/>}/>
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
