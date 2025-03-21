import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

export default function Sessoes () {
    const { movieId } = useParams();

    const [sessao, setSessao] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`)
        .then(response => setSessao(response.data))
        .catch(error => console.log(error.response.data))
    }, [])

    if(sessao.length === 0) return null;

    return (
        <Body>
            <Title>
                <h1>Selecione o horário</h1>
            </Title>
            <Movies>
                    <Movie>
                            {sessao.days.map(day => (
                                <Sessions key={day.id}>
                                    <Day>{day.weekday}, {day.date}</Day>
                                    <Empty></Empty>
                                    <TimeContainer>
                                        {day.showtimes.map(showtime => (
                                            <Time key={showtime.id} onClick={() => navigate(`/assentos/${showtime.id}`)}>
                                                <h3>{showtime.name}</h3>
                                            </Time>
                                        ))}
                                    </TimeContainer>
                                </Sessions>
                            ))
                            }
                    </Movie>
            </Movies>
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
`

const Movies = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: center; 
    gap: 20px; 
    width: 100%; 
    margin-top: 20px;
`

const Movie = styled.div`
    img {
        width: 145px;
        height: 210px;
        border-radius: 8px;
    }

`

const Sessions = styled.div`
    width: 338px;
    height: 149px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #2B2D36;
    margin-bottom: 10px;
`
const Day = styled.div`
        font-family: Sarala;
        font-weight: 400;
        font-size: 20px;
        line-height: 100%;
        letter-spacing: 4%;
        vertical-align: middle;
        color: #FFFFFF;
`
const TimeContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Time = styled.div`
    width: 84px;
    height: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border-width: 2px;
    border-style: solid;
    border-color: #EE897F;

    h3 {
        font-family: Sarala;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 4%;
        text-align: center;
        vertical-align: middle;
        color: #EE897F;
    }
`

const Empty = styled.div`
    width: 80%;
    border: 1px solid #4E5A65
`