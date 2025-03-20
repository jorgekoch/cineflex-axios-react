import styled from "styled-components";
import cine from "../images/clapperboard1.png";
import { Link } from "react-router-dom";

export default function Topo () {
    return (
        <Head to="/">
        <img src={cine} alt="cine" />
        <h1>Cineflex</h1>
        </Head>
    )
}

const Head = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: fixed;
    height: 67px;
    width: 100%;
    background: #EE897F;
    text-decoration: none;

    img {
        width: 40px;
        height: 40px;
        color: #FADBC5;
        margin-right: 10px;
    }
    h1 {
        font-family: Raleway;
        font-weight: 600;
        font-size: 34px;
        line-height: 100%;
        text-align: center;
        vertical-align: middle;
        color: #FADBC5;


    }
`