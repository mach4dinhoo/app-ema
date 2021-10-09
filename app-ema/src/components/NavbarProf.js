import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavbarProf = ({ show }) => {
    return (
        <div className={show ? "sidenav active" : "sidenav"}>
            <ul className="sidenavList">

                <li className="sidenavLi">

                    <Link to="/HomeProfessor" className="active Link">
                        <AiOutlineHome />Home
                    </Link>
                </li>

                <li className="sidenavLi">
                    <Link to="/HomeDoisProfessor" className="active Link">
                        Home dois
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavbarProf;