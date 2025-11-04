import React from 'react'
 import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import ContactUs from './Pages/ContactUs';
import News from './Pages/News';
 
import Services from './Pages/Services';
const App = () => {
  return (
    <>
    <div>
 <Navbar/>
     <Routes>
  <Route path="/" element={<Home/>}/>
    <Route path="/contactUs" element={<ContactUs/>}/>
  <Route path="/news" element={<News/>}/>
  <Route path="/services" element={<Services/>}/>
 
     </Routes>
     <Footer/>
    </div>
    
    </>
  
  )
}

export default App