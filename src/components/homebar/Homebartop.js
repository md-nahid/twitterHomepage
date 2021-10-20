import React from 'react'
import PropTypes from 'prop-types'
import Userimg from "../../images/userphoto.png"
import { Wrapper, LeftSide, RightSide } from "./Homebartop.styled"

const Homebartop = ({ text, wrapperJustified, wrapperAligned, TopbarIcon, Someimg, borderBottom }) => {
    return (
       <Wrapper wrapperJustified={wrapperJustified} wrapperAligned={wrapperAligned} borderBottom={borderBottom}>
        <LeftSide>
          <img src={Userimg} alt="Userimg" />
          <h3>{text}</h3>
        </LeftSide>
        <RightSide>
          <div>
            {Someimg ? <img src={Someimg} alt="a"/> : "" } 
            {TopbarIcon ? <span>{TopbarIcon}</span> : "" }
          </div>
        </RightSide>       
       </Wrapper>
    )
}


Homebartop.propTypes = {
    text: PropTypes.string,
    wrapperJustified: PropTypes.string,
    wrapperAligned: PropTypes.string,
    TopbarIcon: PropTypes.object,
    Someimg: PropTypes.string,
    borderBottom: PropTypes.string
}



export default Homebartop
