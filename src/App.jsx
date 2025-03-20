import Topo from "./components/Topo.jsx";
import Home from "./components/Home.jsx";
import Sessoes from "./components/Sessoes.jsx";
import Assentos from "./components/Assentos.jsx";
import Sucesso from "./components/Sucesso.jsx";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <BrowserRouter>
      <Body>
      <Topo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessoes/:movieId" element={<Sessoes />} />
          <Route path="/assentos" element={<Assentos />} />
          <Route path="/sucesso" element={<Sucesso />} />
        </Routes>
      </Body>
    </BrowserRouter>
  )
}

const Body = styled.div`
  width: 100%;
  height: 100%;
`

