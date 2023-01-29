import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./container/Home";
import NavBar from "./components/NavBar";

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: 'nav main';
  grid-template-columns: 150px 1fr;
  min-height:100%;
`

const Nav = styled.div`
  grid-area: nav;
  height: 100vh;
`

const Main = styled.div`
  grid-area: main;
  height:100vh;
  overflow: auto;
`

function App() {
  return (
    <Wrapper>
      <Router>
        <Nav>
          <NavBar />
        </Nav>
        <Main>
          <Routes>
            <Route path="/ben-barlow-portfolio" element={<Home />} />
          </Routes>
        </Main>
      </Router>
    </Wrapper>
  );
}

export default App;
