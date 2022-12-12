import styled from "styled-components";
import CineflexFooter from "../components/CineflexFooter";
import Session from "../components/Session";


export default function SessionsPage() {
    return (
        <SessionsPageContainer>
            <h2>Selecione o horário</h2>
            <SessionsContainer>
                <Session />
                <Session />
                <Session />
            </SessionsContainer>
            <CineflexFooter/>
        </SessionsPageContainer>
    )
}

const SessionsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 67px;
    padding: 40px 32px;
    h2 {
        font-family: 'Roboto',sans-serif;
        font-size: 24px;
        font-weight: 400;
        color: #293845;
    }
`
const SessionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;
    margin-top: 40px;
`
