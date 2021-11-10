import styled from "styled-components"

export const MainButton = styled.div`
    a   {
        text-decoration: none;
        display: block;
        padding: 7px 0;
        background-color: ${props => props.color ? props.backgroundColor : "rgb(29, 161, 242)"};
        color: ${props => props.color ? props.color : "rgb(255, 255, 255)" };
        text-align: center;
        border: ${props => props.border ? props.border : "2px solid rgb(29, 161, 242)"};
        border-radius: 50px;
        font-weight: bold;
        letter-spacing: 1px;
        margin: ${props => props.margin ? props.margin : ""};
    }
`;