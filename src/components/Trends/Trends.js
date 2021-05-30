import React from 'react'
import { Link } from "react-router-dom"
import "./Trends.scss"
import { FiSettings, FiMoreHorizontal } from "react-icons/fi"
import { Trend } from "./Trends.data"



const Trends = () => {
    return (
        <div className="trends">
            <div className="trendscontainer">
                <div className="trendsheader">
                    <h4>Trends For You</h4>
                    <Link to="/"><FiSettings /></Link>
                </div>
                {Trend.map(item => (
                    <div key={item.id} className="trenditem">
                        <div className="trendtextsection">
                            <p>{item.catagory}</p>
                            <h4>{item.name}</h4>
                            <p>{item.tweets}</p>
                        </div>
                        <div className="trendiconsection">
                            <FiMoreHorizontal />
                        </div>
                    </div>
                ))}
                <div className="trendsfooter">
                    <a href="www.twitter.com">Show More</a>
                </div>
            </div>
        </div>
    )
}

export default Trends
