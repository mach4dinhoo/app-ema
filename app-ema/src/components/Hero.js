import React, { useState } from 'react'
import Navbar from './Navbar'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Hero = ({ handleLogout }) => {

    const [showNav, setShowNav] = useState(false)

    return (
        <section className="hero">
            <nav>

                <GiHamburgerMenu className="hamburguer" onClick={() => setShowNav(!showNav)} />

                <button onClick={handleLogout}>Logout</button>

            </nav>

            <Navbar show={showNav} />

            <Router>
                <div className="Main">
                    <h1>Teste</h1>
                </div>
            </Router>
        </section>
    )
}

export default Hero;