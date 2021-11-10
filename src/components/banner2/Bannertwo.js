import React from 'react'
import Button from "../button/Button"
import "./BannerTwo.scss"
import { FaTwitter } from "react-icons/fa"




const Bannertwo = () => {
    return (
        <div className="banner-two">
            <div>
                <div className="twitter-bird"><span><FaTwitter/></span></div>
                <div className="banner-two-title">
                    <h2>See what’s happening in the world right now</h2>
                </div>
                <h4>Join Twitter today.</h4>
                <Button pathname="/register" BtnText="Sign up" />
                <Button pathname="/login" BtnText="Log in" color="rgb(29, 161, 242)" backgroundColor="rgb(255, 255, 255)" border="2px solid rgb(29, 161, 242)" margin="10px 0 0 0" />
            </div>
        </div>
    )
}

export default Bannertwo
