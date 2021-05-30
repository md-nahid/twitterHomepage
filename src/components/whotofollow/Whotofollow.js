import React from 'react'
import "./Whotofollow.scss"
import { Whotofollowpeoples } from "./Whotofollow.data"
import Followerimg from "../../images/userphoto.png"


const Whotofollow = () => {
    return (
        <div>
            <div className="whotofollow">
                <div className="whotofollowcontainer">
                    <div className="whotofollowheader">
                        <h4>Who to follow</h4>
                    </div>
                    {Whotofollowpeoples.map(item => (
                        <div className="follower" key={item.id}>
                            <div className="followerimg">
                                <img src={Followerimg} alt={item.urlname}/>
                            </div>
                            <div className="followertext">
                                <h5>{item.name}</h5>
                                <p>{item.urlname}</p>
                            </div>
                            <div className="followerbtn">
                                <button>{item.button}</button>
                            </div>
                        </div>
                    ))}
                    <div className="whotofollowfooter">
                        <a href="www.twitter.com">Show More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whotofollow
