import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Sucesso ({ sessionData }) {
    const navigate = useNavigate();

    return (
        <Body>
            <Title>
                <h1>Pedido finalizado!</h1>
            </Title>
            <SessionData>
                <h1>Filme e Sessão</h1>
                <Empty></Empty>
                <div>
                    <h2>{sessionData.name}</h2>
                    <h2>{sessionData.date} às {sessionData.time}</h2>
                </div>
                <h1>Ingressos</h1>
                <Empty></Empty>
                <div>{sessionData.seats.map(seat => (
                    <h2 key={seat}>Assento {seat}</h2>
                ))}</div>
                <h1>Comprador</h1>
                <Empty></Empty>
                <div>
                    <h2>{sessionData.buyer}</h2>
                    <h2>{sessionData.buyerCPF}</h2>
                </div>
            </SessionData>
            <Button
                onClick={() => navigate("/")}>
                <h1>Voltar para a tela inicial!</h1>
            </Button>
        </Body>
    )
}


const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
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
    justify-content: flex-start;
    width: 338px;
    padding: 20px; 
    border-radius: 8px;
    background-color: #2B2D36;
    gap: 20px; 
    margin-bottom: 20px; 

    h1 {
        font-family: Sarala;
        font-weight: 700;
        font-size: 22px;
        line-height: 100%;
        letter-spacing: 4%;
        color: #EE897F;
    }

    h2 {
        font-family: Sarala;
        font-weight: 400;
        font-size: 20px;
        line-height: 100%;
        letter-spacing: 4%;
        color: #FFFFFF;
        margin-bottom: 10px;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 5px; 
    }
`;

const Empty = styled.div`
    width: 100%; 
    border: 1px solid #4E5A65;
    margin: 0 0 10px 0; 
`;

const Button = styled.button`
    width: 338px;
    height: 42px;
    border-radius: 8px;
    background-color: #EE897F;
    margin: 20px;
    h1 {
        font-family: Sarala;
        font-weight: 700px;
        font-size: 18px;
        line-height: 100%;
        letter-spacing: 4%;
        text-align: center;
        vertical-align: middle;
        color: #2B2D36;
    }
`