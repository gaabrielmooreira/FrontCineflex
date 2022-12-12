import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Movie(props) {
    const {id, title, posterURL, releaseDate, overview} = props;
    return (
        <MovieContainer>
            <Link to={`/sessions/${id}`}>
                <img src={posterURL} alt={title} />
            </Link>
        </MovieContainer>
    )
}

const MovieContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px rgba(0,0,0,0.1);
    img {
        width: 129px;
        height: 193px;
    }
`