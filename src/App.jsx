import Topo from "./components/Topo.jsx";
import Home from "./components/Home.jsx";
import Sessoes from "./components/Sessoes.jsx";
import Assentos from "./components/Assentos.jsx";
import Sucesso from "./components/Sucesso.jsx";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {

  const [sessionData, setSessionData] = useState({
    name: "",
    date: "",
    time: "",
    seats: [],
    buyerName: "",
    buyerCPF: ""
  })

  return (
    <BrowserRouter>
      <Body>
      <Topo />
        <Routes>
          <Route path="/" element={<Home setSessionData={setSessionData} sessionData={sessionData} />} />
          <Route path="/sessoes/:movieId" element={<Sessoes setSessionData={setSessionData} sessionData={sessionData} />} />
          <Route path="/assentos/:showtimeId" element={<Assentos setSessionData={setSessionData} sessionData={sessionData} />} />
          <Route path="/sucesso" element={<Sucesso sessionData={sessionData} />} />
        </Routes>
      </Body>
    </BrowserRouter>
  )
}

const Body = styled.div`
  width: 100%;
  height: 100%;
`

