import React from 'react'
import logo from './assets/React_Logo_SVG.svg'
export default function Header (){
    return( 
        <nav className="navBar">
            <img src ={logo} alt ='react logo' className="logo"/>
            <h1>ReactFacts</h1>
        </nav>
    )
}