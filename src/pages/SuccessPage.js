import styled from "styled-components";
import { useNavigate } from "react-router-dom";



export default function SuccessPage({ purchaseDetails, setPurchaseDetails }) {
    const navigate = useNavigate();
    function goToHome() {
        setPurchaseDetails({
            title: "",
            date: "",
            time: "",
            seats: [],
            name: "",
            cpf: ""
        })
        navigate("/");
    }
    return (
        <SuccessPageContainer>
            <h2>Pedido feito com sucesso!</h2>
            <MovieInfoContainer>
                <h3>Filme e sessão</h3>
                <p>{purchaseDetails.title}</p>
                <p>{purchaseDetails.date} {purchaseDetails.time}</p>
            </MovieInfoContainer>
            <MovieInfoContainer>
                <h3>Ingressos</h3>
                {purchaseDetails.seats.map((seatName) => <p>Assento {seatName}</p>)}
            </MovieInfoContainer>
            <MovieInfoContainer>
                <h3>Comprador</h3>
                <p>Nome: {purchaseDetails.name}</p>
                <p>CPF: {purchaseDetails.cpf}</p>
            </MovieInfoContainer>
            <button onClick={goToHome}>Voltar para Home</button>
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
    button{
        width: 225px;
        height: 42px;
        margin-top: 70px;
        align-self: center;
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