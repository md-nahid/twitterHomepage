import React, { useState } from 'react';
import "./Tweetsection.scss";
import Userphoto from "../../images/userphoto.png";
import { AiFillSchedule, AiOutlineForm } from "react-icons/ai";
import { BiPoll, BiWorld } from "react-icons/bi";
import { GrEmoji, GrImage } from "react-icons/gr";



const Tweetsection = () => {

const [ Textarea, setTextarea ] = useState("");


function handleChange(e) {
    setTextarea(e.target.value);
    e.target.addEventListener("input", autoResizing);
    function autoResizing(e) {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight+'px';
    }
}

function handleClick () {
    let Privacy = document.querySelector(".privacy");
    Privacy.style.display = "block";
}


    return (
        <div className="tweetsectioncontainer">
            <div className="postimgsection">
                <img src={Userphoto} alt="user"/>
            </div>
            <div className="posttextsection">
            <textarea id="textarea" rows="1" 
                    placeholder="What's Happening"
                    value={Textarea} 
                    onChange={handleChange}
                    onClick={handleClick} />
                <div className="privacy">
                    <button><span><BiWorld /></span>Everyone Can See</button>
                </div>
                <div className="otherattachments">
                    <div className="otherattachmentsicons">
                        <span><GrImage /></span>
                        <span><AiOutlineForm /></span> 
                        <span><BiPoll /></span> 
                        <span><GrEmoji /></span> 
                        <span><AiFillSchedule /></span>
                    </div>
                    <div className="otherattachmentsbutton">
                        <button>Tweet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweetsection;
