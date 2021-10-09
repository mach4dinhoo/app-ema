import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GiNotebook } from "react-icons/gi"
import {GiStabbedNote} from "react-icons/gi"
import { Link } from "react-router-dom";

const NavbarProf = ({ show }) => {
    return (
        <div className={show ? "sidenav active" : "sidenav"}>
            <ul className="sidenavList">

                <li className="sidenavLi">

                    <Link to="/Home" className="active Link">
                        <AiOutlineHome />Home
                    </Link>
                </li>

                <li className="sidenavLi">
                    <Link to="/Atividades" className="active Link">
                        <GiNotebook /> Atividades
                    </Link>
                </li>

                <li className="sidenavLi">
                    <Link to="/Boletim" className="active Link">
                        <GiStabbedNote/>Boletim
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavbarProf;