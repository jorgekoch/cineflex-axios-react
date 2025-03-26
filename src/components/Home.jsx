import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import loadingGif from "../images/loading.gif";


export default function Home ({ setSessionData, sessionData }) {
    const [poster, setPoster] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const promiseURL = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
        promiseURL.then(response => {
            setPoster(response.data);
        });
        promiseURL.catch(error => console.log(error.response.data));
    }, [])

    if (poster.length === 0) { 
        return (
            <Body $posterlength={poster.length}>
                <Title>
                    <h1>Em Cartaz</h1>
                </Title>
                <Loading src={loadingGif} />
            </Body>
        );
    }

    return (
        <Body>
            <Title>
                <h1>Em Cartaz</h1>
            </Title>
            <Movies>
                {poster.map((movie, id) => (
                    <Movie key={id}>
                        <img src={movie.posterURL} alt="img" onClick={() => {
                            navigate(`/sessoes/${movie.id}`)
                            setSessionData({...sessionData, name: movie.title})
                            }}/>
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
    height: ${(props) => props.$posterlength === 0 ? "100vh" : "100%"};
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

const Loading = styled.img`
    display: flex;

    width: 50px;
    height: 50px;
    background-color: #FFFFFF;
    opacity: 0.8;
`