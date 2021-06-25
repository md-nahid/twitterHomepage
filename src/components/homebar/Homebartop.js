import React from 'react'
import "./Homebartop.scss"
import Staricon from "../../images/staricon.jpg"
import Userimg from "../../images/userphoto.png"





const Homebartop = () => {
    return (
        <div className="homebartopcontainer">
            <div>
                <div>
                    <img src={Userimg} alt="This is user." />
                    <h3>Home</h3>
                </div>
                <img src={Staricon} alt="twitter star icon" />
            </div>
        </div>
    )
}

export default Homebartop
