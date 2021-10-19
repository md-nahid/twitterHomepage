import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    padding: 5px 10px;
    position: sticky;
    top: 0;
    background-color: #ffffff;
    justify-content: ${props => props.wrapperFlexBetween ? "space-between" : "center"};
    align-items: ${props => props.wrapperFlexStart ? "flex-start" : "center"};
    
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    padding: 5px 10px;
    background-color: #ebf0ec;
    border-radius: 50px;
    justify-content: ${props => props.formJustifyBetween ? "space-between" : "center"};
    align-items: ${props => props.formAlignStart || "center"};
    svg {
        font-size: 20px;
        margin: 0 10px;
        color: #646566;
    }
    input {
        width: 100%;
        height: 100%;
        display: block;
        border: none;
        font-size: 15px;
        padding: 10px;
        outline: none;
        background-color: transparent;
    }
`;

export const Icon = styled.div`
    display: ${props => props.IconDivDisplay || "none"};
    flex-direction: row;
    flex-wrap: no-wrap;
    margin-left: 30px;
    justify-content: ${props => props.justifyContent ? "space-between" : "center"};
    align-items: ${props => props.alignItems ? "flex-start" : "center"};
    span {
        width: 40px;
        height: 40px;
        border-radius: 50px;
        display: ${props => props.IconAllDisplay || "none"};
        justify-content: center;
        align-items: center;
        &:hover {
            background-color: rgba(15, 20, 25, 0.1);
        }
        &:last-child {
            display: ${props => props.Iconlast || "none"};
        }
        svg {
            font-size: ${props => props.IconFontSize || "20px"};
            color: rgb(15, 20, 25);
        }
    }
    
`;