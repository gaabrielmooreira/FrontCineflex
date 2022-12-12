import styled from "styled-components";
import Movie from "../components/Movie";


export default function MoviesPage() {
    return (
        <MoviesPageContainer>
            <h2>Selecione o filme</h2>
            <MoviesContainer>
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
            </MoviesContainer>
        </MoviesPageContainer>

    )
}

const MoviesPageContainer = styled.main`
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
const MoviesContainer = styled.section`
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 11px;
`
