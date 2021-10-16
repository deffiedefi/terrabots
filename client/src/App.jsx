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
            <p class = "info">Terrabots is a 3D pfp project that uses the cloud to render unique mechanical
            faces based on a set of randomized parameters. Only 5000 will be minted. Create a terrabot 
            of your own, mint it, and claim your stake in the future of the generative 3D art world.</p>
            <a href="something" class="button3">Generate</a>
            <a href="https://www.instagram.com/deffiedeff/" class="signature">©DEFFIE 2021</a>
        </div>

    )
}

export default App