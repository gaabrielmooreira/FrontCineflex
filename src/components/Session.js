import styled from "styled-components";
import SessionTime from "./SessionTime";
import { Link } from "react-router-dom";

export default function Session(props) {
    const { weekday, date, showtimes } = props
    return (
        <SessionContainer >
            <p>{weekday} - {date}</p>
            <SessionTimesContainer>
                {
                    showtimes.map(time =>
                        <Link key={time.id} to={`/seats/${time.id}`}>
                            <SessionTime data-test="showtime" name={time.name} />
                        </Link>
                    )
                }
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