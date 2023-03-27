import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbarfiles/Navbar'
import Footer from './components/footerfiles/Footer'






function App() {
  return (
    <div className="App">
                
   <Router>

    <Navbar/>
   
    
   <Routes>
   
   <Route></Route>
   </Routes>
   <Footer/> 
   </Router>

    </div>
  );
}

export default App;
