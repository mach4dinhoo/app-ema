import React, { useState } from "react";
import NavbarProf from "./NavbarProf";
import { GiHamburgerMenu } from "react-icons/gi";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Atividades from '../Pages/Professor/Atividades';
import Home from '../Pages/Professor/Home';
import Boletim from "../Pages/Professor/Boletim";

const HeroProf = ({ handleLogout }) => {

    const [showNav, setShowNav] = useState(false)

    return (
        <section className="hero">
            <Router>
                <nav>
                    <GiHamburgerMenu className="hamburguer" onClick={() => setShowNav(!showNav)} />
                    <div>
                        <h1>4ºTI Tarde</h1>
                    </div>
                    <button onClick={handleLogout}>Logout</button>
                </nav>

                <NavbarProf show={showNav} />

                <div>
                    <Route path="/Atividades" component={Atividades} />
                    <Route path="/Home" component={Home} />
                    <Route path="/Boletim" component={Boletim} />
                </div>


            </Router>


        </section>
    )
}

export default HeroProf;