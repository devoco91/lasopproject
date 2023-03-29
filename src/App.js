import React, { lazy, Suspense } from 'react';
import { Spinner } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbarfiles/Navbar'
import Footer from './components/footerfiles/Footer'

const Home = lazy(() => import("./components/Pages/Home"))
const Course = lazy(() => import("./components/Pages/Course"))



function App() {
  return (
    <Suspense>
      <Router>
        <Navbar />
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/course/:id" element={<Course/>}/>
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
