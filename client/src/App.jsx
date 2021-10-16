import React from 'react'
import logo from '../assets/head.png'
import textlogo from '../assets/textlogo.png'

const App = () => {
    return(
        <div class='nav-container'>
            <img class='head' src={logo}/>
            <img class='textlogo' src={textlogo}/>
            <div class="topnav">
                <a class = "subnav" href="#news">API </a>
                <a class = "subnav" href="#contact">Docs </a>
                <a class = "subnav" href="#about">Discord </a>
            </div>
            <a href="something" class="button3">Generate</a>
            <a href="https://www.instagram.com/deffiedeff/" class="signature">©DEFFIE 2021</a>
        </div>

    )
}

export default App