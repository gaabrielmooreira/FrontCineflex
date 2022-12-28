import styled from "styled-components"
import { Link } from "react-router-dom"

export default function CineflexHeader() {
    return (
        <CineHeader>
            <Link to="/">
                <h1>CINEFLEX</h1>
            </Link>
        </CineHeader>
    )
}

const CineHeader = styled.header`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 34px;
    width: 100vw;
    height: 67px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #E8833A;
    background-color: #C3CFD9;
    a {
        text-decoration: none;
        color: #E8833A;
    }
` 