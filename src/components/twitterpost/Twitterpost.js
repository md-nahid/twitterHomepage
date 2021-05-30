import React from 'react'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import './Twitterpost.scss'

// importing icons from react icons
import { FiMoreHorizontal, FiShare } from "react-icons/fi"
import { BiMessageRounded, BiRepost } from "react-icons/bi"
import { AiOutlineHeart } from "react-icons/ai"

const Twitterpost = ({ userImg, userName, userProfileLink, postTime, postText, postImg }) => {
    return (
        <div className="twitterpostcontainer">
            <div className="userimg">
                <img src={userImg} alt={userName}/>
            </div>
            <div className="userpostsection">
                <div className="postheader">
                    <div className="userinfo">
                        <Link to="">{userName}</Link>
                        <span>{userProfileLink} </span>
                        <Link to="/">{postTime}</Link>
                    </div>
                    <div className="moreicon"><FiMoreHorizontal /></div>
                </div>
                <div className="postmain">
                    <div className="posttext">
                        {postText}
                    </div>
                    <div className="postimg">
                        {<img src={postImg} alt="alt text" /> ? <img src={postImg} alt="" /> : ""}
                    </div>
                </div>
                <div className="postfooter">
                    <div className="differenticons">
                        <div><span><BiMessageRounded /></span> 16.2K</div>
                        <div><span><BiRepost /></span> 2K</div>
                        <div><span><AiOutlineHeart /></span> 8K</div>
                        <div><span><FiShare /></span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


Twitterpost.propTypes = {
    userImg: PropTypes.string,
    userName: PropTypes.string,
    userProfileLink: PropTypes.string,
    postTime: PropTypes.string,
    postText: PropTypes.string,
    postImg: PropTypes.string,
  };



export default Twitterpost
