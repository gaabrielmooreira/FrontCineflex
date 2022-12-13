import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CineflexFooter from "../components/CineflexFooter";
import Seat from "../components/Seat";

export default function SeatsPage({setPurchaseDetails}) {
    const { sessionId } = useParams();
    const [seatsList, setSeatsList] = useState([]);
    const [seatsSelec, setSeatsSelec] = useState([]);
    const [seatsSelecName, setSeatsSelecName] = useState([]);
    const [inputName, setInputName] = useState("");
    const [inputCpf, setInputCpf] = useState("");
    const navigate = useNavigate();

    function handleSeat(seatId,seatName,isAvailable) {
        if(isAvailable === false) return alert("O assento não está disponível!");
        if (seatsSelec.includes(seatId)) {
            setSeatsSelec(seatsSelec.filter(seat => seat !== seatId));
            setSeatsSelecName(seatsSelecName.filter(seat => seat !== seatName));
        } else {
            setSeatsSelec([...seatsSelec, seatId]);
            setSeatsSelecName([...seatsSelecName, seatName]);
        }
    }

    function bookSeats(event) {
        event.preventDefault();
        if (seatsSelec.length === 0 ) return alert("Não selecionou nenhum assento!");

        const promise = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", { ids: seatsSelec, name: inputName, cpf: inputCpf });
        promise.then(() => {
            setPurchaseDetails({
                title:seatsList.movie.title,
                date:seatsList.day.date,
                time:seatsList.name,
                seats: seatsSelecName,
                name:inputName,
                cpf:inputCpf 
            })
            navigate("/sucesso");
        });
    }

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`);
        promise.then(res => setSeatsList(res.data));
        promise.catch(err => console.log(err.response.data));
    }, []);

    if (seatsList === undefined || seatsList.movie === undefined) return;

    return (
        <SeatsPageContainer>
            <h2>Selecione o assento</h2>
            <SeatsContainer>
                {
                    seatsList.seats.map((seat) =>
                        <Seat
                            key={seat.id}
                            id={seat.id}
                            name={seat.name}
                            isAvailable={seat.isAvailable}
                            seatsSelec={seatsSelec}
                            handleSeat={handleSeat}
                        />)
                }
            </SeatsContainer>
            <SuperscriptionContainer>
                <Superscription backgroundColor="#1AAE9E" borderColor="#0E7D71">
                    <div>
                    </div>
                    <p>Selecionado</p>
                </Superscription>
                <Superscription backgroundColor="#C3CFD9" borderColor="#7B8B99">
                    <div>
                    </div>
                    <p>Disponível</p>
                </Superscription>
                <Superscription backgroundColor="#FBE192" borderColor="#F7C52B">
                    <div>
                    </div>
                    <p>Indisponivel</p>
                </Superscription>
            </SuperscriptionContainer>
            <CustomerForm onSubmit={bookSeats}>
                <label htmlFor="name">Nome do comprador:</label>
                <input data-test="client-name" onChange={e => setInputName(e.target.value)} value={inputName} id="name" type="text" placeholder="Digite seu nome..." required />
                <label htmlFor="cpf">CPF do comprador:</label>
                <input data-test="client-cpf" onChange={e => setInputCpf(e.target.value)} value={inputCpf} id="cpf" type="text" placeholder="Digite seu CPF..." required />
                <button data-test="book-seat-btn" type="submit">Reservar assento(s)</button>
            </CustomerForm>
            <CineflexFooter
                isSeatsPage={true}
                title={seatsList.movie.title}
                posterURL={seatsList.movie.posterURL}
                time={seatsList.name}
                weekday={seatsList.day.weekday}
            />
        </SeatsPageContainer>
    )
}

const SeatsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 67px;
    margin-bottom: 117px;
    padding: 40px 24px;
    h2 {
        font-family: 'Roboto',sans-serif;
        font-size: 24px;
        font-weight: 400;
        color: #293845;
    }
`
const SeatsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
    gap: 7px;

`
const SuperscriptionContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 20px;
`
const Superscription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70px;
    
    div{
        width: 24px;
        height: 24px;
        border-radius: 17px;
        background-color: ${props => props.backgroundColor};
        border: 1px solid ${props => props.borderColor};
    }

`
const CustomerForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    width: 100%;
    gap: 10px;
    font-family: 'Roboto',sans-serif;
    label {
        display: block;
        line-height: 21px;
        font-size: 18px;
    }
    input{
        width: 100%;
        box-sizing: border-box;
        height: 51px;
        &::placeholder{
            font-size: 18px;
            padding-left: 16px;
            color: #AFAFAF;
        }
    }
    button{
        align-self: center;
        width: 225px;
        height: 42px;
        background-color: #E8833A;
        border: none;
        border-radius: 3px;
        margin-top: 50px;
        font-size: 18px;
        color: #FFFFFF;
    }
`