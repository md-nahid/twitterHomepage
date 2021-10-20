import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    padding: 4px 12px;
    background-color: #ffffff;
    position: sticky;
    top: 0;
    justify-content: ${props => props.wrapperJustified || "center"};
    align-items: ${props => props.wrapperAligned || "center"};
    border-bottom: ${props => props.borderBottom || "none"}
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    justify-content: center;
    align-items: center;
    img {
        display: none;
        border-radius: 50px;
        @media only screen and ( max-width: 1024px ) {
            display: block;
            margin-right: 15px;
        }
    }
`;

export const RightSide = styled.div`
    div {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 100%;
        }
        span {
            width: 40px;
            height: 40px;
            border-radius: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover {
                background-color: rgba(219, 218, 218, 0.438);
            }
            svg {
                font-size: 20px;
            }
        }
    }
    
`;



