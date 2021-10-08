import React from "react";
import { AiOutlineHome } from 'react-icons/ai'
import { Link } from "react-router-dom";

const Navbar = ({ show }) => {
    return (
        <div className={show ? "sidenav active" : "sidenav"}>
            <ul className="sidenavList">

                <li className="sidenavLi">
                    <Link to="/Aluno" className="active Link">
                        <AiOutlineHome />Home
                    </Link>
                </li>
                <li className="sidenavLi">

                </li>
            </ul>
        </div>
    )
}

export default Navbar;