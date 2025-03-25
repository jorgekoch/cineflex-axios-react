import styled from "styled-components";

export default function Sucesso () {

    return (
        <Body>
            <Title>
                <h1>Pedido finalizado!</h1>
            </Title>
            <SessionData>
                <h1>Filme e Sessão</h1>
                <Empty></Empty>
                <h1>Ingressos</h1>
                <Empty></Empty>
                <h1>Comprador</h1>
                <Empty></Empty>
            </SessionData>
        </Body>
    )
}


const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #212226;
    h1 {
        font-family: Sarala;
        font-weight: 400;
        font-size: 24px;
        line-height: 100%;
        letter-spacing: 4%;
        text-align: center;
        vertical-align: middle;
    }
`
const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 78px;
    margin-top: 67px;
    font-family: Sarala;
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 4%;
    text-align: center;
    vertical-align: middle;
    color: #9DB899;
`

const SessionData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 338px;
    height: 421px;
    border-radius: 8px;
    background-color: #2B2D36;
    h1 {
        font-family: Sarala;
        font-weight: 700;
        font-size: 22px;
        line-height: 100%;
        letter-spacing: 4%;
        vertical-align: middle;
        color: #EE897F;
        margin-left: 19px;
    }
    `

    const Empty = styled.div`
        width: 302px;
        border: 1px solid #4E5A65;
        margin: 20px;
    `