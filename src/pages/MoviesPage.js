import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";
import { Link } from "react-router-dom";

export default function MoviesPage() {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
        promise.then(res => {
            setMovieList(res.data);
        });
        promise.catch(err => console.log(err.response.data));
    }, []);

    if (movieList === undefined) return;

    return (
        <MoviesPageContainer>
            <h2>Selecione o filme</h2>
            <MoviesContainer>
                {
                    movieList.map(movie =>
                        <Link key={movie.id} to={`/sessions/${movie.id}`}>
                            <Movie data-test="movie"
                                id={movie.id}
                                title={movie.title}
                                posterURL={movie.posterURL}
                            />
                        </Link>)
                }
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
