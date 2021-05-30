import React from 'react'
import "./Termsbar.scss"
import { Link } from "react-router-dom"



const Termsbar = () => {
    return (
        <div className="termsbarcontainer">
            <div>
                <Link to="/thome">Terms of service</Link>
                <Link to="/thome">Privacy policy</Link>
                <Link to="/thome">Cookie policy</Link>
                <Link to="/thome">Ads info</Link>
                <Link to="/thome">More...</Link>
                <p> © 2021 Twitter, Inc. </p>
            </div>
        </div>
    )
}

export default Termsbar
