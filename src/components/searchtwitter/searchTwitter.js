import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Form, Icon } from "./search.styled"
import { FiSearch } from "react-icons/fi"

const SearchTwitter = ({ type, placeholder, ExtraIcon1, ExtraIcon2, IconDivDisplay, IconFontSize, Iconlast, IconAllDisplay }) => {

    return (
        <Wrapper wrapperFlexBetween >
            <Form action="">
                <FiSearch />
                <input type={type} placeholder={placeholder} />
            </Form>
            <Icon IconFontSize={IconFontSize} Iconlast={Iconlast} IconAllDisplay={IconAllDisplay} IconDivDisplay={IconDivDisplay}>
                <span>{ExtraIcon1}</span>
                <span>{ExtraIcon2}</span>
            </Icon>
        </Wrapper>
    )
}


SearchTwitter.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    ExtraIcon1: PropTypes.object,
    ExtraIcon2: PropTypes.object,
    IconFontSize: PropTypes.string,
    Iconlast: PropTypes.string,
    IconAllDisplay: PropTypes.string,
    IconDivDisplay: PropTypes.string
  };




export default SearchTwitter
