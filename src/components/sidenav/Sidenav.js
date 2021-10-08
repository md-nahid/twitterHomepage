import React from 'react';
import { Link } from "react-router-dom"
import "./Sidenav.scss";
import { BiHomeCircle } from "react-icons/bi";
import { FiHash } from "react-icons/fi";
import { AiOutlineBell, AiOutlineMail, AiOutlineUser, AiOutlineTwitter, AiOutlineCheck } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { RiFileList2Line } from "react-icons/ri";
import { CgMoreO } from "react-icons/cg";
import { MdMoreHoriz } from "react-icons/md"

// import images
import userPhoto from "../../images/userphoto.png"
import Tweeticon from "../../images/tweeticon.png"

const Sidenav = () => {
// popover display function
    function popoverFucntion () {
        let popover = document.querySelector(".profileBtncontainer> .popover");
        if(popover.style.display === "block") {
            popover.style.display = "none";
        }else {
            popover.style.display = "block";
        }
    }
// popover blur function
    function popoverBlurFucntion () {
        let popover = document.querySelector(".profileBtncontainer> .popover");
        if(popover.style.display === "block") {
            popover.style.display = "none";
        }
    }





    return (
        <div className="homePageSidenav">
        {/* side navigation bar start */}
            <nav>
                <ul>
                    <li><Link to="/"><AiOutlineTwitter /></Link></li>
                    <li className="active"><Link to="/"><BiHomeCircle /> <span>Home</span></Link></li>
                    <li><Link to="/"><FiHash /> <span>Explore</span></Link></li>
                    <li><Link to="/"><AiOutlineBell /> <span>Notifications</span></Link></li>
                    <li><Link to="/"><AiOutlineMail /> <span>Messages</span></Link></li>
                    <li className="bookmarksidemenu"><Link to="/"><BsBookmark /> <span>Bookmarks</span></Link></li>
                    <li className="listssidemenu"><Link to="/"><RiFileList2Line /> <span>Lists</span></Link></li>
                    <li><Link to="/"><AiOutlineUser /> <span>Profile</span></Link></li>
                    <li><Link to="/"><CgMoreO /> <span>More</span></Link></li>
                </ul>
                <div className="tweetbtn">
                    <button className="tweetbtntext">Tweet</button>
                    <button className="tweetbtnicon"><img src={Tweeticon} alt="" /></button>
                </div>
            </nav>
            {/* side navigation bar end */}
            {/* Logout button start */}
            <div className="profileBtncontainer" onClick={popoverFucntion} onBlur={popoverBlurFucntion} >
                {/* Logout popover start */}
                <div className="popover">
                    <div className="line1">
                        <button className="profileBtn">
                            <div className="imgContainer">
                                <img src={userPhoto} alt="this is user" />
                            </div>
                            <div className="nameId">
                                <h6>Md. Nahid</h6>
                                <p>@MdNahid55459875</p>
                            </div>
                            <div className="moreIcon"><AiOutlineCheck /></div>
                        </button>
                    </div>
                    <div className="line1">Add an existing account</div>
                    <div className="line1">Log out @MdNahid55459875</div>
                </div>
                {/* Logout popover end */}
                <button className="profileBtn">
                    <div className="imgContainer">
                        <img src={userPhoto} alt="this is user" />
                    </div>
                    <div className="nameId">
                        <h6>Md. Nahid</h6>
                        <p>@MdNahid55459875</p>
                    </div>
                    <div className="moreIcon"><MdMoreHoriz /></div>
                </button>
            </div>
            {/* Logout popover end */}
        </div>
    )
}

export default Sidenav
