import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SuccessPage() {
    return (
        <SuccessPageContainer>
            <h2>Pedido feito com sucesso!</h2>
            <MovieInfoContainer>
                <h3>Filme e sessão</h3>
                <p>Nome do filme</p>
                <p>Data e hora do filme</p>
            </MovieInfoContainer>
            <MovieInfoContainer>
                <h3>Ingressos</h3>
                <p>Assento Id</p>
                <p>Assento Id</p>
            </MovieInfoContainer>
            <MovieInfoContainer>
                <h3>Comprador</h3>
                <p>Nome: nomeComprador</p>
                <p>CPF: cpfComprador</p>
            </MovieInfoContainer>
            <Link to="/">
                <button>Voltar para Home</button>
            </Link>
        </SuccessPageContainer>
    )
}

const SuccessPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 67px;
    padding: 40px 24px;
    font-family: 'Roboto',sans-serif;
    h2 {
        font-size: 24px;
        font-weight: 700;
        color: #247A6B;
        width: 180px;
        align-self: center;
        text-align: center;
    }
    a {
        margin-top: 70px;
        align-self: center;
    }
    button{
        width: 225px;
        height: 42px;
        
        background-color: #E8833A;
        color: #FFFFFF;
        font-size: 18px;
        border: none;
        border-radius: 3px;
        
        &:hover{
            cursor: pointer;
        }
    }
`
const MovieInfoContainer = styled.div`
    margin-top: 50px;
    font-family: 'Roboto',sans-serif;
    h3{
        font-size: 24px;
        font-weight: 700;
        color: #293845;
        margin-bottom: 7px;
    }
    p{
        font-size: 22px;
        font-weight: 400;
        color: #293845;
    }
`