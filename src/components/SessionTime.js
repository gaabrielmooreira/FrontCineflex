import styled from "styled-components"

export default function SessionTime({name}) {
    return (
        <StyledSessionTimeButton>{name}</StyledSessionTimeButton>
    )
}

const StyledSessionTimeButton = styled.button`
    font-family: 'Roboto',sans-serif;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 83px;
    height: 43px;
    border: none;
    border-radius:3px;
    background-color:#E8833A;
    color: #FFFFFF;
    &:hover {
        cursor: pointer;
    }
`