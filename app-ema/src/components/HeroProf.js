import React,{useState} from "react";
import NavbarProf from "./NavbarProf";
import { GiHamburgerMenu } from "react-icons/gi";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeDoisProfessor from '../Pages/Professor/HomeDoisProfessor';
import homeProfessor from '../Pages/Professor/HomeProfessor';
const HeroProf = ({ handleLogout }) => {

    const [showNav, setShowNav] = useState(false)

    return (
        <section className="hero">
            <Router>
                <nav>
                    <GiHamburgerMenu className="hamburguer" onClick={() => setShowNav(!showNav)} />

                    <button onClick={handleLogout}>Logout</button>
                </nav>
                <NavbarProf show={showNav} />


                <div className="MainHero">
                    <Route path="/HomeDoisProfessor" component={HomeDoisProfessor} />
                    <Route path="/HomeProfessor" component={homeProfessor} />
                </div>
            </Router>
        </section>
    )
}

export default HeroProf;