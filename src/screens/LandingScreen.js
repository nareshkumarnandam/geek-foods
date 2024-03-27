import React from 'react'
// import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const LandingScreen = () => {
  return (
    <div className='landingScreen'>
        {/* <AboutMe /> */}
        {/* <Certifications /> */}
        {/* <Projects /> */}
        {/* <More /> */}
        {/* <Contact /> */}
        <Outlet>
            {/* The rest of your app goes here */}
        </Outlet>
    </div>
  )
}

export default LandingScreen