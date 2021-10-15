import React from 'react'
import Sidenav from '../../components/sidenav/Sidenav'
import Mobilemenu from '../../components/mobileMenu/Mobilemenu'
import Searchtwitter from "../../components/searchtwitter/searchTwitter"
import Trends from "../../components/Trends/Trends"
import Twitterpost from '../../components/twitterpost/Twitterpost'
import { post } from "./Explorepage.data"
import Whotofollw from "../../components/whotofollow/Whotofollow"
import Termsbar from "../../components/termsbar/Termsbar"
import "./Explorepage.scss"

const Explorepage = () => {
    return (
        <div>
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <Sidenav />
                </div>
                <div className="col-5">
                       <Searchtwitter />
                       <Trends />
                       {post.map((item) => (
                        <Twitterpost key={item.id} 
                            userImg={item.userimg}
                            userName={item.username}
                            userProfileLink={item.userprofilelink}
                            postTime={item.posttime}
                            postText={item.posttext}
                            postImg={item.postimg}/>
                    ))}
                </div>
                <div className="col-4">
                   <Whotofollw />
                   <Termsbar />
                </div>
            </div>            
        </div>
        <Mobilemenu />
    </div>
    )
}

export default Explorepage
