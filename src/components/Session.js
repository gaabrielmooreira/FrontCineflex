import styled from "styled-components";
import SessionTimeButton from "./SessionTimeButton";

export default function Session() {
    return (
        <SessionContainer>
            <p>Quinta-feira - 24/06/2021</p>
            <SessionTimesContainer>
                <SessionTimeButton />
                <SessionTimeButton />
                <SessionTimeButton />
            </SessionTimesContainer>
        </SessionContainer>
    )
}


const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;
    p {
        font-family: 'Roboto',sans-serif;
        font-size: 20px;
        font-weight: 400;
        color: #293845;
    }

`
const SessionTimesContainer = styled.div`
    display: flex;
    gap: 8px;
`