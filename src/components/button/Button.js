import React from 'react'
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { MainButton } from "./Button.styled"

const Button = ({ BtnText, color, backgroundColor, border, margin, pathname }) => {
    return (
        <MainButton color={color} backgroundColor={backgroundColor} border={border} margin={margin}>
            <Link to={pathname}>{BtnText}</Link>
        </MainButton>
    )
}

Button.propTypes = {
    BtnText: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    border: PropTypes.string,
    margin: PropTypes.string,
}

export default Button
