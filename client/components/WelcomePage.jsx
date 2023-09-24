import React, {useState} from 'react';
import {
    Routes,
    Route,
    Link
   } from "react-router-dom";
 



export default function WelcomePage(){

    return(
        <>
        <h1>Welcome to My Site</h1>
        <Link to="/project"><button>New Game</button></Link>
        </>
    )
}