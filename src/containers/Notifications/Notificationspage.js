import React from 'react'
import "./Notificationspage.scss"
import Sidenav from "../../components/sidenav/Sidenav"
import Mobilemenu from '../../components/mobileMenu/Mobilemenu'
import Trends from '../../components/Trends/Trends'
import SearchTwitter from '../../components/searchtwitter/searchTwitter'
import Whotofollow from '../../components/whotofollow/Whotofollow'
import Termsbar from '../../components/termsbar/Termsbar'
import Homebartop from "../../components/homebar/Homebartop"
import { AiOutlineSetting } from "react-icons/ai"

const Notificationspage = () => {
    return (
        <div>
        <div className="container">
        <div className="row">
            <div className="col-3">
                <Sidenav />
            </div>
            <div className="col-5">
                <Homebartop text="Notifications"
                            TopbarIcon={<AiOutlineSetting />}
                            wrapperJustified="space-between" />
                
            </div>
            <div className="col-4">
              <SearchTwitter placeholder="Search Twitter" />
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

export default Notificationspage
