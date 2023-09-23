import React from 'react';
import {
    Routes,
    Route,
    Link
   } from "react-router-dom";
 


export default function WelcomePage(){

    return(
        <>
        <h1>Hello!</h1>
        <Link to="/project1"><button>New Game</button></Link>
        </>
    )
}