import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Assentos ({ setSessionData, sessionData }) {
    const { showtimeId } = useParams();
    const navigate = useNavigate();
    const [assentos, setAssentos] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [name, setName] = useState("");
	const [document, setDocument] = useState("");
  
    function finalizar (event) {
        event.preventDefault();

        axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", 
            {
            ids: selectedSeats,
            name: name,
            cpf: document
            })
            .then(() => navigate("/sucesso"))
            .catch(error => console.log(error.response.data))
    }

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
                    seat.isAvailable ? 
                    <Seat key={seat.id}
                        $selected={selectedSeats.includes(seat.id)}
                        onClick={() => {
                        selectedSeats.includes(seat.id) ? 
                        setSelectedSeats(selectedSeats.filter(seatId => seatId !== seat.id)) :
                        setSelectedSeats([...selectedSeats, seat.id])
                        }}>
                    <h1>{seat.name}</h1></Seat> : 
                    <OccupiedSeat key={seat.id} onClick={() => alert("Esse assento não está disponível")}>
                        <h1>{seat.name}</h1>
                    </OccupiedSeat>
                ))}
            </Seats>
            <Empty></Empty>
                <form onSubmit={finalizar}>
                    <InfoName>
                        <h1>Nome do comprador:</h1>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Digite seu nome..." required />
                    </InfoName>
                    <InfoName>
                        <h1>CPF do comprador:</h1>
                        <input type="number" value={document} onChange={e => setDocument(e.target.value)} placeholder="Digite seu CPF..." required />
                    </InfoName>
                    <Button 
                        type="submit"
                        onClick={() => {
                            const selectedSeatNames = selectedSeats.map(seatId => assentos.seats.find(seat => seat.id === seatId).name);
                            setSessionData({...sessionData, seats: selectedSeatNames, buyer: name, buyerCPF: document});
                            }}>
                        <h1>Reservar assento(s)</h1>
                    </Button>
                </form>
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
    box-sizing: border-box;
    background-color: ${(props) => props.$selected ? "#FADBC5" : "#9DB899"};
    border: ${(props) => props.$selected ? "2px solid #EE897F" : "1px solid #808F9D"};
    margin: 5px;
    h1 {
        font-family: Roboto;
        font-weight: 400;
        font-size: 11px;
        line-height: 100%;
        letter-spacing: 4%;
        text-align: center;
        vertical-align: middle;
        color: #2B2D36;
    }
`

const OccupiedSeat = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    border-radius: 12px;
    box-sizing: border-box;
    background-color: #2B2D36;
    margin: 5px;
    h1 {
        font-family: Roboto;
        font-weight: 400;
        font-size: 11px;
        line-height: 100%;
        letter-spacing: 4%;
        text-align: center;
        vertical-align: middle;
        color: #2B2D36;
    }
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