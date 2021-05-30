import React from 'react'
import PropTypes from 'prop-types'
// import { AiOutlineSearch } from "react-icons/ai"
import "./searchTwitter.scss"
import { FiSearch } from "react-icons/fi"

const SearchTwitter = ({ type, placeholder }) => {

function searchbarfocus() {
    let searchinput = document.querySelector(".searchtwitter");
    searchinput.style.backgroundColor = "#ffffff";
    searchinput.parentElement.parentElement.style.backgroundColor = "#ffffff";
    searchinput.parentElement.parentElement.style.border = "1px solid rgb(47, 189, 233)";
    searchinput.parentElement.parentElement.style.color = "rgb(47, 189, 233)";
}

function searchbarblur() {
    let searchinput = document.querySelector(".searchtwitter");
    searchinput.style.backgroundColor = "rgb(241, 238, 238)";
    searchinput.parentElement.parentElement.style.backgroundColor = "rgb(241, 238, 238)";
    searchinput.parentElement.parentElement.style.border = "1px solid #ffffff";
    searchinput.parentElement.parentElement.style.color = "#000000";
}


    return (
        <div className="searchContainer">
            <div className="searchrow">
                <div>
                    <FiSearch />
                </div>
                <form action="">
                    <input type={type} className="searchtwitter" placeholder={placeholder} onFocus={searchbarfocus} onBlur={searchbarblur} />
                </form>
            </div>
        </div>
    )
}


SearchTwitter.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string
  };




export default SearchTwitter
