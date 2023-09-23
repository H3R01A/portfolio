import React from 'react';
import AboutPage from './components/AboutPage.jsx';
import WelcomePage from "./components/WelcomePage.jsx";
import Project1 from './components/Project1.jsx'
import {
   Routes,
   Route,
   Link
  } from "react-router-dom";






export default function App(){
    return (
        <>
        <Routes>
        <Route path="/" element={<WelcomePage/>}></Route>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path='/project1' element={<Project1/>}/>

        </Routes>
        <br></br>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/about">About</Link>
        </>
    )
}