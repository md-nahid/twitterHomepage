import React from 'react'
import "./Homebartop.scss"
import Staricon from "../../images/staricon.jpg"





const Homebartop = () => {
    return (
        <div className="homebartopcontainer">
            <div>
                <h3>Home</h3>
                <img src={Staricon} alt="twitter star icon" />
            </div>
        </div>
    )
}

export default Homebartop
