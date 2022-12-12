import styled from "styled-components";

export default function Movie() {
    return (
        <MovieContainer>
            <img src="" alt="Imagem do Filme"></img>
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