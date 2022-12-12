import styled from "styled-components";

export default function Seat(props) {
    const { id, name, isAvailable, seatsSelec, handleSeat } = props;

    return (
        <SeatButton onClick={() => handleSeat(id)} seatsSelec={seatsSelec} id={id} isAvailable={isAvailable} disabled={!isAvailable}>
            {name}
        </SeatButton>
    )
}

const SeatButton = styled.button`
    font-family: 'Roboto', sans-serif;
    font-size: 11px;
    width: 26px;
    height: 26px;
    color: #000000;
    background-color: ${props => props.isAvailable ? (props.seatsSelec.includes(props.id) ? "#1AAE9E" : "#C3CFD9") : "#FBE192"};
    border: 1px solid ${props => props.isAvailable ? (props.seatsSelec.includes(props.id) ? "#0E7D71" : "#808F9D") : "#F7C52B"};
    border-radius: 12px;
`