import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbarfiles/Navbar";
import Footer from "./components/footerfiles/Footer";
import { Spinner } from "reactstrap";

const Faqs = React.lazy(()=>import("./Pages/FAQs/Faqs"))
const Fullfaq = React.lazy(() => import ("./Pages/FAQs/Fullfaq"))
const Contact = React.lazy(()=> import("./Pages/Contact Us/Contact"))

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<div className="position-absolute top-50 start-50 transform-translate text-primary">
        <Spinner/></div>}>
      <Router>
      <Navbar/>
        <Routes>

          <Route path="/faqs" element={<Faqs/>}/>
          <Route path="/faq" element={<Fullfaq/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
      </React.Suspense>
    </div>
  );
}

export default App;
