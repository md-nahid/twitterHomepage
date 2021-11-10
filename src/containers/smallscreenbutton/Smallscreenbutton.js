import React from 'react'
import Button from "../../components/button/Button"
import "./Smallscreenbutton.scss"

const Smallscreenbutton = () => {
    return (
        <div className="small-screen-button">
            <Button pathname="/register" BtnText="Sign up" />
            <Button pathname="/login" BtnText="Log in" color="rgb(29, 161, 242)" backgroundColor="rgb(255, 255, 255)" border="2px solid rgb(29, 161, 242)" />
        </div>
    )
}

export default Smallscreenbutton
