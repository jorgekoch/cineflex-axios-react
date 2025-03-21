import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Assentos () {
    const { showtimeId } = useParams();
    const navigate = useNavigate();
    const [assentos, setAssentos] = useState([]);

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${showtimeId}/seats`)
        .then(response => setAssentos(response.data))
        .catch(error => console.log(error.response.data))
    }
    , [])

    if(assentos.length === 0) return null;


    return (
        <Body>
            <Title>Selecione o(s) assento(s)</Title>
            <Seats>
                {assentos.seats.map(seat => (
                    <Seat key={seat.id}>{seat.name}</Seat>
                ))}
            </Seats>
            <Empty></Empty>
                <InfoName>
                    <h1>Nome do comprador:</h1>
                    <input type="text" placeholder="Digite seu nome..."/>
                </InfoName>
                <InfoName>
                    <h1>CPF do comprador:</h1>
                    <input type="text" placeholder="Digite seu CPF..."/>
                </InfoName>
            <Button 
                onClick={() => navigate("/sucesso")}>
                <h1>Reservar assento(s)</h1>
            </Button>
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
        color: #FFFFFF;
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
    color: #FFFFFF;
`

const Seats = styled.div`
    width: 375px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 10px;
`

const Seat = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    border-radius: 12px;
    background-color: #9DB899;
    border: 1px solid #808F9D;
    margin: 4px;
`

const Empty = styled.div`
    width: 302px;
    border: 1px solid #4E5A65;
    margin: 20px;
`

const InfoName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px;
    input {
        width: 338px;
        height: 40px;
    }
    h1 {
        font-family: Sarala;
        font-weight: 400px;
        font-size: 16px;
        line-height: 100%;
        vertical-align: middle;
        margin-bottom: 5px;
    }
`

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