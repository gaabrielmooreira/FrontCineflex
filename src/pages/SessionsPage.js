import styled from "styled-components";
import CineflexFooter from "../components/CineflexFooter";
import Session from "../components/Session";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export default function SessionsPage() {
    const { movieId } = useParams();
    const [sessionsList, setSessionsList] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`);
        promise.then(res => setSessionsList(res.data));
        promise.catch(err => console.log(err.response.data));
    }, [])

    if (sessionsList.days === undefined) return;

    return (
        <SessionsPageContainer>
            <h2>Selecione o horário</h2>
            <SessionsContainer>
                {sessionsList.days.map(session =>
                    <Session
                        data-test="movie-day"
                        key={session.id}
                        weekday={session.weekday}
                        date={session.date}
                        showtimes={session.showtimes}
                    />)
                }
            </SessionsContainer>
            <CineflexFooter title={sessionsList.title} posterURL={sessionsList.posterURL} isSeatsPage={false} />
        </SessionsPageContainer>
    )
}

const SessionsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 67px;
    margin-bottom: 117px;
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
