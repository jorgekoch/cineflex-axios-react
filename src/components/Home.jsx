import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Home () {
    const [poster, setPoster] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const promiseURL = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
        promiseURL.then(response => {
            setPoster(response.data);
        });
        promiseURL.catch(error => console.log(error.response.data));
    }, [])

    return (
        <Body>
            <Title>
                <h1>Em Cartaz</h1>
            </Title>
            <Movies>
                {poster.map((movie, id) => (
                    <Movie key={id}>
                        <img src={movie.posterURL} alt="img" onClick={() => {
                            navigate(`/sessoes/${movie.id}`)}}/>
                    </Movie>
                ))}
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

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 78px;
    margin-top: 67px;
`;