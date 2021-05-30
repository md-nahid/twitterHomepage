import React from 'react'
import { Link } from "react-router-dom"
import "./Mobilemenu.scss"


// importing react icons
import { BiHomeCircle, BiBell, BiEnvelope } from "react-icons/bi"
import { FiSearch } from "react-icons/fi"

const Mobilemenu = () => {






    return (
        <div className="mobileMenu">
            <nav>
                <ul>
                    <li><Link to="/" className="active"><BiHomeCircle /></Link></li>
                    <li><Link to="/"><FiSearch /></Link></li>
                    <li><Link to="/"><BiBell /></Link></li>
                    <li><Link to="/"><BiEnvelope /></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Mobilemenu
