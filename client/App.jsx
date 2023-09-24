import React, {useState} from 'react';
import AboutPage from './components/AboutPage.jsx';
import WelcomePage from "./components/WelcomePage.jsx";
import Project from './components/Project.jsx'
import {
   Routes,
   Route,
   Link
  } from "react-router-dom";

export default function App(){

    const [projectNum, setProjectNum] = useState(1);

   const handleProject = (num) => {
    
    return num + projectNum > 0 ? setProjectNum(num + projectNum) : setProjectNum(1);
   }
    return (
        <>
        <Routes>
        <Route path="/" element={<WelcomePage/>}></Route>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path='/project' element={<Project projectNum = {projectNum} handleProject = {handleProject}/>}/>

        </Routes>
        <br></br>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/about">About</Link>
        </>
    )
}