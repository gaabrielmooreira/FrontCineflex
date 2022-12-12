import styled from "styled-components"

export default function CineflexFooter(props) {
    const { title, posterURL, time, weekday, isSeatsPage } = props;
    return (
        <CineFooter data-test="footer">
            <ImgContainer>
                <img src={posterURL} alt="Imagem do Filme" />
            </ImgContainer>

            <div>
                <p>{title}</p>
                {isSeatsPage && <p>{weekday} - {time}</p>}
            </div>
        </CineFooter>
    )
}

const CineFooter = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 117px;
    display: flex;
    align-items:center;
    gap: 14px;
    background-color: #DFE6ED;
    border-top: 1px solid #9EADBA;
    p {
        font-family: 'Roboto',sans-serif;
        font-size: 26px;
        color:#293845;
    }
`
const ImgContainer = styled.div`
    padding:8px;
    background-color: #FFF;
    img {
        width: 48px;
        height: 72px;
    }
`