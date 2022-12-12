import styled from "styled-components";
import CineflexFooter from "../components/CineflexFooter";
import Seat from "../components/Seat";

export default function SeatsPage() {
    return (
        <SeatsPageContainer>
            <h2>Selecione o horário</h2>
            <SeatsContainer>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
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
            <CustomerForm>
                <label forHtml="name">Nome do comprador:</label>
                <input id="name" type="text" placeholder="Digite seu nome..."/>
                <label forHtml="cpf">CPF do comprador:</label>
                <input id="cpf" type="number" placeholder="Digite seu CPF..."/>
                <button type="submit">Reservar assento(s)</button>
            </CustomerForm>
            <CineflexFooter />
        </SeatsPageContainer>
    )
}


const SeatsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 67px;
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