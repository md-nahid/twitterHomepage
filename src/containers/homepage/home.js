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
import { post } from "./home.data"
import Staricon from "../../images/staricon.jpg"


const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Sidenav />
                    </div>
                    <div className="col-5">
                        <Homebartop 
                            text="Home" 
                            wrapperJustified="space-between" 
                            Someimg={Staricon}
                            borderBottom="1px solid #ccc"
                             />
                        <Tweetsection />
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