import React from 'react'
import "./home.scss"
import Sidenav from '../../components/sidenav/Sidenav'
import SearchTwitter from "../../components/searchtwitter/searchTwitter"
import Trends from '../../components/Trends/Trends'
import Whotofollow from '../../components/whotofollow/Whotofollow'
import Termsbar from '../../components/termsbar/Termsbar'
import Homebartop from '../../components/homebar/Homebartop'
import Tweetsection from '../../components/tweetsection/Tweetsection'
import Twitterpost from '../../components/twitterpost/Twitterpost'
import Mobilemenu from "../../components/mobileMenu/Mobilemenu"




// importing images for twitter post
import UserImg from "../../images/userphoto.png"
import Captain from "../../images/twitterpost.jpg"
import Twitterpost2 from "../../images/twitterpost2.jpg"



const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Sidenav />
                    </div>
                    <div className="col-5">
                        <Homebartop />
                        <Tweetsection />
                        <Twitterpost userImg={UserImg}
                                    userName="Md. Nahid"
                                    userProfileLink="@md-nahid"
                                    postTime="2h"
                                    postText="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."/>
                        
                        <Twitterpost userImg={UserImg}
                                    userName="Md Raju"
                                    userProfileLink="@raju"
                                    postTime="4h"
                                    postText="I can do this all day."
                                    postImg={Captain}/>
                        
                        <Twitterpost userImg={UserImg}
                                    userName="Md Rofikul"
                                    userProfileLink="@rafikul"
                                    postTime="1h"
                                    postText="Isn't this the mission that we end the fight and go home."
                                    postImg={Twitterpost2}/>
                    </div>
                    <div className="col-4">
                        <SearchTwitter type="text" placeholder="Search Twitter" />
                        <Trends />
                        <Whotofollow />
                        <Termsbar />
                    </div>
                </div>            
            </div>
            <Mobilemenu />
        </div>
    )
}

export default Home;